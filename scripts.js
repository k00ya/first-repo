function toggleAudio(audioId, play) {
    var audio = document.getElementById(audioId);
    if (play) {
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
    toggleAudio('phil', true);
  });
  
  balutHeader.addEventListener('mouseout', function() {
    toggleAudio('phil', false);
  });
  
  
  
  
  
  
  
