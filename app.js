function digitalClock(){
    let date = new Date();
   let hour = date.getHours();
   let minutes = date.getMinutes();
   let second = date.getSeconds();
   let timeFormate = 'AM';


//  use some condition for styling some condition

if (hour === 0){
    hour = 12;
}
if(hour >12){
    hour = hour - 12;
    timeFormate = 'PM'
}

hour = hour < 10 ? '0' + hour : hour;
minutes = minutes < 10 ? '0' + minutes : minutes;
second = second < 10 ? '0' + second : second;
//  this section alowess write before the if and hour minutes and second condito 

   let clockFormate = `${hour}:${minutes}:${second}`

document.getElementById("time").innerText = clockFormate;
document.querySelector("small").innerText = timeFormate;

setInterval(digitalClock, 1000);

}
digitalClock()






































































































