const a=new Array(1,2,3);
const start=0;
const end=a.length-1;
const x=new Array();
for(let i=0;i<end;i++){
    x[i]=a[i+1];
    x.push(a[0]);
}

console.log(x);