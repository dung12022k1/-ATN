const { response } = require('express');
const {conn,sql} = require('../../connect');
module.exports = function(){
    this.create = async function(tourdetailid,newData,result){
        var pool = await conn;
        var idc
        var id ='ORD_'
        var sqlString1 = "select max(CAST((substring(Id,5,2)) AS DECIMAL(5,0))) from Orders"
        await pool.request().query(sqlString1,function(err,result1){
            if(err) throw err;
                console.log(result1.recordset[0]['']);
                idc = result1.recordset[0][''];
                console.log(idc)
                id+=idc
                console.log(id)
        var sqlString = "INSERT INTO OrderDetails (OrderId,TourDetailId,UnitPrice,Quantity) VALUES(@orderid,@tourdetailid,@unitprice,@quantity)";
        return  pool.request()
        .input('orderid',sql.NVarChar,id)
        .input('tourdetailid',sql.NVarChar,tourdetailid)
        .input('unitprice',sql.Float,newData.UnitPrice)
        .input('quantity',sql.Int,newData.Quantity)
        .query(sqlString,function(err,data){
            if(err){
                result(true,null);
            }else{
                result(null,newData);
            }
        });
     })
    };
     this.update = async function(orderid,tourdetailid,newData,result){
        var pool = await conn;
        var sqlString = "UPDATE OrderDetails SET UnitPrice = @unitprice,Quantity = @quantity WHERE OrderId= @orderid and TourDetailId=@tourdetailid";
        return await pool.request()
        .input('orderid',sql.NVarChar,orderid)
        .input('tourdetailid',sql.NVarChar,tourdetailid)
        .input('unitprice',sql.Float,newData.UnitPrice)
        .input('quantity',sql.Int,newData.Quantity)
        .query(sqlString,function(err,data){
            if(err){
                result(true,null);
            }else{
                result(null,newData);
            }
        });
    }
}