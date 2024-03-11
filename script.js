const buttonStart = document.getElementById("start")
const buttonPause = document.getElementById("pause")
const buttonReset = document.getElementById("reset")
const hoursTimer = document.getElementById("hours")
const minutesTimer = document.getElementById("minutes")
const secondsTimer = document.getElementById("seconds")
let interval
let hours = 0
let minutes = 0
let seconds = 0

//===================================

buttonStart.addEventListener("click", function() {
    interval = setInterval(start, 1000)
    document.getElementById("start").disabled = true
})

function start() {
    seconds++
    if (seconds >= 60) {
        minutes++
        seconds = 0
    }
    if (seconds < 10) {
        seconds = "0"+parseInt(seconds)
    }
    if (minutes >= 60) {
        seconds = 0
        minutes = 0
        hours++
    }
    if (minutes < 10) {
        minutes = "0"+parseInt(minutes)
    }
    if (hours < 10) {
        hours = "0"+parseInt(hours)
    }
 
    console.log("Start!!!") 
    secondsTimer.innerText = seconds
    minutesTimer.innerText = minutes
    hoursTimer.innerText = hours
}

//==================================

buttonPause.addEventListener("click", pause)

function pause() {
    clearTimeout(interval)
    document.getElementById("start").disabled = false
    console.log("Pause!!!")
}

//================================

buttonReset.addEventListener("click", reset)

function reset() {
hoursTimer.innerText = "00"
minutesTimer.innerText = "00"
secondsTimer.innerText = "00"
    seconds = 0
    minutes = 0
    hours = 0
    console.log("Reset!!!")
    document.getElementById("start").disabled = false
    clearInterval(interval)
}

//====================================