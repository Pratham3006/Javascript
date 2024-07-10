const join=(str,n)=>{
    const start=str.substring(0,n);
    const end=str.substring(str.length-n);
    const result=start+end;
    return result;
}
console.log(join("Pratham",3));