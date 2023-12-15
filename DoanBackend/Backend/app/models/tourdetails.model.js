const { response } = require('express');
const {conn,sql} = require('../../connect');
module.exports = function(){
    this.getAll = async function(page,limit,result){
        //Select * from student
        var pool = await conn;
        var sqlString = "FilterTourDetail";
        if(limit == undefined || limit == null || limit =='' || !parseInt(limit)){
            limit =10;
        }
        if(page == undefined || page == null || page =='' || !parseInt(page) ){
            page =1;
        }
        return await pool.request()
        .input('page',page).input('size',limit)
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
        var sqlString = "SELECT * FROM TourDetails WHERE TourId =@varId";
        return await pool.request()
        .input('varId', sql.NVarChar,id)
        // .input('varname',sql.NVarChar,name)
        .query(sqlString,function(err,data){
            if(data.recordset.length >0){
                result(null,data.recordset[0]);
            }else{
                result(true,null);
            }
        });
    }
    this.create = async function(newData,result){
        var pool = await conn;
        var idc
        var id ='TOURDT_'
        var idtour='TOUR_'
        var sqlString1 = "select max(CAST((substring(Id,8,2)) AS DECIMAL(5,0))) from TourDetails"
        await pool.request().query(sqlString1,function(err,result1){
            if(err) throw err;
                console.log(result1.recordset[0]['']);
                idc = result1.recordset[0][''] +1;
                console.log(idc)
                id+=idc
                idtour+=idc
                console.log(id)
        var sqlString = "INSERT INTO TourDetails (Id,TourId,DepartureDay,AvailableSeat,Price,Discount,CreatedAt) VALUES(@id,@tourid,@departureday,@availableseat,@price,@discount,'2022-01-09T23:49:58')";
        return  pool.request()
        .input('tourid',sql.NVarChar,idtour)
        .input('departureday',sql.Date,newData.DepartureDay)
        .input('availableseat',sql.Int,newData.AvailableSeat)
        .input('price',sql.Float,newData.Price)
        .input('discount',sql.Int,newData.Discount)
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
     this.update = async function(id,newData,result){
        var pool = await conn;
        var sqlString = "UPDATE TourDetails SET TourId = @tourid,DepartureDay = @departureday,AvailableSeat= @availableseat,Price=@price,Discount = @discount WHERE Id= @id";
        return await pool.request()
        .input('tourid',sql.NVarChar,newData.TourId)
        .input('departureday',sql.Date,newData.DepartureDay)
        .input('availableseat',sql.Int,newData.AvailableSeat)
        .input('price',sql.Float,newData.Price)
        .input('discount',sql.Int,newData.Discount)
        .input('id',sql.NVarChar,id)
        .query(sqlString,function(err,data){
            if(err){
                result(true,null);
            }else{
                result(null,newData);
            }
        });
    }
}