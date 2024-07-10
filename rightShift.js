const a=new Array(1,2,3,4,5,6,7);
const rotate=new Array();
for(let i=0;i<a.length-1;i++){
    rotate.push(a[i]);
}
rotate.unshift(a[a.length-1]);
console.log(rotate);