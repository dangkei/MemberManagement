/**
 * Created by Feng Huang on 23/09/2015.
 */
var filter = require('./filter');
var User = require('../models/User');

module.exports = function (app){

  /* GET home page. */
    app.get('/', function (req, res, next) {
        res.render('index', {title: '用户信息管理', user: req.session.user});
  });
};


