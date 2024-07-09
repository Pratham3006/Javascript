const case1=(name:string):any=>{
    let a="";
    if(name.length<3){
        let a=name.toUpperCase();
        return a;
    }
    else{
        let pre=name.slice(0,3).toLowerCase();
        let next=name.slice(3).toUpperCase();
        a=pre+next;
        return a;

    }
}
console.log(case1("Anoshpin"));