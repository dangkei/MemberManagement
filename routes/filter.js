/**
 * Created by Feng Huang on 23/09/2015.
 */

function filter(req,res,next){
    console.log("Checklogin ");
    if(!req.session.username){
        res.redirect('/users/login',{title:'用户登录'});
    }
    next();
}

module.exports = filter;