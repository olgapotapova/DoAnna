const showModal = document.querySelector('.showModal');
const closeModal = document.querySelector('.closeModal');
const closeX = document.querySelector('.close-x');
const repeat = document.querySelector('.repeat');
const modal = document.querySelector('.modal-game-test');
var audio = document.getElementById("audio");
var check1 = document.getElementById('check1');
var check2 = document.getElementById('check2');
var check3 = document.getElementById('check3');
var add1 = document.getElementById('add1');
var add2 = document.getElementById('add2');
var add3 = document.getElementById('add3');
var add4 = document.getElementById('add4');
var MEDIA_ELEMENT_NODES = new WeakMap();

class Counter {
  constructor(value) {
      this.value = value;
  };

  saveToCookie(cookieName) {
      document.cookie = `${cookieName}=${this.value};SameSite=Strict; expires=Sun, 31 Dec 2030 00:00:00 UTC; path=/`;
  };

  static getCounterFromCookie(cookieName) {
    // Get all cookies from current page
    const cookies = document.cookie.split('; '); 
    // Find cookie named cookieName
    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].split('=');
        if (cookie[0] === cookieName) {
            // If a cookie named cookieName is found, return its value(pre-formet as a number).
            return parseInt(cookie[1]) || 0;
        }
    };  
    // If no cookie named cookieName found, return 0 or any other default value.
    return 0;
  }
}

// Subclass RoundCounter
class RoundCounter extends Counter {
  constructor(value) {
      super(value);
  }
};

// Subclass CorrectAnswerCounter
class CorrectAnswerCounter extends Counter {
  constructor(value) {
      super(value);
  }
};

play_file = function(){ 
      audio.load();
      audio.play();

      if (MEDIA_ELEMENT_NODES.has(audio)) {
        src = MEDIA_ELEMENT_NODES.get(audio, src);
        analyser = context.createAnalyser();
        src.connect(analyser);
        analyser.connect(context.destination);        
      } else {
        context = new AudioContext();
        analyser = context.createAnalyser();
        src = context.createMediaElementSource(audio);
        MEDIA_ELEMENT_NODES.set(audio, src);
        src.connect(analyser);
        analyser.connect(context.destination);
      };

      var canvas = document.getElementById("canvas");
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight/2;
      var ctx = canvas.getContext("2d"); 

      analyser.fftSize = 256;
      var bufferLength = analyser.frequencyBinCount * 5;
      var dataArray = new Uint8Array(bufferLength);  
      var WIDTH = canvas.width;
      var HEIGHT = canvas.height;
      var barWidth = (WIDTH / bufferLength) * 4.5;
      var barHeight;
      var x = 0;
  
      function renderFrame() {
        requestAnimationFrame(renderFrame);  
        x = 0;
        analyser.getByteFrequencyData(dataArray);
        ctx.fillStyle = "#000";
        ctx.fillRect(0, 0, WIDTH, HEIGHT); 
        for (var i = 0; i < bufferLength; i++) {
          barHeight = dataArray[i];         
          var r = barHeight + (25 * (i/bufferLength));
          var g = 250 * (i/bufferLength);
          var b = 50; 
          ctx.fillStyle = "rgb(" + r + "," + g + "," + b + ")";
          ctx.fillRect(x, HEIGHT - barHeight, barWidth, barHeight); 
          x += barWidth + 1;
        }
      }     
      renderFrame();      
};

closeModal.addEventListener('click', () => {
  var roundCounterValue = Counter.getCounterFromCookie('roundCounter');
  var correctAnswerCounterValue = Counter.getCounterFromCookie('correctAnswerCounter');
  roundCounterValue++;
  console.log("roundCounterValue:" + roundCounterValue );
  const roundCounter = new RoundCounter(roundCounterValue);
  roundCounter.saveToCookie('roundCounter');

  if(roundCounterValue >= 5){
    switch (correctAnswerCounterValue){
      case 5:
        add1.classList.add('visible');
        break;
      case 4: 
        add1.classList.add('visible');
        break; 
      case 3:  
        add2.classList.add('visible');
        break; 
      case 2: 
        add3.classList.add('visible');
        break;
      case 1:
        add4.classList.add('visible');
        break;
      case 0:
        add4.classList.add('visible');
        break;
    } 
    roundCounterValue = 0;
    const roundCounter = new RoundCounter(roundCounterValue);
    roundCounter.saveToCookie('roundCounter');

    correctAnswerCounterValue = 0;
    const correctAnswerCounter = new CorrectAnswerCounter(correctAnswerCounterValue);
    correctAnswerCounter.saveToCookie('correctAnswerCounter');

    modal.close();

  }else{
  // var audios = new Array('music/mono/1.mp3','music/mono/2.mp3','music/duet/11.mp3','music/duet/12.mp3','music/duet/13.mp3','music/trio/111.mp3','music/trio/112.mp3','music/trio/113.mp3');
  // var rand_audio_index = Math.round(Math.random()*(audios.length-1));
  // rand_audio = audios[rand_audio_index]; 
  // audio.src = rand_audio;
  if ((check3.checked == true && audio.src.includes('mono')  == true) || (check2.checked  == true && audio.src.includes('duet') == true) || (check1.checked  == true && audio.src.includes('trio') == true) ) {  
    console.log("check3.checked:" + check3.checked + "audio.src.includes('mono'):" + audio.src.includes('mono') + 'check2.checked:' + check2.checked + "audio.src.includes('duet'):" + audio.src.includes('duet') + 'check1.checked:' + check1.checked + "audio.src.includes('trio'):" + audio.src.includes('trio'));
    console.log("correctAnswerCounterValue:" + correctAnswerCounterValue);
    correctAnswerCounterValue++;
    const correctAnswerCounter = new CorrectAnswerCounter(correctAnswerCounterValue);
    console.log("correctAnswerCounterValue:" + correctAnswerCounterValue);
    correctAnswerCounter.saveToCookie('correctAnswerCounter');
  }; 
    modal.close(); 
	}
});

closeX.addEventListener('click', () => {

  modal.close();
});

showModal.addEventListener('click', () => {
    add1.classList.remove('visible');
    add2.classList.remove('visible');
    add3.classList.remove('visible');
    add4.classList.remove('visible');

    var audios = new Array('music/mono/1.mp3','music/mono/2.mp3','music/duet/11.mp3','music/duet/12.mp3','music/duet/13.mp3','music/trio/111.mp3','music/trio/112.mp3','music/trio/113.mp3');
    var rand_audio_index = Math.round(Math.random()*(audios.length-1));
    rand_audio = audios[rand_audio_index];
    beginningOfThePlay(); 
    setTimeout(() => {
      modal.showModal(); 
      modal.classList.add('dialog-scale');
      modal.scrollIntoView();      
    }, "1500");
});  

function beginningOfThePlay(){
  audio.src = rand_audio;
  console.log(audio.src);

  play_file();
};

repeat.addEventListener('click', () => {
  setTimeout(() => {
    audio.src = rand_audio;
    console.log(audio.src);
    play_file();
  }, "500"); 
});

var inputs = document.getElementsByName("choice");
for (var i = 0; i < inputs.length; i++)
    inputs[i].onchange = checkboxHandler;

function checkboxHandler(e) {
    for (var i = 0; i < inputs.length; i++)
        if (inputs[i].checked && inputs[i] !== this)
            inputs[i].checked = false;
};

