const e = require('express');
const {response, request} = require('express');
const {Request} = require('mssql');
const {conn, sql} = require('../../connect');
const debug = console.log.bind(console);
module.exports = function () {
    this.getdata = async function (newData) {
        var sqlString = `Select roleid,
                                role,
                                userid,
                                Username,
                                Description,
                                Firstname,
                                Lastname,
                                Address,
                                Email,
                                Thumbnail,
                                PhoneNumber,
                                Status
                         from account
                         where Username = '${newData.Username}'
                           and Password = '${newData.Password}'`;
        console.log(sqlString)
        var pool = await conn;//colect db
        const result = (await pool.request().query(sqlString)).recordset[0] //thực thi truy vấn sql
        console.log(result)
        return result;
    };
    ;
};
  
