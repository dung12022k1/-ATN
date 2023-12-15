const { response } = require('express');
const {conn,sql} = require('../../connect');
const { lowerCase, localeLowerCase } = require('lower-case');
module.exports = function(){
    this.getAll = async function(page,limit,search,orderby,orderdir,price,price1,departureat,returnat,departure,destination,result){
        //Select * from student
        var pool = await conn;
        var checknull;
        var sqlString = "FilterFlight";
        if(search != undefined){
            search = lowerCase(search)
        }
        if(limit == undefined || limit == null || limit =='' || !parseInt(limit)){
            limit =10;
        }
        if(page == undefined || page == null || page =='' || !parseInt(page) ){
            page =1;
        }
        if(price == undefined || price == null || price == '' || !parseFloat(price)){
            price =0;
        }
        if(price1 == undefined || price1 == null || price =='' || !parseFloat(price1)){
            price1 =5000;
        }
        if(orderby == undefined || orderby == null || orderby==''){
            orderby ='Id';
        }
        if(departureat== undefined || departureat == null || departureat==''){
            departureat ='2000-02-02';
        }
        if(returnat== undefined || returnat==''){
            returnat ='2050-02-02';
            checknull = null;
        }
        console.log(departureat)
        console.log(returnat)
        console.log(price)
        return await pool.request()
        .input('page',page)
        .input('size',limit)
        .input('search',search)
        .input('orderBy',orderby)
        .input('orderDir',orderdir)
        .input('price',price)
        .input('price1',price1)
        .input('departureat',departureat)
        .input('returnat',returnat)
        .input('departure',departure)
        .input('destination',destination)
        .execute(sqlString,function(err,data){
            if(data.recordset.length >0){
                result(null,data);
            }else{
                result(true,null);
            }
        });      
    }
    // this.getAll = async function(page,result){
    //     //Select * from student
    //     var pool = await conn;
    //     var sqlString = "FilterHotel";
    //     return await pool.request()
    //     .input('page',page).input('size',5)
    //     .input('search','HaNoi')
    //     .execute(sqlString,function(err,data){
    //         if(data.recordset.length >0){
    //             result(null,data);
    //         }else{
    //             result(true,null);
    //         }
    //     });      
    // }
this.getById = async function(id,result){
    console.log(id);
    var pool = await conn;
    var sqlString = "SELECT * FROM Flights WHERE Id =@varId";
    return await pool.request()
    .input('varId', sql.NVarChar,id)
    // .input('varname',sql.NVarChar,name)
    .query(sqlString,function(err,data){
        if(data.recordset.length >0){
            result(null,data);
        }else{
            result(true,null);
        }
    });
}
this.update = async function(id,newData,result){
    var pool = await conn;
    var sqlString = "UPDATE Flights SET DepartureAt = @departureAt,ReturnAt = @returnAt,IsRoundTicket = @isRoundTicket,DepartureId = @departureId,DestinationId = @destinationId,Description = @description,Detail = @detail,Thumbnail = @thumbnail,Status = @status,Price=@price,Duration = @duration WHERE Id= @id";
    return await pool.request()
    .input('departureAt',sql.DateTime,newData.DepartureAt)
    .input('returnAt',sql.DateTime,newData.ReturnAt)
    .input('isRoundTicket',sql.Bit,newData.IsRoundTicket)
    .input('departureId',sql.NVarChar,newData.DepartureId)
    .input('destinationId',sql.NVarChar,newData.DestinationId)
    .input('description',sql.VarChar,newData.Description)
    .input('detail',sql.VarChar,newData.Detail)
    .input('thumbnail',sql.VarChar,newData.Thumbnail)
    .input('status',sql.Int,newData.Status)
    .input('price',sql.Float,newData.Price)
    .input('duration',sql.Int,newData.Duration)
    .input('id',sql.NVarChar,id)
    .query(sqlString,function(err,data){
        if(err){
            result(true,null);
        }else{
            result(null,newData);
        }
    });
}

this.create = async function(newData,result){
    var pool = await conn;
    var idc
    var id ='FL_'
    var sqlString1 = "select max(CAST((substring(Id,4,2)) AS DECIMAL(5,0))) from Flights"
    await pool.request().query(sqlString1,function(err,result1){
        if(err) throw err;
            console.log(result1.recordset[0]['']);
            idc = result1.recordset[0][''] +1;
            console.log(idc)
            id+=idc
            console.log(id)
    
    var sqlString = "INSERT INTO Flights (Id,DepartureId,DestinationId,Duration,Price,DepartureAt,ReturnAt,IsRoundTicket,Description,Detail,Thumbnail,Status,CreatedAt) VALUES(@id,@departureId,@destinationId,@duration,@price,@departureAt, @returnAt, @isRoundTicket,@description,@detail,@thumbnail,@status,'2022-01-09T23:49:58')";
    return  pool.request()
    .input('departureAt',sql.DateTime,newData.DepartureAt)
    .input('returnAt',sql.DateTime,newData.ReturnAt)
    .input('isRoundTicket',sql.Bit,newData.IsRoundTicket)
    .input('departureId',sql.NVarChar,newData.DepartureId)
    .input('destinationId',sql.NVarChar,newData.DestinationId)
    .input('description',sql.VarChar,newData.Description)
    .input('detail',sql.VarChar,newData.Detail)
    .input('thumbnail',sql.VarChar,newData.Thumbnail)
    .input('status',sql.Int,newData.Status)
    .input('duration',newData.Duration)
    .input('price',newData.Price)
    .input('id',sql.NVarChar,id)
    .query(sqlString,function(err,data){
        if(err){
            result(true,null);
        }else{
            result(null,newData);
        }
    });
})
 };
 this.delete = async function(id,status,result){
    var pool = await conn;
    var sqlString = "UPDATE Flights SET Status = @status WHERE Id= @id";
    return await pool.request()
    .input('status',sql.Int,status)
    .input('id',sql.NVarChar,id)
    .query(sqlString,function(err,data){
        if(err){
            result(true,null);
        }else{
            result(null,data);
        }
    });
}
}
