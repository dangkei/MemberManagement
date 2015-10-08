/**
 * Created by Feng Huang on 08/10/2015.
 */
var nodemailer = require("nodemailer");
var user = "331006953@qq.com",
    pass = "hf03882527";

var smtpTransport = nodemailer.createTransport("SMTP", {
    service: "163",
    host: 'smtp.163.com',
    secureConnection: true,
    port: 465,
    auth: {
        user: "dangkei",
        pass: "rhkcn1030"
    }
});

/*
 smtpTransport.sendMail({
 from: 'dangkei@163.com',
 to: 'dangkei@gmail.com',
 subject: "Node.js通过SMTP协议从QQ邮箱发送邮件",
 html: "<h1>这是node.js通过QQ发送的一封邮件</h1>"+'<p>hello word!</p>'
 },function(err,res){
 console.log(err,res);
 });
 */

module.exports = smtpTransport;