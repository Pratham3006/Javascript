const m=new Date();
const Days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
console.log(Days[m.getDay()]);
console.log(m.getHours()>12?`${m.getHours()-12}PM`:`${m.getHours()}AM`)
console.log(m.getMinutes());
console.log(m.getSeconds())