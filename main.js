// other method
var date = new Date();

var dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
var timeOptions = { hour: '2-digit', minute: '2-digit', timeZoneName: 'short' }

var clientDate = date.toLocaleDateString('en', dateOptions)
var clientTime = date.toLocaleTimeString('en', timeOptions);

document.getElementById('currentDateTime').innerHTML = 'Your current time is ' + clientTime + ' ' + 'on' + ' ' + clientDate;
console.log(clientTime + " " + clientDate);

// Loop to grab users selected timezone
var timeZone = document.getElementById('timezone-offset');

function getSelectedTimezone(timeZone) {
    var uTZI;
    for (var i = 0, len = timeZone.options.length; i < len; i++) {
        uTZI = timeZone.options[i];
        if (uTZI.selected === true) {
            break;
        }
    }
    return uTZI;
}

// Grabs time, date and timezone user input and stores in a variable (and posts to console currently)
var uTZI = getSelectedTimezone(timeZone).value;
var uTI = document.getElementById('userTimeInput').value;
var uDI = document.getElementById('userDateInput').value;



console.log(uTI + " " + uDI + " " + uTZI);
console.log(newUTI);


// testing


// Shows time difference between two dates in days, hours and minutes
var date1, date2;

    date1 = new Date();
    document.write("" + date1);


    date2 = new Date("Feb 11, 2020 20:45");
    document.write("<br>" + date2);

    var res = Math.abs(date1 - date2) / 1000;

    // get total days between two dates
    var days = Math.floor(res / 86400);

    // get hours        
    var hours = Math.floor(res / 3600) % 24;

    // get minutes
    var minutes = Math.floor(res / 60) % 60;

    document.write("<br>Event starts in: " + days + " days " + hours + " hours " + minutes + " minutes");