function playAudio() {
    var audio = document.getElementById("phil");
    audio.play();
  }
  
  function stopAudio() {
    var audio = document.getElementById("phil");
    audio.pause();
    audio.currentTime = 0; // This line resets the audio to the beginning
  }
  
  function playbiboAudio() {
    var audio = document.getElementById("bibo");
    audio.play();
  }
  
  function stopbiboAudio() {
    var audio = document.getElementById("bibo");
    audio.pause();
    audio.currentTime = 0; // Resets the audio to the beginning
  }
  