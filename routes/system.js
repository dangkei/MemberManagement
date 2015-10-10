/**
 * Created by Feng Huang on 28/09/2015.
 */
var filter = require('./filter'),
    fs = require('fs'),
    path = require('path'),
    settingspath = path.join(path.resolve(__dirname, '..'), '\\settings.js'),
    templatepath = path.join(path.resolve(__dirname, '..', 'template'), '\settings.js'),
    settings;

function system(app) {

    app.get('/system/management', function (req, res, next) {
        fs.exists(settingspath, function (exists) {
            if (exists) {
                settings = require(settingspath);
                console.log("user: ==> " + req.session.user);
                return res.render('system_hostconfig', {
                    settings: settings,
                    title: '修改系统配置',
                    error: null,
                    user: req.session.user
                });
            } else {
                fs.exists(templatepath, function (exists) {
                    if (exists) {
                        settings = require(templatepath);
                        return res.render('system_hostconfig', {
                            settings: settings,
                            title: '系统配置向导',
                            error: null,
                            user: req.session.user
                        });
                    } else {
                        res.render('error', {error: {}, message: "找不到模版文件,请联系系统管理员."});
                    }
                });
            }
        });


        //return res.render("system_management", {title: "系统管理", user: req.session.user});
    });

    app.post('/system/initdatabase', function (req, res, next) {
        var data = '{' +
            '"cookieSecret":"' + req.body.cookieSecret + '",' +
            '"host": "' + req.body.host + '",' +
            '"database": "' + req.body.database + '",' +
            '"port": "' + req.body.port + '",' +
            '"user": "' + req.body.user + '",' +
            '"password": "' + req.body.password + '"' +
            '}';

        fs.exists(settingspath, function (exists) {
            if (exists) {
                settings = require(settingspath);
                //console.log(settings);
                fs.writeFile(settingspath, 'module.exports = ' + data, 'ascii', function (err) {
                    if (err) {
                        console.log('写人文件失败');
                    } else {
                        //console.log('保存成功,赶紧去看乱码吧!');
                        var mysql = require("../models/db_mysql");
                        //var conn = new mysql();
                        mysql.testconnect(function (err) {
                            if (err) {
                                console.log(err);
                                switch (err.errno) {
                                    case 1044:
                                        console.log("数据库不存在或数据库名称错误.");
                                        return res.render("system_hostconfig", {
                                            settings: settings,
                                            title: "错误",
                                            error: "数据库不存在或数据库名称错误."
                                        });
                                        mysql.release();
                                        break;
                                    case 1045:
                                        console.log("用户名或者密码错误.");
                                        return res.render("system_hostconfig", {
                                            settings: settings,
                                            title: "错误",
                                            error: "用户名或者密码错误."
                                        });
                                        mysql.release();
                                        break;
                                    case 'ENOTFOUND':
                                        console.log("服务器地址错误.");
                                        return res.render("system_hostconfig", {
                                            settings: settings,
                                            title: "错误",
                                            error: "服务器地址错误."
                                        });
                                        mysql.release();
                                        break;
                                    case 'ECONNREFUSED':
                                        console.log("端口错误连接被拒绝.");
                                        return res.render("system_hostconfig", {
                                            settings: settings,
                                            title: "错误",
                                            error: "端口错误连接被拒绝."
                                        });
                                        mysql.release();
                                        break;
                                }
                            } else {
                                return res.render('successful', {title: "系统配置", message: "保存成功,点确定返回页面."});
                            }
                        });

                    }
                });
            } else {
                fs.exists(templatepath, function (exists) {
                    if (exists) {
                        settings = require(templatepath);
                        return res.render('system_hostconfig', {settings: settings, title: '系统配置向导'});
                    } else {
                        return res.render('error', {error: {}, message: "找不到模版文件,请联系系统管理员."});
                    }
                });
            }
        });
    });

    //app.get('/system/successful',function(req,res,next){
    //    res.render('successful',{title:保存成功});
    //});

}


function checkEnviron() {
    fs.exists('../settings.js', function (exists) {
        if (exists) {
            settings = require('../settings.js')
        } else {
            console.log("文件不存在");
        }
    });


    fs.readFile('../settings1.js', 'utf-8', function (err, data) {
        if (err) {
            console.log(err);
        } else {
            console.log("读取成功");
        }
    });

}


module.exports = system;