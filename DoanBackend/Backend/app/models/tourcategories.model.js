const { response } = require('express');
const {conn,sql} = require('../../connect');
module.exports = function(){
    this.getAll = async function(result){
        //Select * from student
        var pool = await conn;
        var sqlString = "SELECT * FROM TourCategories";
        return await pool.request().query(sqlString,function(err,data){
            if(data.recordset.length >0){
                result(null,data.recordset);
            }else{
                result(true,null);
            }
        });    
    }
    this.getById = async function(id,result){
        console.log(id);
        var pool = await conn;
        var sqlString = "SELECT * FROM TourCategories WHERE Id =@varId";
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
}