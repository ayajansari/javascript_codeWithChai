const arr=[2,5,3,6,8,1];

//map function -> transformation is applied on each value of array
function double(x){
      return x*2;
}
const d1=arr.map(double);
console.log(d1);

function binary(x){
      return x.toString(2);
}
const d2=arr.map(binary);
console.log(d2);

const d3=arr.map((x)=> x.toString(2) );
console.log(d3);

//filter function -> selection is done using condition

function isOdd(x){
      return x%2;
}
const a1=arr.filter(isOdd);
console.log(a1);

const a2=arr.filter((x)=> x%2==0);
console.log(a2);

// reduce
//program to find max value from array
function mx(arr){
      let maxi=0;
      for(let i=0;i<arr.length;i++){
            if(maxi<arr[i]){
                  maxi=arr[i];
            }
      } 
      return maxi;
}
console.log(mx(arr));

const out=arr.reduce(function(maxi,curr){
      if(maxi<curr){
            maxi=curr;
      }
      return maxi; //this maxi will be stored in o/p into maxi passed as parameter
},0);//0 is default value to maxi
console.log(out);