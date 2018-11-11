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
        console.log("Connected!");
        var sql = "CREATE TABLE people_4 (id INT AUTO_INCREMENT PRIMARY KEY,";
        for (var i = 0; i < config.length; i++) {
            if (i != config.length - 1) {
                sql += config[i].column + " " + config[i].type + ","; //"name VARCHAR(255), address VARCHAR(255))";
            }
            else {
                sql += config[i].column + " " + config[i].type + ")";
            }
        }
        con.query(sql, function (err, result) {
            if (err)
                throw err;
            console.log("Table created");
        });
        for (var i = 0; i < validFields.length; i++) {
            var sqlInsert = "INSERT INTO people_4 (";
            var values = "(";
            for (var key in validFields[i]) {
                sqlInsert += key.toString() + ",";
                values += "'" + validFields[i][key] + "'" + ",";
            }
            sqlInsert = sqlInsert.replace(/,$/, ')');
            sqlInsert += " VALUES ";
            values = values.replace(/,$/, ')');
            sqlInsert += values;
            con.query(sqlInsert);
        }
    });
}
exports.writeToDb = writeToDb;
