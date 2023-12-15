const { response } = require('express');
const {conn,sql} = require('../../connect');
module.exports = function(){
    this.getAll = async function(page,limit,result){
        //Select * from student
        var pool = await conn;
        var sqlString = "FilterAccount";
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
    this.create = async function(newData,result){
        var pool = await conn;
        var idc
        var id ='USER_'
        var sqlString1 = "select max(CAST((substring(Id,6,2)) AS DECIMAL(5,0))) from Users"
        await pool.request().query(sqlString1,function(err,result1){
            if(err) throw err;
                console.log(result1.recordset[0]['']);
                idc = result1.recordset[0][''] +1;
                console.log(idc)
                id+=idc
                console.log(id)
        
        var sqlString = "INSERT INTO Users (Id,Username,Firstname,Lastname,Email,Address,Thumbnail,Description,Password,PhoneNumber,Status,CreatedAt) VALUES(@id,@username,@firstname,@lastname,@email,@address,@thumbnail,@description,@password,@phonenumber,1,'2022-01-09T23:49:58')";
        return  pool.request()
        .input('username',sql.NVarChar,newData.Username)
        .input('firstname',sql.NVarChar,newData.Firstname)
        .input('lastname',sql.NVarChar,newData.Lastname)
        .input('email',sql.NVarChar,newData.Email)
        .input('address',sql.NVarChar,newData.Address)
        .input('thumbnail',sql.NVarChar,newData.Thumbnail)
        .input('description',sql.NVarChar,newData.Description)
        .input('password',sql.NVarChar,newData.Password)
        .input('phonenumber',sql.NVarChar,newData.PhoneNumber)
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
    this.createrole = async function(newData,result){
        var pool = await conn;
        var idc
        var id ='USER_'
        var sqlString1 = "select max(CAST((substring(Id,6,2)) AS DECIMAL(5,0))) from Users"
        await pool.request().query(sqlString1,function(err,result1){
            if(err) throw err;
                console.log(result1.recordset[0]['']);
                idc = result1.recordset[0][''];
                console.log(idc)
                id+=idc
                console.log(id)
        
        var sqlString = "INSERT INTO UserRole (UserId,RoleId) VALUES(@id,'ROLE_2')";
        return  pool.request()
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
    this.update = async function(id,roleid,result){
        var pool = await conn;
        var sqlString = "UPDATE UserRole SET RoleId = @roleid WHERE UserId= @id";
        return await pool.request()
        .input('status',sql.NVarChar,roleid)
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
