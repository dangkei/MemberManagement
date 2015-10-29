/**
 * Created by Feng Huang on 21/09/2015.
 */


var mysql = require('mysql'),
    settings = require('../settings');

function mysqlDB() {
}

//slice = [].slice;*/

var conn = mysql.createConnection(settings);
/*var conn= mysql.createConnection({
 host: 'localhost',
 user: 'nodejs',
 password: 'nodejs'
 });*/


function commanQuery(strQuery, callback) {
    //console.log("commanQuery==>"+strQuery);
    conn.query(strQuery, function (err, res) {
        if (err) {
            callback(err, null);
        }
        callback(null, res);
    });
}


mysqlDB.query = function (strQuery, callback) {
    //console.log(strQuery);
    conn.connect();
    commanQuery(strQuery, function (err, res) {
        var res1 = query.apply(conn, [strQuery]);
        console.log(res1);
    });
    conn.end();
    conn.destroy();

};


var onerror = function (err) {
    console.log("in onerror : " + err);
};


module.exports = mysqlDB;

/*

 var CommQuery = function(conn, arg, callback){
 conn.query(arg,function(err,res){
 if(err){
 console.log(err);
 callback(err);
 }
 callback(res);
 });
 }
 */




/*function commQuery(){
 conn.connect();
 mysqlDB.query.call(conn).on('error',onerror);
 conn.end();
 }*/

/*

 mysqlDB.testconnect = function (callback) {
 console.log('---------testconnect-----------------');
 console.log(settings);
 conn.connect(function (err) {
 if(err){
 //console.log(err);
 conn.destroy();
 callback(err,null);
 }
 callback(null,null);
 });
 };
 /!*var query = function () {
    console.log('--------------query------------');
    var args = arguments;
    commonQuery(function () {
        query.apply(connection, args).on('error', onerror);
    });

 };*!/
 */





