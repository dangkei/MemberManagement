/**
 * Created by Feng Huang on 30/09/2015.
 */
/**
 * Created by Feng Huang on 29/09/2015.
 */
function solution(A) {
    // write your code in JavaScript (Node.js 4.0.0)
    var length = A.length;
    var result = new Array([]);
    var total = 0;
    var ls = 0;
    for (var i = 0; i < length; i++) {
        total += A[i];
    }

    for (var P = 0; P < length; P++) {
        ls += A[P];
        if (ls === total - ls - A[P + 1] || ls + A[P] === 0) {
            result.push(P + 1);
        }
    }

    return result.length - 1;
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
console.log(result);