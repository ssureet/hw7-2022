var video = document.querySelector("#player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	//turn off autoplay
	video.autoplay = false;
	console.log("Autoplay is set to " + video.autoplay)
	//turn off looping
	video.loop = false;
	console.log("Looping is set to " + video.loop)
	
});

// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });

document.querySelector("#play").addEventListener("click", function() {
 	
	console.log("Play Video");
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
	video.play();

 });

 document.querySelector("#pause").addEventListener("click", function() { 

	console.log("Pause Video")
	video.pause();
	
})


document.querySelector("#slower").addEventListener("click", function() {

	console.log("Slow Video Speed");
	video.playbackRate *= 9/10;
	console.log("Speed is " + video.playbackRate);

});


document.querySelector("#faster").addEventListener("click", function() {

	console.log("Increase Video Speed");
	video.playbackRate *= 10/9;
	console.log("Speed is " + video.playbackRate);

});


document.querySelector("#skip").addEventListener("click", function() {

	console.log('Skip Ahead')

	if (video.currentTime >= video.duration){
		video.currentTime = 0
		console.log('Video current time is ' + video.currentTime)
	}

	else{
		video.currentTime += 10
		console.log('Video current time is ' + video.currentTime)
	}

});


document.querySelector("#mute").addEventListener("click", function() {

	video.muted = !video.muted;
	this.innerHTML = (video.muted) ? "Unmute" : "Mute";

});


document.querySelector("#slider").addEventListener("click", function() {

	console.log('the current volume is', video.volume)
	video.volume = this.value / 100
	console.log('the current volume is', video.volume)
	console.log(document.querySelector('#volume'))
	document.querySelector('#volume').innerHTML = (video.volume * 100) + '%'
	
});



document.querySelector("#slider").addEventListener("click", function() {

	console.log('the current volume is', video.volume)
	video.volume = this.value / 100
	console.log('the current volume is', video.volume)
	console.log(document.querySelector('#volume'))
	document.querySelector('#volume').innerHTML = (video.volume * 100) + '%'
	
});



document.querySelector('#vintage').addEventListener('click', function(){
	document.querySelector('video').className = 'video oldSchool';
});



document.querySelector('#orig').addEventListener('click', function(){
	document.querySelector('video').className = 'video';
});