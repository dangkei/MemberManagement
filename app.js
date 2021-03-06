/*var mysql = require('mysql');
 var setting = require('./settings');
 var conn = require('./models/db_mysql');

 conn.connect(function(err){
 if(err){
 console.log('[query] - : ' + err);
 return;
 }
 console.log("[connection connect] successful!!");
 });
 */
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');
var system = require('./routes/system');

var settings = require('./settings');
var session = require('express-session');
var flash = require('connect-flash');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(require('less-middleware')(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));

//store session database
app.use(session({
    secret: "cookieSecret", //settings.cookieSecret,
  name: "userManager",
  key: settings.db, //cookie name
  cookie: {maxAge: 1000 * 60 * 60 * 24 * 30},//30 days
  resave: false,
  saveUninitialized: true
}));

app.use(flash());

//route start
index(app);
users(app);
system(app);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    //console.log(req);
    //console.log(res);
    console.log(err);
    /*  res.status(err.status || 500);
     res.render('error', {
    message: err.message,
    error: {}
     });*/
});


module.exports = app;
