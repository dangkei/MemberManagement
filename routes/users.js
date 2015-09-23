var User = require('../models/user');


function users(app){

    app.get('/users/reg', function(req, res, next) {
        res.render('register', { title: '用户注册' });
    });

    app.post('/users/reg',function(req,res,next){

        var newUser = new User();

        console.log("reg get");

        console.log(req.body.username);
        console.log(req.body.inputPassword);
        console.log(req.body.inputRePassword);
        console.log(req.body.inputEMail);
        console.log(req.body.inputPhone);
        console.log(req.body.inputQQ);
        console.log(req.body.inputCompany);

    });

    app.get('/users/login',function(req,res,next){
        res.render("login",{title: "用户登录"});
    });

}

module.exports = users;
