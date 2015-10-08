var User = require('../models/user'),
    filter = require('./filter'),
    crypto = require('crypto');

function users(app){

    app.get('/users/reg', function(req, res, next) {
        res.render('users_register', {title: '用户注册'});
    });

    app.post('/users/reg',function(req,res,next){

        var newUser,oldUser;

        oldUser = User.get(req.body.username, function (err, user) {
            if (err) {
                return res.render('users_register', {title: "用户注册", errormsg: err.message});
            }

            if (!user) {
                newUser = new User({
                    username: req.body.username,
                    password: crypto.createHash('md5').update(req.body.inputPassword).digest('hex'),
                    Email: req.body.inputEMail,
                    phone: req.body.inputPhone,
                    QQ: req.body.inputQQ,
                    Company: req.body.inputCompany
                });

                newUser.save(err, function () {
                    res.redirect('/');
                });
            } else {
                return res.render('users_register', {title: "用户注册", errormsg: '错误,用户已经存在.请重新填写一个用户名.'});
            }
        });
    });


    //user login action
    app.get('/users/login', filter, function (req, res, next) {
        return res.render("login", {title: "用户登录"});
    });

    app.post('/users/login',function(req,res,next){
        var password = crypto.createHash('md5').update(req.body.password).digest('hex');
        User.get(req.body.username,function(err, user){
            if(!user){
                req.flash('msg',"用户不存在!");
                return res.redirect("/users/login")
            }

            if(user.password != password){
                req.flash('msg',"密码错误!");
                return res.redirect('/users/login');
            }

            req.session.user = user;
            req.flash('msg',"登录成功!");
            req.flash('user',user);
            return res.redirect('/');

        });
    });

    //user logout action
    app.get('/users/logout', function (req, res, next) {
        req.session.user = null;
        return res.render('index', {title: '首页'});
    });

    //user personal action
    app.get('/users/personal', filter, function (req, res, next) {

        return res.render('personal', {title: "个人信息", user: req.session.user});
    });
}

module.exports = users;
