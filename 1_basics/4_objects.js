//by singleton

// const myObj=new Object()
// console.log(myObj)
// myObj.name="ayaj"
// myObj.isLoggedIn=false
// myObj.email="sample#gmail.com"
// console.log(myObj)


// const obj1={
//     email:"one@gmail.com",
//     fullName:{
//         userName:{
//             firstName:"mohammad",
//             lastName:"ansari"
//         }
//     }
// }
// console.log(obj1.fullName)
// console.log(obj1.fullName.userName)
// console.log(obj1.fullName.userName.firstName) 


//combine two or more objects
// const obj1={ 1:'a',2:'b',3:'c'}
// const obj2={4:'d',5:'d'}
// const obj3={...obj1,...obj2}
// console.log(obj3)
// // const obj4=Object.assing({target},{source})
// const obj4=Object.assign({},obj1,obj2)
// console.log(obj4)



const obb=[
    {
        email:"1@gmail.com",
        name:"first"
    },
    {
        email:"2@gmail.com",
        name:"second"
    },
    {
        email:"3@gmail.com",
        name:"third"
    },
    {
        email:"4@gmail.com",
        name:"fourth"
    }
]
console.log(obb)
console.log(obb[2].email)
console.log(Object.keys(obb[3]))//now we can use keys as array 
console.log(Object.values(obb[2]))
console.log(obb.hasOwnProperty('email'))//check if email property available or not
console.log(obb[2].hasOwnProperty('email'))


