var el = document.querySelector('.control');

el.onclick = function() {
    el.classList.toggle('pause');
    el.classList.toggle('play');
}

function soundToggle() {
    return audio.paused ? audio.play() : audio.pause();  
  };

