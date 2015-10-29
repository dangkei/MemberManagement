/**
 * Created by Feng Huang on 29/09/2015.
 */
function solution(A) {
    // write your code in JavaScript (Node.js 4.0.0)
    var length = A.length;
    var result = [];

    for (var P = 0; P < length; P++) {
        var ls = 0;
        for (var i = 0; i < P + 1; i++) {
            ls += A[i];
        }
        var rs = 0;
        for (var j = P + 2; j < length; j++) {
            rs += A[j];
        }
        if (ls === rs) {
            result.push(P + 1);
        }
    }
    return result;
}
var A = new Array(8);
A[0] = -1;
A[1] = 3;
A[2] = -4;
A[3] = 5;
A[4] = 1;
A[5] = -6;
A[6] = 2;
A[7] = 1;
var result = solution(A);
//console.log(result);

var Obj = require('./test2');
console.log("Obj.a = " + Obj.a);
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
console.log("A.fn3 = " + A.fn3);

