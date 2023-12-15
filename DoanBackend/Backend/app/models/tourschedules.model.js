const { response } = require('express');
const {conn,sql} = require('../../connect');
module.exports = function(){
    this.getAll = async function(page,limit,result){
        //Select * from student
        var pool = await conn;
        var sqlString = "FilterTourSchedule";
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
        var sqlString = "SELECT * FROM TourSchedules WHERE TourId =@varId";
        return await pool.request()
        .input('varId', sql.NVarChar,id)
        // .input('varname',sql.NVarChar,name)
        .query(sqlString,function(err,data){
            if(data.recordset.length >0){
                result(null,data.recordset);
                console.log(data.recordset);
            }else{
                result(true,null);
            }
        });
    }
    this.create = async function(newData,result){
        var pool = await conn;
        var idc
        var id ='TOURSD_'
        var sqlString1 = "select max(CAST((substring(Id,8,2)) AS DECIMAL(5,0))) from TourSchedules"
        await pool.request().query(sqlString1,function(err,result1){
            if(err) throw err;
                console.log(result1.recordset[0]['']);
                idc = result1.recordset[0][''] +1;
                console.log(idc)
                id+=idc
                console.log(id)
        
        var sqlString = "INSERT INTO TourSchedules (Id,TourId,Name,Detail,ScheduleOrder) VALUES(@id,@tourid,@name,@detail,@scheduleorder)";
        return  pool.request()
        .input('tourid',sql.NVarChar,newData.TourId)
        .input('name',sql.NVarChar,newData.Name)
        .input('detail',sql.NVarChar,newData.Detail)
        .input('scheduleorder',sql.Int,newData.ScheduleOrder)
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
        var sqlString = "UPDATE TourSchedules SET TourId = @tourid,Name=@name,Detail=@detail,ScheduleOrder=@scheduleorder WHERE Id= @id";
        return await pool.request()
        .input('tourid',sql.NVarChar,newData.TourId)
        .input('name',sql.NVarChar,newData.Name)
        .input('detail',sql.NVarChar,newData.Detail)
        .input('scheduleorder',sql.Int,newData.ScheduleOrder)
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