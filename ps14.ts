const info=(a:string,pos:number):any=>{
    if(pos<0 || pos> a.length){
        return "Invalid Position"

    }
    const ns=a.split("").splice(pos);
    return ns.join("");
}
console.log(info("Pratham",10));