const arr=[10,4,30,0,30];
for(let i=0;i<arr.length-1;i++){
    let max=0;
    max=Math.max(arr[i]+arr[i+1],max);
}