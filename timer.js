function startTimer(duration, display) {
    //functio used to define duration and display//
    var timer = duration, minutes, seconds;
    //to define timer to system using units of minuted and seconds//
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);
        //defining value of mute and seconds//

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;
        // here we are declaring what to display on screen which is minutes + seconds//

        if (--timer < 0) {
            timer = duration;
        }
        //this resets the timer again to 10 minutes//
    }, 1000);
}
window.onload = function () {
    //this onload event is used to execute the scrpt when page is loadede//
    var tenMinutes = 60 * 10, //ten minutes is our variable which consist of seconds and number of minutes//
    // we used 60mseconds 10 times to use 10 minuutes in countdown//
        display = document.querySelector('#time');
    startTimer(tenMinutes, display);
    //this starts the timer and takes the value from var tenminutes for starting a countdown of ten minutes//
};