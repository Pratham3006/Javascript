function cap(str:string):string{
    const a=str.split(" ");
    const x2=a.map((item)=>{
        return item.charAt(0).toUpperCase()+item.slice(1);
    })
    return x2.join(' ');
}
console.log(cap("It is a hot day"));