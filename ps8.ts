const filename = (name: String):any=> {
    return name.split(".").pop();

}
console.log(filename("ans.java"))