const { response } = require('express');
const {conn,sql} = require('../../connect');
const { lowerCase, localeLowerCase } = require('lower-case');
module.exports = function(){
    this.getAll = async function(page,limit,search,orderby,orderdir,price,price1,duration,duration1,rating,category,departure,destination,result){
        //Select * from student
        var pool = await conn;
        var sqlString = "FilterTour";
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
        if(duration == undefined || duration == null || duration =='' || !parseInt(duration)){
            duration =0;
        }
        if(duration1 == undefined || duration == null || duration =='' || parseInt(duration1) == false){
            duration1 =20;
        }
        if(orderby == undefined || orderby == null ||orderby==''){
            orderby ='Id';
        }
        return await pool.request()
        .input('page',page).input('size',limit)
        .input('search',search)
        .input('orderBy',orderby)
        .input('orderDir',orderdir)
        .input('duration',duration)
        .input('duration1',duration1)
        .input('price',price)
        .input('price1',price1)
        .input('rating',rating)
        .input('category',category)
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
    var sqlString = "SELECT * FROM Tours WHERE Id =@varId";
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
    var sqlString = "UPDATE Tours SET Name = @name,TourCategoryId = @categoryId,DepartureId = @departureId,DestinationId = @destinationId,Description = @description,Detail = @detail,Thumbnail = @thumbnail,Duration = @duration,Policy = @policy,SummarySchedule = @summary,Status = @status,Rating = @rating WHERE Id= @id";
    return await pool.request()
    .input('name',sql.NVarChar,newData.Name)
    .input('categoryId',sql.NVarChar,newData.TourCategoryId)
    .input('departureId',sql.NVarChar,newData.DepartureId)
    .input('destinationId',sql.NVarChar,newData.DestinationId)
    .input('description',sql.VarChar,newData.Description)
    .input('detail',sql.VarChar,newData.Detail)
    .input('thumbnail',sql.VarChar,newData.Thumbnail)
    .input('duration',sql.Int,newData.Duration)
    .input('policy',sql.VarChar,newData.Policy)
    .input('summary',sql.VarChar,newData.SummarySchedule)
    .input('status',sql.Int,newData.Status)
    .input('rating',sql.Int,newData.Rating)
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
    var id ='TOUR_'
    var sqlString1 = "select max(CAST((substring(Id,6,2)) AS DECIMAL(5,0))) from Tours"
    await pool.request().query(sqlString1,function(err,result1){
        if(err) throw err;
            console.log(result1.recordset[0]['']);
            idc = result1.recordset[0][''] +1;
            console.log(idc)
            id+=idc
            console.log(id)
    
    var sqlString = "INSERT INTO Tours (Id,Name,TourCategoryId,DepartureId,DestinationId,Description,Detail,Thumbnail,Duration,Policy,SummarySchedule,Status,Rating,CreatedAt) VALUES(@id,@name, @categoryId, @departureId,@destinationId,@description,@detail,@thumbnail,@duration, @policy, @summary, @status,@rating,'2022-01-09T23:49:58')";
    return  pool.request()
    .input('name',sql.NVarChar,newData.Name)
    .input('categoryId',sql.NVarChar,newData.TourCategoryId)
    .input('departureId',sql.NVarChar,newData.DepartureId)
    .input('destinationId',sql.NVarChar,newData.DestinationId)
    .input('description',sql.VarChar,newData.Description)
    .input('detail',sql.VarChar,newData.Detail)
    .input('thumbnail',sql.VarChar,newData.Thumbnail)
    .input('duration',sql.Int,newData.Duration)
    .input('policy',sql.VarChar,newData.Policy)
    .input('summary',sql.VarChar,newData.SummarySchedule)
    .input('status',sql.Int,newData.Status)
    .input('rating',sql.Int,newData.Rating)
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
    var sqlString = "UPDATE Tours SET Status = @status WHERE Id= @id";
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