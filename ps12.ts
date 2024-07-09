const sign = (a: number, b: number): any => {
    if (a < 0 && b > 0) {
        return [false, true];
    }
    else if (a < 0 && b < 0) {
        return [false, false];
    }
    else if (a > 0 && b < 0) {
        return [true, false];
    }
    else{
        return [true,true]
    }

}
console.log(sign(-1,-1));