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

var commonQuery = function(callback){
    connection = mysql.createConnection(connection.cofig);
    connection.connect();
    callback.call(connection,callback);
    connection.end();
}

module.exports = connection;

