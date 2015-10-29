/**
 * Created by Feng Huang on 16/10/2015.
 */

(function () {
    "use strict";
    var person = {};
    Object.defineProperty(person, "name", {
        writable: false,
        value: "Nicholas"
    });

    //person.name = "John";


    var i = function () {
        return 20;
    }();


    console.log(i);

})();


