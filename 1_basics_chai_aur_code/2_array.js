const arr1=["iron","copper","steel"]
const arr2=["pen","copy","notebook"]

/*
//add two array
const arr3=arr1.push(arr2) //arr2 will act as single value and added to arr1 and return 
//new array arr1 length
console.log(arr1)
console.log(arr3)

*/
/*

through concat , if two arrays
arr4=arr1.concat(arr2)
console.log(arr4)//Combines two or more arrays. This method returns a new array without modifying any existing arrays.
console.log(arr1)

*/

/*
//through spread operator  is generally used if more than two array to merge 
const arr5=[...arr1,...arr2]   // ... will spread all value of arr1 and arr2 and make array of all values
console.log(arr5)   
console.log(arr1)

*/

/*
const arr6=[1,2,3,[4,3,3],44,[3,4,[3,4,5,55],5]]
const arr7=arr6.flat(Infinity)  // put depth if known (in above arr6 depth 2 is sufficient to flat)
console.log(arr7)
console.log(arr6)

*/

/*

const str1="ayajansari"
console.log(Array.isArray(str1))
console.log(Array.from(str1))

const s1=100,s2=200,s3=300;
console.log(Array.of(s1,s2,s3))

*/