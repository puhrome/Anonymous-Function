/**
 * Anonymous Function Created by puhrome on 5/29/14.
 */
//Also called closures
//anonymous functions is used for code brevity

function functionName();


var functionName = function(){
    //code to run
}

function calcArea(width, height){
    var area = width * height;
    return area;
}

var calcArea = function(width, height){
    var area = width * height;
    return area;
}
var a = calcArea(20, 30);
console.log(a);