/**
 * Created by Feng Huang on 10/10/2015.
 */

function Obj(arg) {
    var a = arg;                    //对象的私有变量   对象和原型都不能访问
    var fn = function () {
    };          //对象的私有函数   对象和原型都不能调用

    this.b = arg;                   //原型的公有变量   原型能访问对象自己不能访问   [这种其实很容易理解出错的. 对象本身竟然不能调用.]
    this.fn1 = function () {
    };        //原型的公有函数   原型能调用对象自己不能访问
}

Obj.c = 1;                          //对象的公有变量   对象能访问原型不能
Obj.fn2 = function () {
};             //对象的公有函数   对象能调用原型不能

Obj.prototype.d = 11;               //原型的属性       对象本身访问不到
Obj.prototype.fn3 = function () {
};   //原型的方法       对象本身访问不到

/*console.log("Obj.a = " + Obj.a);
console.log("Obj.fn = " + Obj.fn);
console.log("Obj.b = " + Obj.b);
console.log("Obj.fn1 = " + Obj.fn1);
console.log("Obj.c = " + Obj.c);
console.log("Obj.fn2 = " + Obj.fn2);
console.log("Obj.d = " + Obj.d);
console.log("Obj.fn3 = " + Obj.fn3);

console.log("--------------------------------------");

var A = new Obj(22);
console.log("A.a = " + A.a);
console.log("A.fn = " + A.fn);
console.log("A.b = " + A.b);
console.log("A.fn1 = " + A.fn1);
console.log("A.c = " + A.c);
console.log("A.fn2 = " + A.fn2);
console.log("A.d = " + A.d);
 console.log("A.fn3 = " + A.fn3);*/
module.exports = Obj;