const a=27;
function add(a){
    let sum=0;
    while(a>0){
    let rem=a%10
    sum=sum+rem;
    a=Math.floor(a/10);
    }
    return sum;
}
console.log(add(a));