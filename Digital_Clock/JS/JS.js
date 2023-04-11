// clock time changing code
setInterval(function(){
    var date = new Date();
    var hours = date.getHours();    //0-23
    var minutes = date.getMinutes();    //0-59
    var seconds = date.getSeconds();    //0-59
    var session = "AM";

    if (hours >= 0){
        session = "PM";
    }
    if (hours > 12){
        hours = hours - 12;
    }
    hours = (hours < 10)? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    var clockTime = hours + ":" + minutes + ":" + seconds + " " + session;
    var clock = document.querySelector("#clock");
    clock.innerText = clockTime;
}, 1000);


// color theme changing code
var colorList = ["rgb(255, 255, 255)", "rgb(3, 220, 253)", "rgb(255, 0, 0)", "rgb(255, 255, 0)", "rgb(161, 3, 253)", "rgb(255, 160, 122)", "rgb(93,138,168)", "rgb(253, 3, 95 )", "rgb(218, 247, 166)"];
var theme = document.querySelector('#theme');
let i = 0;
var h1 = document.querySelector('h1');
var themeButton = document.querySelector('#theme');
var clock = document.querySelector('#clock');

theme.addEventListener('click', () => {
    i = i + 1;
    if (i === 8)
        i = 0;
    // h1
    h1.style.color = colorList[i];
    h1.style.borderColor = colorList[i];

    //theme button
    themeButton.style.backgroundColor = colorList[i];
    themeButton.style.color = "black";
    themeButton.style.borderColor = colorList[i];
    themeButton.addEventListener('mouseenter', () =>{
        themeButton.style.backgroundColor = colorList[i];
        themeButton.style.color = "black";
    });
    themeButton.addEventListener('mouseleave', () => {
        themeButton.style.backgroundColor = "black";
        themeButton.style.color = colorList[i];
    });

    // clock
    clock.style.color = colorList[i];
    clock.style.borderColor = colorList[i];
    clock.addEventListener('mouseenter', () => {
        clock.style.backgroundColor = colorList[i];
        clock.style.color = "black";
        clock.style.boxShadow = `0 0px 20px ${colorList[i]}`;
    });
    clock.addEventListener('mouseleave', () => {
        clock.style.backgroundColor = "black";
        clock.style.color = colorList[i];
        clock.style.boxShadow = "0 0px 20px black";
    });
});