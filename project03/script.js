// Get DOM elements for JS code
const video = document.getElementById("video");
const play = document.getElementById("play");
const stop = document.getElementById("stop");
const progressBar = document.getElementById("progress");
const timer = document.getElementById("timer");

// Function for toggle the video status
function toggleVideoStatus() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

// Function to update play / pause icon
function updatePlayIcon() {
  if (video.paused) {
    play.innerHTML = `<i class="fa fa-play fa-2x"></i>`;
  } else {
    play.innerHTML = `<i class="fa fa-pause fa-2x"></i>`;
  }
}

// Function to update video progress bar
function updateProgress() {
  progressBar.value = (video.currentTime / video.duration) * 100;

  // set timer for timestamp
  let mins = Math.floor(video.currentTime / 60);
  if (mins < 10) {
    mins = `0${mins}`;
  }

  let secs = Math.floor(video.currentTime % 60);
  if (secs < 10) {
    secs = `0${secs}`;
  }
  timer.innerText = `${mins}:${secs}`;
}
// Function to stop video
function stopVideo() {
  video.pause();
  video.currentTime = 0;
}
// Function to update the video progress bar using the slider
function setVideoProgress() {
  video.currentTime = (progressBar.value * video.duration) / 100;
}

// Event Listeners
// 1. Event Listeners for video
video.addEventListener("click", toggleVideoStatus);
video.addEventListener("play", updatePlayIcon);
video.addEventListener("pause", updatePlayIcon);
video.addEventListener("timeupdate", updateProgress);

// 2. Event Listener for Icons Play / Stop
play.addEventListener("click", toggleVideoStatus);
stop.addEventListener("click", stopVideo);

// 3. Event listener for Timer
progressBar.addEventListener("change", setVideoProgress);
