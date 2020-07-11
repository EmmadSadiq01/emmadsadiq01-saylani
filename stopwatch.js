let sec = 0;
let min = 0;
let hrs = 0;

let displaysec = 0;
let displaymin = 0;
let displayhrs = 0;

let interval = null;

let start_pause = 0;



function timer() {

    sec += 1;
    if (sec >= 60) {
        min += 1;
        sec = 0
    }
    if (min >= 60) {
        hrs += 1;
        min = 0
    }
    if (sec < 10) {
        displaysec = "0" + sec
    }
    else {
        displaysec = sec
    }
    if (min < 10) {
        displaymin = "0" + min
    }
    else {
        displaymin = min
    }
    if (hrs < 10) {
        displayhrs = "0" + hrs
    }
    else {
        displayhrs = hrs
    }
    document.getElementById('display').innerHTML = displayhrs + ":" + displaymin + ":" + displaysec

}
function start() {

    if (start_pause === 0) {
        interval = window.setInterval(timer, 1000);
        document.getElementById('start').innerHTML = "Pause";
        start_pause = 1;

    }
    else {
        interval = window.clearInterval(interval);
        document.getElementById('start').innerHTML = "Start";
        start_pause = 0;

    }

}
function reset() {
    document.getElementById('display').innerHTML = "00:00:00";
    interval = window.clearInterval(interval)
    min = 0;
    sec = 0;
    hrs = 0;
    start_pause = 0
    document.getElementById('start').innerHTML = "Start"
}