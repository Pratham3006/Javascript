const appender=(name:string):string=>{
    const char=name[0];
    const a=name.split("")
    a.unshift(char);
    a.push(char)
    return a.join("");
}
console.log(appender("Pratham"));