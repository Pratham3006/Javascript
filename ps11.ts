const checker=(a:number,b:number):any=>{
    if(a==50||b==50){
        return true;
    }
    if(a+b==50){
        return true;
    }
    else{
        return false;
    }
}
console.log(checker(10,20));