/**
 * Created by Feng Huang on 29/10/2015.
 */


function MysqlDB() {
    var instance;
    var Connection;
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
                user: this.settings.user,
                password: this.settings.password
            });
        }
        return Connection;
    }();

    MysqlDB.prototype.Query = function (str) {
        if (Connection) {

        }
    }();

    return instance;
}


console.log(MysqlDB().getConnection === (new MysqlDB()).getConnection);
console.log((new MysqlDB()).getConnection);