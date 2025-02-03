function UpdateTime(){
    const currentTimeElement = document.getElementById("currentTime")
    const now = new Date()
    const TimeString = now.toUTCString()
    currentTimeElement.textContent =  `urrent UTC Time: ${TimeString}`

}

// After 10 secs
UpdateTime();
setInterval(UpdateTime,1000)