const comp=(str1,str2)=>{
    const result=str1+str2;
    if(result.length!=str2.length){
        const result2=result.slice(0,result.length-str2.length);
        const max=result2+str2;
        console.log(max);
    }
}
console.log(comp("Python","JS"));