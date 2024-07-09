for(let i=2020;i<2050;i++){
    const m=new Date(i,0,1);
    if(m.getDay()==0){
        console.log(i);
    }

}

