/**
 * Created by Feng Huang on 21/09/2015.
 */
var mysql = require('mysql'),
    settings = require('../settings');
var connection = mysql.createConnection({
        host: settings.host,
        user: settings.user,
        password: settings.password,
        port: settings.port,
        database: settings.db
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

