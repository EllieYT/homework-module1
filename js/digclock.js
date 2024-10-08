//Create a time date fuction
function currentTime() {
  // Declare variables
  var d = new Date(); // Get current date
  var hr = d.getHours(); // Get current hours
  var min = d.getMinutes(); // Get current minutes
  var sec = d.getSeconds(); // Get current seconds
  var ampm; // Declare empty variable to store AM or PM

  // Add 0 to single digits for seconds
  if (sec < 10) {
    sec = "0" + sec;
  }
  // Add 0 to single digits for minutes
  if (min < 10) {
    min = "0" + min;
  }

  // Determine AM or PM string
  if (hr == 12) {
    ampm = "PM"; // Set to PM
  } else if (hr > 12) {
    hr -= 12; // Deduct 12 from hours greater than 12 (military time)
    ampm = "PM"; // Set to PM
  } else {
    ampm = "AM"; // Set to AM
  }
  // Assemble time format to display
  var time = hr + ":" + min + ":" + sec + " " + ampm;

  // Display current local time and time zone on HTML elements
  document.getElementById("clock").innerText = time; // adding time

  // Run time data function every 1 second
  setInterval(currentTime, 1000); // setting timer
}
// Initial run of time data function
currentTime();

// Declare variables
var d = new Date(); // Get current date
var hr = d.getHours(); // Get current hours
var min = d.getMinutes(); // Get current minutes
var sec = d.getSeconds(); // Get current seconds
var ampm; // Declare empty variable to store AM or PM

// Add 0 to single digits for seconds and minutes
if (sec < 10) {
  sec = "0" + sec;
}
if (min < 10) {
  min = "0" + min;
}

// Determine AM or PM string
if (hr == 12) {
  ampm = "PM";
} else if (hr > 12) {
  hr -= 12;
  ampm = "PM";
} else {
  ampm = "AM";
}

// Get UTC hours and calculate time difference
var utchr = d.getUTCHours(); // Get current Greenwich Mean Time (GMT)
var timeDiff = hr - utchr; // Calculate time difference between GMT and local hour
var adjTimeDiff = Math.abs(timeDiff); // Convert time difference to a positive number

var timeZone = "PT";

// Assemble time format to display
var time = hr + ":" + min + ":" + sec + " " + ampm + " " + timeZone;

// Display current local time and time zone on HTML elements
document.getElementById("clock").innerText = time;

// Initial run of time data function
function currentTime() {
  var d = new Date();
  // (Repeat or update code as needed)
}

setInterval(currentTime, 1000); // Update the time every 1 second
