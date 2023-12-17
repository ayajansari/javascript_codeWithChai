//object destructuring
const obj1={
    email:"one@gmail.com",
    fullName:{
        userName:{
            firstName:"mohammad",
            lastName:"ansari"
        }
    },
    userInstructor:"james"
}
console.log(obj1.userInstructor)
//below 2 lines are for above line 
const {userInstructor:instructer}=obj1 //here we have destructed the obj1 object
console.log(instructer)//now we can use instructer keyword for obj1's courseInstructor

//array destructuring
const arr=["name",45,"email"]
console.log(arr[2])
const [nm,count,mail]=arr
console.log(count)
console.log(nm)