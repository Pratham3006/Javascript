const reverse=(name:string):string=>{
    const a=name.split("").reverse().join("");
    return a;
}
console.log(reverse("Pratham"));