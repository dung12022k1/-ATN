const { response } = require('express');
const {conn,sql} = require('../../connect');
const { lowerCase, localeLowerCase } = require('lower-case');
module.exports = function(){
    this.getAll = async function(page,limit,search,orderby,orderdir,location,price,price1,rating,result){
        //Select * from hotels
        var pool = await conn;
        var sqlString = "FilterHotel";
        if(search != undefined){
            search = lowerCase(search)
        }
        if(limit == undefined || limit == null || limit =='' || !parseInt(limit)){
            limit =5;
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
        if(orderby == undefined || orderby == null){
            orderby ='Id';
        }
        console.log(search)
        return await pool.request()
        .input('page',page).input('size',limit)
        .input('search',search)
        .input('orderBy',orderby)
        .input('orderDir',orderdir)
        .input('location',location)
        .input('price',price)
        .input('price1',price1)
        .input('rating',rating)
        .execute(sqlString,function(err,data){
            if(data.recordset.length >0){
                result(null,data);
            }else{
                result(true,null);
            }
        });      
    }
this.getById = async function(id,result){
    console.log(id);
    var pool = await conn;
    var sqlString = "SELECT * FROM Hotels WHERE Id =@varId";
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
    var sqlString = "UPDATE Hotels SET  Name = @name,LocationId = @locationId,Description = @description,Detail = @detail,Thumbnail = @thumbnail,Price = @price,Address = @address,Status = @status,Rating = @rating WHERE Id= @id";
    ;
    return await pool.request()
    .input('name',sql.NVarChar,newData.Name)
    .input('locationId',sql.NVarChar,newData.LocationId)
    .input('description',sql.NVarChar,newData.Description)
    .input('detail',sql.VarChar,newData.Detail)
    .input('thumbnail',sql.VarChar,newData.Thumbnail)
    .input('price',sql.Float,newData.Price)
    .input('address',sql.VarChar,newData.Address)
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
    var id ='HT_'
    var sqlString1 = "select max(CAST((substring(Id,4,2)) AS DECIMAL(5,0))) from Hotels"
    await pool.request().query(sqlString1,function(err,result1){
        if(err) throw err;
            console.log(result1.recordset[0]['']);
            idc = result1.recordset[0][''] +1;
            console.log(idc)
            id+=idc
            console.log(id)
    
    var sqlString = "INSERT INTO Hotels (Id,Name,LocationId,Thumbnail,Address,Price,Description,Detail,Status,Rating,CreatedAt) VALUES(@id,@name, @locationId,@thumbnail ,@address, @price,@description,@detail,@status,@rating,'2022-01-09T23:49:58')";
    return  pool.request()
    .input('name',sql.NVarChar,newData.Name)
    .input('locationId',sql.NVarChar,newData.LocationId)
    .input('thumbnail',sql.VarChar,newData.Thumbnail)
    .input('address',sql.VarChar,newData.Address)
    .input('detail',sql.VarChar,newData.Detail)
    .input('price',sql.Float,newData.Price)
    .input('description',sql.VarChar,newData.Description)
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
    var sqlString = "UPDATE Hotels SET Status = @status WHERE Id= @id";
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
