"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function writeToDb(validFields, config) {
    var mysql = require('mysql');
    var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "password",
        database: "mydb"
    });
    con.connect(function (err) {
        if (err)
            throw err;
        //   console.log("Connected!");
        /*     let sql = "CREATE TABLE people_6 (id INT AUTO_INCREMENT PRIMARY KEY,";
             for (let i = 0; i < config.length; i++) {
                 if (i != config.length - 1) {
                     sql += config[i].column + " " + config[i].type + ",";//"name VARCHAR(255), address VARCHAR(255))";
                 }
                 else {
                     sql += config[i].column + " " + config[i].type + ")";
                 }
             }
             con.query(sql, function (err, result) {
                 if (err) throw err;
                 console.log("Table created");
             });*/
        for (var i = 0; i < validFields.length; i++) {
            con.query(getSqlInsert(validFields[i]));
        }
    });
}
exports.writeToDb = writeToDb;
function getSqlInsert(validField) {
    var sqlInsert = "INSERT INTO people_6 (";
    var values = "(";
    for (var key in validField) {
        sqlInsert += key.toString() + ",";
        values += "'" + validField[key] + "'" + ",";
    }
    sqlInsert = sqlInsert.replace(/,$/, ')');
    sqlInsert += " VALUES ";
    values = values.replace(/,$/, ')');
    sqlInsert += values;
    return sqlInsert;
}
exports.getSqlInsert = getSqlInsert;
