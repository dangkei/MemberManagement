/**
 * Created by Feng Huang on 23/09/2015.
 */
var filter = require('./filter');

module.exports = function (app){

  /* GET home page. */
  app.get('/', filter, function(req, res, next) {
    res.render('index', { title: 'Home' });
  });

}



