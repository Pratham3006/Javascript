const map=new Map();
const arr=[1, 2, 3, 2, 2, 8, 1, 9];
for(let num of arr){
    if(map.has(num)){
        map.set(num,map.get(num)+1);
    }
    else{
        map.set(num,1);
    }
}
let count=0;
let maxfreq=0;
for(const[num,freq] of map){
    if(freq>count){
        count=freq;
        maxfreq=num
    }
}
console.log(maxfreq);
