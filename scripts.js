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
  
  isawGif.style.opacity = '0'; // Set initial opacity to 0
  
  isawHeader.addEventListener('mouseover', function() {
    toggleAudio('bibo', true);
    isawGif.style.opacity = '1'; // Sets opacity to 1 when hovered
    isawGif.style.transition = 'opacity 0.5s ease'; // Adds a smooth transition effect
  });
  
  isawHeader.addEventListener('mouseout', function() {
    toggleAudio('bibo', false);
    isawGif.style.opacity = '0'; // Sets opacity back to 0 when not hovered
  });
  
  balutHeader.addEventListener('mouseover', function() {
    toggleAudio('eyes', true);
  });
  
  balutHeader.addEventListener('mouseout', function() {
    toggleAudio('eyes', false);
  });
  
  
  
  
  
  
  
  
