const {response} = require('express');
const {conn,sql}  =require('../../connect');
const { lowerCase, localeLowerCase } = require('lower-case');
var moment = require('moment-timezone');
module.exports = function(){
    this.getAll = async function(page,limit,search,orderby,orderdir,unitprice,unitprice1,totalprice,totalprice1,departureat,status,result){
        var pool = await conn;
        var checknull;
        var sqlString="FilterOrder"
        if(search != undefined){
            search = lowerCase(search)
        }
        if(limit == undefined || limit == null || limit =='' || !parseInt(limit)){
            limit =10;
        }
        if(page == undefined || page == null || page =='' || !parseInt(page) ){
            page =1;
        }
        if(unitprice == undefined || unitprice == null || unitprice == '' || !parseFloat(unitprice)){
            unitprice =0;
        }
        if(unitprice1 == undefined || unitprice1 == null || unitprice1 =='' || !parseFloat(unitprice1)){
            unitprice1 =5000;
        }
        if(totalprice == undefined || totalprice == null || totalprice == '' || !parseFloat(totalprice)){
            totalprice =0;
        }
        if(totalprice1 == undefined || totalprice1 == null || totalprice1 =='' || !parseFloat(totalprice1)){
            totalprice1 =100000;
        }
        if(departureat== undefined || departureat == null || departureat==''){
            departureat ='2000-02-02';
        }
        if(orderby == undefined || orderby == null){
            orderby ='orderid';
        }
        if(status == undefined || status == null || status ==''){
            status ='';
        }

        return await pool.request()
        .input('page',page)
        .input('size',limit)
        .input('search',search)
        .input('orderBy',orderby)
        .input('orderDir',orderdir)
        .input('unitprice',unitprice)
        .input('unitprice1',unitprice1)
        .input('totalprice',totalprice)
        .input('totalprice1',totalprice1)
        .input('departureat',departureat)
        .input('status',status)
        .execute(sqlString,function(err,data){
            if(data.recordset.length >0){
                result(null,data);
            }else{
                result(true,null);
            }
        });   
    }
    // // select * from order by id
    // this.getById = async function(id,result){
    //     console.log(id);
    //     var pool = await conn;
    //     var sqlString = "SELECT * FROM Orders WHERE Id = @varId";
    //     return await pool.request()
    //     .input('varId', sql.NVarChar,id)
    //     // .input('varname',sql.NVarChar,name)
    //     .query(sqlString,function(err,data){
    //         if(data.recordset.length >0){
    //             result(null,data.recordset[0]);
    //         }else{
    //             result(true,null);
    //         }
    //     });
    // }
    this.getById = async function(id,result){
        console.log(id);
        var pool = await conn;
        var sqlString = "SELECT * FROM Orders WHERE Id =@varId";
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
        var sqlString = "UPDATE Orders SET Type = @type,TotalPrice = @totalPrice,Status = @status, DepartureAt = @departureAt  WHERE Id = @id AND UserId = @userId";
        console.log(departureAt)   
        return await pool.request()
        .input('type',sql.Int,newData.Type)
        .input('totalPrice',sql.Float,newData.TotalPrice)
        .input('status',sql.VarChar,newData.Status)
        .input('departureAt',sql.DateTime,moment.utc(newData.DepartureAt).tz("Asia/Ho_Chi_Minh").format('YYYY-MM-DD HH:mm:ss'))
        .input('id',sql.NVarChar,id)
        .input('userId',sql.NVarChar,newData.UserId)
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
        var id ='ORD_'
        var sqlString1 = "select max(CAST((substring(Id,5,2)) AS DECIMAL(5,0))) from Orders"
        await pool.request().query(sqlString1,function(err,result1){
            if(err) throw err;
                console.log(result1.recordset[0]['']);
                idc = result1.recordset[0][''] +1;
                console.log(idc)
                id+=idc
                console.log(id)
        
        var sqlString = "INSERT INTO Orders (Id,UserId,Type,TotalPrice,Status,DepartureAt,CreatedAt) VALUES(@id,@userId, @type, @totalPrice, @status, @departureAt,'2022-01-09T23:49:58')";
        return  pool.request()
        .input('type',sql.Int,newData.Type)
        .input('totalPrice',sql.Float,newData.TotalPrice)
        .input('status',sql.VarChar,newData.Status)
        .input('departureAt',sql.DateTime,moment.utc(newData.DepartureAt).tz("Asia/Ho_Chi_Minh").format('YYYY-MM-DD HH:mm:ss'))
        .input('id',sql.NVarChar,id)
        .input('userId',sql.NVarChar,newData.UserId)
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
        var sqlString = "UPDATE Orders SET Status = @status WHERE Id= @id";
        return await pool.request()
        .input('status',sql.VarChar,status)
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