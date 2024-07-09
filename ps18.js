let number=(name)=>{
    const char=name.slice(name.length-3,name.length).split("");
    const name1= name.split("");
    name1.unshift(...char);
    name1.push(...char);
    return name1.join("")
}
console.log(number("Pratham"));