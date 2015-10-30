/**
 * Created by Feng Huang on 29/10/2015.
 */


function MysqlDB() {
    var instance;
    var Connection;
    var pool;

    MysqlDB = function MysqlDB() {
        return instance;
    };

    MysqlDB.prototype = this;
    instance = new MysqlDB();
    instance.constructor = MysqlDB;

    this.mysql = require('mysql');
    this.settings = require('../settings');

    MysqlDB.prototype.getConnection = function () {
        if (!Connection) {
            Connection = mysql.createConnection({
                host: this.settings.host,
                port: this.settings.port,
                user: this.settings.user,
                password: this.settings.password
            });
        }

        Connection.connect(function (err) {
            if (err) {
                console.error('error connecting: ' + err.stack);
                return;
            }
            console.log('connected to ' + this.settings.host +
                ' : ' + this.settings.port +
                ' third id:' + Connection.threadId);
        });


        return Connection;
    }();

    MysqlDB.prototype.Query = function (str) {
        if (Connection) {

        }
    }();

    MysqlDB.prototype.createPool = function () {
        if (!pool) {
            pool = mysql.createPool({
                host: this.settings.host,
                port: this.settings.port,
                user: this.settings.user,
                password: this.settings.password
            });
        }
    }();


    return instance;
}


console.log(MysqlDB().getConnection === (new MysqlDB()).getConnection);
console.log((new MysqlDB()).getConnection);