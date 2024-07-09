const check=(a:number,b:number,c:number):boolean=>{
    if((a%10==b%10)&&(b%10==c%10)){
        return true;
    }
    else{
        return false
    }
}
console.log(check(10,10,20));