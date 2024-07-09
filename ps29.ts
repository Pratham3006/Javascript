function name3(str:string):string{
    const a=str.split("").sort().join("");
    return a;
}
console.log(name3("Python"));