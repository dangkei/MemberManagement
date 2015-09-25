/**
 * Created by Feng Huang on 28/09/2015.
 */
var filter = require('./filter');


function system(app) {

    app.get('/system/management', function (req, res, next) {
        return res.render("system_management", {title: "系统管理", user: req.session.user});
    });

}
module.exports = system();