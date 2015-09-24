/**
 * Created by Feng Huang on 23/09/2015.
 */
var User = require('../models/User');
function filter(req,res,next){
    if(!req.session.user){
        res.render('login',{title: '用户登录'});
    }
    req.flash('user',req.session.user);
    next();
}
module.exports = filter;