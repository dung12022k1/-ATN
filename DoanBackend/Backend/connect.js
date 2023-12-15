var sql = require('mssql/msnodesqlv8');
//các thông tin kết nối csdl
var config={
    user:"sa",
    password:"123",
    server:"DESKTOP-M48758V",
    database:"TourManager",
    options: {
        trustedConnection: true,
       // instanceName: "SQLEXPRESS"
      },
    driver: "msnodesqlv8",
};
const conn = new sql.ConnectionPool(config).connect().then(pool=>{
    console.log("connect successful")
    return pool});
//xuất ra dưới dạng module gồm 2 thuộc tính là conn và sql
module.exports ={
    conn: conn,
    sql: sql
}