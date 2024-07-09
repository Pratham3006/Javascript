const sentence=(name:string,char:string):boolean=>{
    if(name.length<3){
        return false;
    }
    else{
       
        if(name.charAt(2)==char){
            return true;
        }
        else{
            return false;

        }
    }
}
console.log(sentence("Pratham","a"));

