//function statement  function declaration
function a(){
      console.log("a is called");
}

//function expression
var c = function (){
      console.log("c is called");
}
a();
c();


//the difference between above two is hoisting 
//we can access a() before its declaration but can't acces b()

//named function expression
var d = function func_d(){
      console.log("d is called");
}
d();

//anonimous function -> function having no name
// function (){

// }

//difference between parameters and arguments
function first(param1,param2){
      //
}
first(1,2);//1,2 are arguments and param1,param2 are parameters

//first class functions/first class citizens 
//the ability of functions which can be used as values and can be passed as arguments
// to function and can be returned from  functions is called first class functions
var d1 = function func_d1(){
      return function xyz(){

      }
}
console.log(d1());

//higher order function 
//a function which takes another function as an argument or
// returns a function from it. the function which is passed as argument 
//is known as callback function

function a(y){
      console.log("a is called");
      y();
}
a(function y(){
      console.log("y is called");
});
//a is higher order function and  y is callback function

