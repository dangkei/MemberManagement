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
    }),
    slice = [].slice;

var commonQuery = function(callback){
    connection = mysql.createConnection(connection.cofig);
    connection.connect();
    callback.call(connection,callback);
    connection.end();
};

var onerror = function (err) {
    console.log("in: " + err);
};

var query = function () {
    var args = arguments;

    commonQuery(function () {
        query.apply(connection, args).on('error', onerror);
    });

};

module.exports = connection;

