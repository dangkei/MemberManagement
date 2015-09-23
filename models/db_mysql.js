/**
 * Created by Feng Huang on 21/09/2015.
 */
var mysql = require('mysql');
var connection = mysql.createConnection({
    host: "localhost",
    user: "nodejs",
    password: "nodejs",
    port: 3306,
    database: "nodejs"
});

module.exports = connection;