//spread operator
const arr1=[1,2,3,3],arr2=[4,4,5,2]
const arr5=[...arr1,...arr2]   // ... will spread all value of arr1 and arr2 and make array of all values
console.log(arr5)   
console.log(arr1)

//rest operator ->allows you to represent an indefinite number of arguments as an array.
// It is used in function parameter lists to collect all the remaining arguments into a single array variable.
function sum(...numbers) {
    const fin=numbers.reduce(function(total, num){
        return total= total + num;
    } , 0);
    return fin;
}
  
console.log(sum(1, 2, 3, 4, 5)); // Output: 15
  