var arr=[];
console.log(typeof arr);
// arr[0]=1
// arr[1]=200
// console.log(arr)
// console.log(arr[1])
var arr=[16,'hello',false,undefined,78n,Symbol(100),()=>console.log("i am a test ",["i am a good Boy",10,true])]
// console.log(arr[7])


for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
}