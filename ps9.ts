const diff=(number:any):any=>{
    if(number<=13){
        return Math.abs(13-number);
    }
    else{
        return Math.abs(13-number)*2;
    }
}
console.log(diff(19));