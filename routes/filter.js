/**
 * Created by Feng Huang on 23/09/2015.
 */
var User = require('../models/User');
function filter(req,res,next){
    //console.log(req.session.user);
    if(!req.session.user){
        res.render('login',{title: '用户登录'});
    }
    next();
}
module.exports = filter;