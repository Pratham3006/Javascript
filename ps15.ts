const text=(name:string):any=>{
    const a=name.split("");
    return swap(a);

}
function swap(a:string[]):any{
    let temp=a[0];
    a[0]=a[a.length-1];
    a[a.length-1]=temp;
    return a.join("");
}


console.log(text("Pratham"));