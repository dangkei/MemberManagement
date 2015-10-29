/**
 * Created by Feng Huang on 14/10/2015.
 */

function Person() {

}

var say = function (word) {
    console.log(word);
};


//Person.say("hello");

var commomfun = function () {
    var person = arguments[0];
    var word = arguments[1];

    console.log(arguments);
    console.log(word);
    //person.say(word);
};

var hello = "hello";
//commomfun.call(Person,Person,hello);
//say.apply(this, [Person, hello]);

function Man() {

}

Man.run = function () {
    console.log("Run! Run! Run!");
};

Person.sayHello = function (callback) {
    var person = arguments[0];
    var word = arguments[1];
    say.apply(Man, [word]);
    callback(null, word + " javascript");
};

var res = Person.sayHello(Man, hello);

console.log(res);

