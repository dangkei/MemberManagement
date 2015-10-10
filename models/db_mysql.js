/**
 * Created by Feng Huang on 21/09/2015.
 */


var mysql = require('mysql');//,
//settings = require('../settings');

function mysqlDB(settings) {
    this.connection = mysql.createConnection(settings);
}

mysqlDB.connection = function (settings) {
    return mysql.createConnection(settings);
};

//slice = [].slice;*/

mysqlDB.testconnect = function (callback) {
    console.log('---------testconnect-----------------');
    commonQuery(function () {
        mysqlDB.testconnect.apply(connection).on('error', onerror);
    });
};

var commonQuery = function(callback){
    connection = mysql.createConnection(mysqlDB.connection.config);
    connection.connect();
    callback.call(connection,callback);
    connection.end();
};

var onerror = function (err) {
    console.log("in: " + err);
};

var query = function () {
    console.log('--------------query------------');
    var args = arguments;
    commonQuery(function () {
        query.apply(connection, args).on('error', onerror);
    });

};


module.exports = mysqlDB;



