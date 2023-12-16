const arr = [0, 1, 34, 33, 45, 5];
const arr1 = new Array(2, 3, 4, 5); //not a dynamic allocation
console.log(arr[3]);

arr.push(5)//insert value at end
console.log(arr);
arr.pop();//remove last value
console.log(arr);

arr.unshift(99)//insert value at start
console.log(arr);
arr.shift();//remove starting value
console.log(arr);

console.log(arr.includes(4))//check wheather 4 present in array or not
console.log(arr.indexOf(33))//index of value 33

const newArr= [0, 1, 34, 33, 45, 5];
const arr2=newArr.join() //it will bind all values and convert into string
console.log(arr2);
console.log(typeof arr2)
console.log(newArr);
console.log(typeof newArr)

//slice (works as shallow copy ) and splice ( works as deep copy)
const arr4= [0, 1, 34, 33, 45,5,8];
const arr5=arr4.slice(2,5)  //subarray [i,j) and this will not affect original array 
console.log(arr5)
console.log(arr4)

const arr6=arr4.splice(2,5) //from i (including) 5 values will be removed from array and 
//it will change the original array
console.log(arr6)
console.log(arr4)


