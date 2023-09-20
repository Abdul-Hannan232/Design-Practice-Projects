// Get DOM elements for JS code
const video = document.getElementById("video");
const play = document.getElementById("play");
const stop = document.getElementById("stop");
const progressBar = document.getElementById("progress");
const timer = document.getElementById("timer");

// Event Listeners for video
video.addEventListener("click", toggleStatus);
video.addEventListener("play", updatePlayIcon);
video.addEventListener("stop", updatePlayIcon);

// Event Listener for Icons Play / Stop
play.addEventListener("click", updatePlayIcon);
stop.addEventListener("clicl", stopVideo);

// Event listener for Timer
progressBar.addEventListener("change", updateProgress);
