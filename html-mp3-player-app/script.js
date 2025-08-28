// This file contains the JavaScript code for the MP3 player functionality.

document.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('audio-player');
    const playButton = document.getElementById('play-button');
    const pauseButton = document.getElementById('pause-button');
    const trackSelect = document.getElementById('track-select');

    // Function to play the audio
    playButton.addEventListener('click', () => {
        audio.play();
    });

    // Function to pause the audio
    pauseButton.addEventListener('click', () => {
        audio.pause();
    });

    // Function to change the track
    trackSelect.addEventListener('change', (event) => {
        audio.src = event.target.value;
        audio.play();
    });
});