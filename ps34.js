let check=(str)=>{
    let start=0;
    let end=str.length-1;
    if(str.length>0 && str.charAt(start)=='P'){
        return str.substring(start+1);
    }
    else if(str.length>0 && str.charAt(end)=='P'){
        return str.substring(start,end);
    }
    else{
        return str;
    }
}
console.log(check("PrathamP"));