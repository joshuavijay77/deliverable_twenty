var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video = document.getElementById("player1");
	video.autoplay = false;
	video.loop = false;
	//Why slider / 100?
	video.volume = document.querySelector('#slider').value / 100;

	document.querySelector("#play").addEventListener("click", function() {
		console.log("Play Video");
		video.play();
		//updating volume information
		document.querySelector('#volume').textContent = Math.round(video.volume * 100) + '%';
	});

	document.querySelector("#pause").addEventListener("click", function() {
        console.log("Pause Video");
        video.pause();
    });

	document.querySelector("#slower").addEventListener("click", function() {
        console.log("Slow Down");
        // Decrease the video's playback rate by 10%
        video.playbackRate -= 0.1;
        // Log the new speed to the console
        console.log("New speed: " + video.playbackRate);
    });

	document.querySelector("#faster").addEventListener("click", function() {
        console.log("Speed Up");
        // Increase the video's playback rate by 10%
        video.playbackRate += 0.1;
        // Log the new speed to the console
        console.log("New speed: " + video.playbackRate);
    });

	document.querySelector("#skip").addEventListener("click", function() {
        console.log("Skip Ahead");
        // Advance the video by 10 seconds
        video.currentTime += 10;

        // Check if the new position is beyond the video's duration
        if (video.currentTime >= video.duration) {
            // Go back to the start of the video
            video.currentTime = 0;
        }

        // Log the current location of the video
        console.log("Current video location: " + video.currentTime);
    });

	var muteButton = document.querySelector("#mute");
    muteButton.addEventListener("click", function() {
        console.log("Mute/Unmute");
		if (video.muted) {
            // Unmute the video
            video.muted = false;
            // Restore the previous volume
            video.volume = previousVolume;
            // Update the volume slider and text
            document.querySelector('#slider').value = previousVolume * 100;
            document.querySelector('#volume').textContent = Math.round(previousVolume * 100) + '%';
			muteButton.textContent = "Unmute";
        } else {
            // Mute the video
            previousVolume = video.volume; // Store the current volume
            video.muted = true;
            // Set volume to 0
            video.volume = 0;
            // Update the volume slider and text
            document.querySelector('#slider').value = 0;
            document.querySelector('#volume').textContent = "0%";
			muteButton.textContent = "Mute";
        }
    });

	var volumeSlider = document.querySelector("#slider");
    var volumeLabel = document.querySelector('#volume');
    volumeSlider.addEventListener("input", function() {
        // Set the video's volume based on the slider value
        video.volume = volumeSlider.value / 100;
        // Update the volume information
        volumeLabel.textContent = Math.round(video.volume * 100) + '%';
    });

	document.querySelector("#vintage").addEventListener("click", function() {
        console.log("Old School");
        video.classList.add("oldSchool");
    });

	document.querySelector("#vintage").addEventListener("click", function() {
        console.log("Old School");
        video.classList.add("oldSchool");
    });

	document.querySelector("#orig").addEventListener("click", function() {
        console.log("Original");
        video.classList.remove("oldSchool");
    });


});

