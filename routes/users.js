var User = require('../models/user');


function users(app){

    app.get('/users/reg', function(req, res, next) {
        res.render('register', { title: '用户注册' });
    });

    app.post('/users/reg',function(req,res,next){

        var newUser;
        newUser = new User({
            username: req.body.username,
            inputPassword: req.body.inputPassword,
            inputRePassword: req.body.inputRePassword,
            inputEMail: req.body.inputEMail,
            inputPhone: req.body.inputPhone,
            inputQQ: req.body.inputQQ,
            inputCompany: req.body.inputCompany
        });

        console.log("reg post");

        res.redirect('/');
    });

    app.get('/users/login',function(req,res,next){
        res.render("login",{title: "用户登录"});
    });

}

module.exports = users;
