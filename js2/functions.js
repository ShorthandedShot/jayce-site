// // https://codepen.io/afarrar/pen/JRaEjP
// function showTime(){
//     var date = new Date();
//     var h = date.getHours(); // 0 - 23
//     var m = date.getMinutes(); // 0 - 59
//     var s = date.getSeconds(); // 0 - 59
//     var ampm = "am";
//
//     if(h == 0){
//         h = 12;
//     }
//
//     if(h > 12){
//         h = h - 12;
//         ampm = "pm";
//     }
//
//     h = (h < 10) ? "0" + h : h;
//     m = (m < 10) ? "0" + m : m;
//     s = (s < 10) ? "0" + s : s;
//
//     // var time = h + ":" + m + ":" + s + " " + ampm;
//     var time = h + ":" + m + " " + ampm;
//     document.getElementById("clock").innerText = time;
//     document.getElementById("clock").textContent = time;
//
//     setTimeout(showTime, 1000);
//
// }
//
// showTime();

function displayTime() {
    var time = moment().tz('America/New_York').format('HH:mm') + " " + "est";
    $('#clock').html(time);
    setTimeout(displayTime, 1000);
}

$(document).ready(function() {
    displayTime();
});
