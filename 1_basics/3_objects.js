//objects can be represented in two ways -> by literals and by singleton
// by object literals

// const user={ //key-value pairs,
//     name:"ayaj",   
//     "full name":"ansari ayaj", //keys are string type but we dont write then also fine
//     age:21,
//     email:"ayajansari@gmail.com",
//     isLoggedIn:false
// }
// //access values
// console.log(user.name)
// console.log(user["name"])   //keys are string type
// console.log(user["full name"])

//add symbol to object
const mySym=Symbol("key1")
const user1={
    name:"ayaj",   
    "full name":"ansari ayaj",
    [mySym]: "mykey1",
    age:21,
    email:"ayajansari@gmail.com",
    isLoggedIn:false
}
console.log(user1[mySym]);

//update values 
user1.email="randomemail@gmail.com"
console.log(user1.email)

//freez the object
Object.freeze(user1)//now no changes will be updated in user object
user1.name="raju bhai"
console.log(user1)



