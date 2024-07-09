const req=(name:string):any=>{
    if(name.startsWith('Py')){
        return name;
    }
    return('Py'+name)
}
console.log(req("PyHonk"));