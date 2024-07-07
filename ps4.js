const year=(a)=>{
    if(a%4==0 && a%100!=0 || a%400==0){
        console.log("Leap year");
    }
    else{
        console.log("Not a Leap Year")
    }
}
year(1700);