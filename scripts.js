function toggleAudio(audioId, play) {
    var audio = document.getElementById(audioId);
    if (play) {
      audio.volume = 0.3; // You can change this value to whatever you prefer
      audio.play();
    } else {
      audio.pause();
      audio.currentTime = 0;
    }
  }
  
  var balutHeader = document.querySelector('.header-balut');
  var isawHeader = document.querySelector('.header-isaw');
  var isawGif = document.querySelector('.isaw-gif');
  
  isawHeader.addEventListener('mouseover', function() {
    toggleAudio('bibo', true);
    isawGif.style.opacity = '1';
  });
  
  isawHeader.addEventListener('mouseout', function() {
    toggleAudio('bibo', false);
    isawGif.style.opacity = '0';
  });
  
  balutHeader.addEventListener('mouseover', function() {
    toggleAudio('eyes', true);
  });
  
  balutHeader.addEventListener('mouseout', function() {
    toggleAudio('eyes', false);
  });
  
  
  
  
  
  
  
