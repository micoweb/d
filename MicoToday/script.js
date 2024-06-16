let interval = window.setInterval(function() {
    let currentTime = new Date();
    let currentYear = currentTime.getFullYear();
    let currentHours = currentTime.getHours();
    let currentMinutes = currentTime.getMinutes();
    let currentSeconds = currentTime.getSeconds();
    let currentDay = currentTime.getDate();
    let month = currentTime.getMonth();
    let currentDays;

    if(month == 0){
        currentDays = currentDay
    } else if(month == 1){
        currentDays = currentDay + 31;
    } else if(month == 2 && currentYear % 4 === 0){
        currentDays = currentDay + 60;
    } else if(month == 3 && currentYear % 4 === 0){
        currentDays = currentDay + 91;
    } else if(month == 4 && currentYear % 4 === 0){
        currentDays = currentDay + 121;
    } else if(month == 5 && currentYear % 4 === 0){
        currentDays = currentDay + 152;
    } else if(month == 6 && currentYear % 4 === 0){
        currentDays = currentDay + 182;
    } else if(month == 7 && currentYear % 4 === 0){
        currentDays = currentDay + 213;
    } else if(month == 8 && currentYear % 4 === 0){
        currentDays = currentDay + 244;
    } else if(month == 9 && currentYear % 4 === 0){
        currentDays = currentDay + 274;
    } else if(month == 10 && currentYear % 4 === 0){
        currentDays = currentDay + 305;
    } else if(month == 11 && currentYear % 4 === 0){
        currentDays = currentDay + 335;
    }
    else if(month == 2 && currentYear % 4 != 0){
        currentDays = currentDay + 59;
    } else if(month == 3 && currentYear % 4 != 0){
        currentDays = currentDay + 90;
    } else if(month == 4 && currentYear % 4 != 0){
        currentDays = currentDay + 120;
    } else if(month == 5 && currentYear % 4 != 0){
        currentDays = currentDay + 151;
    } else if(month == 6 && currentYear % 4 != 0){
        currentDays = currentDay + 181;
    } else if(month == 7 && currentYear % 4 != 0){
        currentDays = currentDay + 212;
    } else if(month == 8 && currentYear % 4 != 0){
        currentDays = currentDay + 243;
    } else if(month == 9 && currentYear % 4 != 0){
        currentDays = currentDay + 273;
    } else if(month == 10 && currentYear % 4 != 0){
        currentDays = currentDay + 304;
    } else if(month == 11 && currentYear % 4 != 0){
        currentDays = currentDay + 334;
    } else{
        currentDays = "??";
    }

    let hourValue;
    let minuteValue;
    let secondValue;
    let dayValue;

    if(currentHours < 24){
        hourValue = 23;
    } else {
        hourValue = 24;
    };
    if(currentMinutes < 60){
        minuteValue = 59;
    } else {
        minuteValue = 60;
    };
    if(secondValue < 60){
        secondValue = 59;
    } else {
        secondValue = 60;
    };

    if(currentYear % 4 === 0){
        dayValue = 366;
    } else {
        dayValue = 365;
    }

    let remainingHours = hourValue - currentHours;
    let remainingMinutes = minuteValue - currentMinutes;
    let remainingSeconds = secondValue - currentSeconds;
    let remainingDays = dayValue - currentDays;

    if(remainingHours< 10){
        remainingHours = "0" + remainingHours
    } else{
        remainingHours = remainingHours
    }
    
    if(remainingMinutes< 10){
        remainingMinutes = "0" + remainingMinutes
    } else{
        remainingMinutes = remainingMinutes
    }

    if(remainingSeconds< 10){
        remainingSeconds = "0" + remainingSeconds
    } else{
        remainingSeconds = remainingSeconds
    }

    

    document.getElementById('days').innerHTML = remainingDays;
    document.getElementById('hours').innerHTML = remainingHours;
    document.getElementById('minutes').innerHTML = remainingMinutes;
    document.getElementById('seconds').innerHTML = remainingSeconds;

    let newYear = currentTime.getFullYear() + 1;

    document.getElementById('title').innerHTML = "New Year " + newYear;
}, 1000)


function openSharePannel(){
    document.getElementById('shareBtn').style.display = "none";
    document.getElementById('sharePannel').style.display = "block";
}
function closeSharePannel(){
    document.getElementById('shareBtn').style.display = "block";
    document.getElementById('sharePannel').style.display = "none";
}
