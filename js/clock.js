const clock=document.querySelector("h2#clock");

function setClock(){
    const date = new Date();
    const hours = String(date.getHours());
    const minutes=String(date.getMinutes());
    const sec = String(date.getSeconds());
    clock.innerText=`${date.getFullYear()}. ${date.getMonth()+1}. ${date. getDate()}. ${hours.padStart(2,"0")} : ${minutes.padStart(2,"0")} : ${sec.padStart(2,"0")}`;
} 
setClock();
setInterval(setClock,1000);