/**
 * Created by Feng Huang on 23/09/2015.
 */

function filter(req,res,next){
    console.log("Checklogin ");
    if(!req.session.username){
        res.redirect('/users/login');
    }
    next();
}

module.exports = filter;