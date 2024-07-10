const arr=[1,2,7,8];
const x=arr.filter((item)=>item==1 || item==3);
if(x.length>=1){
    console.log(true)
}
else{
    console.log(false);
}
console.log(x);