var User = require('../models/user'),
    crypto = require('crypto');

function users(app){

    app.get('/users/reg', function(req, res, next) {
        res.render('register', { title: '用户注册' , pwderr: null});
    });

    app.post('/users/reg',function(req,res,next){
        console.log(req.body.username);
        if(req.body.inputPassword != req.body.inputRePassword){
            req.flash('pwderr',"两次密码输入不一样.");
            return res.redirect('/users/reg');
        }

        var newUser,oldUser;

        oldUser = User.get(req.body.username);

        newUser = new User({
            username: req.body.username,
            password: crypto.createHash('md5').update(req.body.inputPassword).digest('hex'),
            Email: req.body.inputEMail,
            phone: req.body.inputPhone,
            QQ: req.body.inputQQ,
            Company: req.body.inputCompany
        });

        newUser.save();

        console.log("reg post");

        res.redirect('/');
    });

    app.get('/users/login',function(req,res,next){
        res.render("login",{title: "用户登录"});
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

}

module.exports = users;
