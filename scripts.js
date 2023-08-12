function toggleAudio(audioId, play) {
    var audio = document.getElementById(audioId);
    play ? audio.play() : audio.pause();
    audio.currentTime = play ? audio.currentTime : 0;
    audio.volume = 0.3;
  }
  
  function handleGifOpacity(headerClass, gifClass, audioId) {
    var header = document.querySelector(headerClass);
    var gif = document.querySelector(gifClass);
    gif.style.opacity = '0';
    header.addEventListener('mouseover', () => {
      toggleAudio(audioId, true);
      gif.style.cssText = 'opacity: 1; transition: opacity 0.5s ease;';
    });
    header.addEventListener('mouseout', () => {
      toggleAudio(audioId, false);
      gif.style.opacity = '0'; // Fix to fade out the gif when not hovered
    });
  }  
  
  function createRain() {
    var div = document.createElement('div');
    div.className = 'rain show';
    for (var i = 0; i < 100; i++) {
      var drop = document.createElement('div');
      drop.className = 'drop';
      drop.style.cssText = `left: ${(Math.random() * 100)}vw; animation-duration: ${(Math.random() * 1 + 0.5)}s; animation-delay: ${(Math.random() * 2)}s;`;
      div.appendChild(drop);
    }
    return div;
  }
  
  var rainDiv;
  var balutHeader = document.querySelector('.header-balut');
  balutHeader.addEventListener('mouseover', () => {
    rainDiv = createRain();
    document.body.appendChild(rainDiv);
    toggleAudio('kiss', true);
  });
  balutHeader.addEventListener('mouseout', () => {
    rainDiv.className = 'rain';
    rainDiv.addEventListener('transitionend', () => rainDiv.remove());
    toggleAudio('kiss', false);
  });
  
  handleGifOpacity('.header-isaw', '.isaw-gif', 'bibo');
  handleGifOpacity('.header-isaw', '.right-gif', 'bibo');

  function randomizeKwekwekColors() {
    var kwekwekHeader = document.querySelector('.header-kwekwek span');
    kwekwekHeader.addEventListener('mouseover', () => {
      var text = kwekwekHeader.textContent;
      var colorfulText = '';
      for (var char of text) {
        var randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
        colorfulText += `<span style="color:${randomColor}">${char}</span>`;
      }
      kwekwekHeader.innerHTML = colorfulText;
    });
  }
  
  randomizeKwekwekColors();
  
  
  
  
  
  
  
  
  