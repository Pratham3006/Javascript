const filename = (name: String):any=> {
    if(name.split(".").length>2){
        return false;
    }
    else{
    return name.split(".").pop();
    }

}
console.log(filename("ans.java"))