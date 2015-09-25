/* NodeJS连接MySQL出现Cannot enqueue Handshake after invoking quit.
 2013-01-17      0 个评论       作者：wanmingtom
 原因在于node连接上mysql后如果因网络原因丢失连接或者用户手工关闭连接后，原有的连接挂掉，需要重新连接；如下代码，每次访问结束都关闭，每次开始访问前重连接下，代码中没有监听连接的fatal错误，copy需谨慎
 [javascript]
 */

var mysql = require('mysql');

var connection = mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        password : '123456',
        database : 'test'
    }),
    slice = [].slice;
var commonMethod = function(callback){
    connection = mysql.createConnection(connection.config);
    connection.connect();
    callback.call(connection,callback);
    connection.end();
};

var onerror = function(){
    console.log(err);
};

var query = function(){
    var args = arguments;
    commonMethod(function(){
        this.query.apply(connection,args)
            .on('error',onerror);
    });
};

module.exports = connection;

console.log(connection.config.user);