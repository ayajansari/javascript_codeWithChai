//A closure is the combination of a function bundled together (enclosed) with references to 
//its surrounding state (the lexical environment). In other words, a closure gives you access
//to an outer function's scope from an inner function. In JavaScript, closures are created 
//every time a function is created, at function creation time.


//uncomment name field one by one
// const name="ayaj1"
function n(){
  // const name="ayaj2";
  function makeFunc() {
    // const name = "ayaj3";
    function displayName() {
      console.log(name);
    }
    return displayName;
  }
  return makeFunc();
}


const myFunc = n();
myFunc()
