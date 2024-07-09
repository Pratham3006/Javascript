const Christmas=new Date(2024,11,25);
const today=new Date();
if(today.getMonth()==11 &&today.getDate()>25){
    Christmas.setFullYear(Christmas.getFullYear()+1);
}
var day=1000*24*60*60;
const time=Math.ceil((Christmas.getTime()-today.getTime())/(day))
console.log(time)