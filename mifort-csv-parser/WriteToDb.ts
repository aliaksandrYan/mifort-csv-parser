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
        for (let i = 0; i < validFields.length; i++) {
            con.query(getSqlInsert(validFields[i]));
        }
    });

}
export function getSqlInsert(validField:any):string{
    let sqlInsert = "INSERT INTO people_6 (";
    let values = "(";
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