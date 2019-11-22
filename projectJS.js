//Function to display current time
function palmaClock(){
	var curTime = new Date();
	var utcHr = curTime.getUTCHours();
	
	//If it is 23:00 UTC, set to 0:00 CEST
	if (utcHr == 23) {
		utcHr = 0;
	}
	else {
		utcHr++;
	}

	var utcMin = curTime.getUTCMinutes();
	var utcSec = curTime.getUTCSeconds();
	utcHr = formatTime(utcHr);
	utcMin = formatTime(utcMin);
	utcSec = formatTime(utcSec);

	var clock = utcHr + ":" + utcMin + ":" + utcSec;
	document.getElementById("palmaTime").innerHTML = clock;
	var loading = setTimeout(palmaClock, 1000);
}

//Function adds 0 before hour, minute, and second when they are single digit
function formatTime(x) {
	if (x < 10) {
		x = "0" + x;
	}
	return x;
}