// Callback hell, also known as "pyramid of doom," is a term used in the context of asynchronous programming 
// to describe a situation where multiple nested callbacks make the code difficult to read and maintain.

const cart=["shoe","pant","shirt"]

api.createOrder(cart,function(){//first createOrder is executed through api then callback function will executed

    api.proceedToPayment(function(){//here proceedToPayment -> callback function 

        api.showDetails(function(){

            api.updateWallet();

        })
    })
}) 

/*
Two issues while using callbacks

1 - Callback hell
When a function is passed as an argument to another function, it becomes a callback function. This process continues and 
there are many callbacks inside another's Callback function.
This grows the code horizontally instead of vertically. That mechanism is known as callback hell. 
2 - Inversion of control
The callback function is passed to another callback, this way we lose the control of our code. 
We don't know what is happening behind the scene and the program becomes very difficult to maintain. 
That process is called inversion of control. 

*/

/* another example of callback hell
function first(a,callback){
  setTimeout(function() {
    console.log(a,"first");
    callback();
  }, 1000);
}
function second(b,callback){
  setTimeout(function(){
    console.log(b,"second")
    callback()
  },1000);
}
function third(c,callback){
  setTimeout(function(){
    console.log(c,"third")
    callback()
  },1000);

}
var a=10,b=30,c=50;
first(a,function (){
  second(b,function(){
    third(c,function(){
      console.log("anonymous");
    })
  })
});
*/