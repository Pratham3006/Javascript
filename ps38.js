const a=new Array(1,2,3,4);
//const m=a.reverse();//
//console.log(m)//;
//type 2//
const start=0;
const end=a.length-1;
const mid=Math.floor(start+(end-start)/2);

function swap(arr,start,end){
    while(start<end){
    let temp=arr[start];
    arr[start]=arr[end]
    arr[end]=temp
    start++;
    end--;
    }
    
    return arr;
    
}
console.log(swap(a,start,end));