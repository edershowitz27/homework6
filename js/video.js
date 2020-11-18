var video;
var speedTracker = 1.0;
var volumeValue = 1.0;


window.addEventListener("load", function() {
	video = document.querySelector("#myVideo");
});

document.querySelector("#play").addEventListener("click", function() {
	video.play();
	console.log("Play Video");
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});



//Check times
document.querySelector("#slower").addEventListener("click", function() {
	speedTracker = .9 * speedTracker;
	video.playbackRate = speedTracker;
	console.log("Slow down.  New speed is now: " + speedTracker);
});

//Check times
document.querySelector("#faster").addEventListener("click", function() {
	speedTracker = 1.1 * speedTracker;
	video.playbackRate = speedTracker;
	console.log("Speed Up. New speed is now: " + speedTracker);
});


document.querySelector("#skip").addEventListener("click", function() {
	let presentTime = video.currentTime;
	let totalMovieTime = video.duration;

	if (presentTime > totalMovieTime - 5) {
		//let goTo = totalMovieTime - presentTime + 5;
		video.currentTime = 0;
	}
	else {
		video.currentTime = video.currentTime + 5;
	}
	console.log("Skipped ahead 5 seconds. The current time is: " + video.currentTime);
	video.play();
});


document.querySelector("#mute").addEventListener("click", function() {
	if(video.muted == true) {
		video.muted = false;
		document.getElementById('mute').innerHTML = 'Mute';
		console.log("Unmuted Video");
	}
	else {
		video.muted = true;
		document.getElementById('mute').innerHTML = 'Unmute';
		console.log("Muted Video");
	}
});

//FIX!!!  "sliders listen for differenct things in Javascript"
document.querySelector("#volumeSlider").addEventListener("input", function() {
	console.log("Adjust Volume");

	//change the video's volume
	//var value = document.getElementById('volumeSlider').value;
	volumeValue = document.getElementById('volumeSlider').value;
	video.volume = volumeValue/100;

	//change what it says the volume is
	document.getElementById('volume').innerHTML = volumeValue + '%';
});


document.querySelector("#old").addEventListener("click", function() {
	//video = video.oldTime;
	console.log("Old school");
	//video.oldTime;
	document.getElementById("myVideo").className += "oldTime";
});


document.querySelector("#original").addEventListener("click", function() {
	console.log("Original");
	document.getElementById("myVideo").className -= "oldTime";
});