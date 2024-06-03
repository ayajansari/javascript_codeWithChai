//function_scoped
//variables declared with the var keyword are function-scoped. This means that the variable's scope
//is limited to the function in which it is declared. Variables declared with var are not block-scoped;
//they are accessible throughout the entire function, regardless of where they are declared within the function.

function exampleFunction() {
    if (true) {
        var functionScoped = "I'm function-scoped";
    }
    console.log(functionScoped); // Accessible here
}

exampleFunction(); // Output: I'm function-scoped
console.log(functionScoped); // ReferenceError: functionScoped is not defined




//block scoped
//variables declared with let and const keywords are block-scoped. This means that the variable's scope is limited
// to the block (enclosed by {}) in which it is declared. Block-scoped variables are only accessible within the block
// they are declared in, including any nested blocks.

function exampleFunction() {
    if (true) {
        let blockScoped = "I'm block-scoped";
        console.log(blockScoped); // Accessible here
    }
    // console.log(blockScoped); // ReferenceError: blockScoped is not defined
}
exampleFunction(); // Output: I'm block-scoped
// console.log(blockScoped); // ReferenceError: blockScoped is not defined