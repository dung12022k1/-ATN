const { response } = require('express');
const {conn,sql} = require('../../connect');
module.exports = function(){
    this.getAll = async function(page,result){
        //Select * from student
        var pool = await conn;
        var sqlString = "FilterLocation";
        return await pool.request()
        .input('page',page).input('size',20)
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
        var sqlString = "SELECT * FROM Locations WHERE Id =@varId";
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
}