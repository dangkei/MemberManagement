/**
 * Created by Feng Huang on 25/09/2015.
 */

var sym =[['{','['],['}',']']];

var checkSyntax = function (){
    var arrcode = arguments["0"].toString().split("");
    console.log(arrcode);
    for(var i =0; i<arrcode.length;i++){
        var ind = sym[0].indexOf(arrcode[i]);
        if(ind>-1){ //如果知道一个开始符号
            //var sym1 = sym.slice(); //复制
            //sym1= sym1[0].join(sym[1]);
            var len = arrcode.length;
            for(var j=0; j<len; j++){

                if(arrcode[arrcode.length-j] == sym[1][ind]){
                    console.log((len)+" ==>" + arrcode[arrcode.length-j] +" === " +sym[1][ind]);
                    return true;
                }else{
                    if(sym.indexOf(arrcode[j-1])>-1){
                        return false;
                    }
                }
            }
        }else{
            var ind1 = sym[1].indexOf(arrcode[i]);
            if(ind1>-1){  //如果先找到的是个闭合符号直接pass
                return false;
            }
        }//下一个符号判断.
    }
};


var result = checkSyntax('{[1{111[111211111111111111]21111111}]12121212121212',sym);
console.log(result);