
module.exports = function (app){

  /* GET home page. */
  app.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
  });

  app.get('/reg', function(req, res, next) {
    console.log("reg start");
    res.render('Reg', { title: '�û�ע��' });
  });

  app.post('/reg',function(req,res,next){

  });

}



