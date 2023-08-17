// Description: This file contains the code for the fireflies animation
const numberOfFireflies = 20;
const container = document.getElementById('firefliesContainer');

for (let i = 0; i < numberOfFireflies; i++) {
    const firefly = document.createElement('div');
    firefly.className = 'firefly';

    // Random values between 0 and 1 for initial positions
    firefly.style.setProperty('--random-x', Math.random());
    firefly.style.setProperty('--random-y', Math.random());

    // Random durations between 5s and 15s for varied movement
    const randomDuration = 5 + Math.random() * 10;
    firefly.style.animationDuration = `${randomDuration}s, 1s`;

    // Random delays so they don't all start at the same time
    const randomDelay = Math.random() * 10;
    firefly.style.animationDelay = `${randomDelay}s, ${randomDelay}s`;

    container.appendChild(firefly);
}

function togglePlay() {
    var audio = document.getElementById('audioPlayer');
    var button = document.getElementById('playMusicBtn');
    if (audio.paused) {
        audio.play();
        button.textContent = 'Pause Music';
    } else {
        audio.pause();
        button.textContent = 'Play Music';
    }
}

window.onload = function() {
    var audio = document.getElementById('audioPlayer');
    audio.volume = 0.20;  // Set volume to any % between 0.0 and 1.0
};




