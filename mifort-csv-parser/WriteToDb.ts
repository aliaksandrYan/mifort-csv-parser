export function writeToDb(validFields: any[], config: any[]): void {
    var mysql = require('mysql');
    var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "password",
        database: "mydb"
    });
    con.connect(function (err) {
        if (err) throw err;
        console.log("Connected!");
        let sql = "CREATE TABLE people_4 (id INT AUTO_INCREMENT PRIMARY KEY,";
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
        });
        for (let i = 0; i < validFields.length; i++) {
            let sqlInsert = "INSERT INTO people_4 (";
            let values = "(";
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