const a=[10,2,30,30,40];
function swap(arr,start,end){
    let temp=arr[start];
    arr[start]=arr[end];
    arr[end]=temp;
    return arr;
}
console.log(swap(a,0,4));