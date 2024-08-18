// const openModal = document.querySelector('.openModal');
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

// var el = document.querySelector('.control');
// el.onclick = function() {
//     window.onload();
// };
// closeModal.addEventListener('click', () => {
//     modal.close();
// });

// const closeModal = event => {
//   const target = event.target;

//   if (
//     target === modalElem ||
//     (btnClose && target.closest(btnClose)) ||
//     event.code === 'Escape'
//     ) {

//     modalElem.style.opacity = 0;

//     setTimeout(() => {
//       modalElem.style.visibility = 'hidden';
//     }, time);

//     window.removeEventListener('keydown', closeModal);
//   }
// }

// const closeModal = event =>{
//   const target = removeEventListener.target;
// };


play_file = function(){ 
      // audio.src = rand_audio;
      audio.load();
      audio.play();
      var context = new AudioContext();
      var src = context.createMediaElementSource(audio);   //////////////////
      var analyser = context.createAnalyser();
      var canvas = document.getElementById("canvas");
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight/2;
      var ctx = canvas.getContext("2d");  
      src.connect(analyser);
      analyser.connect(context.destination);
      analyser.fftSize = 256;

    //   var bufferLength = analyser.frequencyBinCount;
      var bufferLength = analyser.frequencyBinCount * 5;
      // console.log(bufferLength); 
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
        // ctx.fillStyle = "8CAA16";
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
      audio.play();
      renderFrame();
};

closeModal.addEventListener('click', () => {

  var roundCounterValue = Counter.getCounterFromCookie('roundCounter');
  var correctAnswerCounterValue = Counter.getCounterFromCookie('correctAnswerCounter');
 
  roundCounterValue++;
  console.log("roundCounterValue:" + roundCounterValue );
  // console.log("correctAnswerCounterValue:" + correctAnswerCounterValue);
  const roundCounter = new RoundCounter(roundCounterValue);
  roundCounter.saveToCookie('roundCounter');

  if(roundCounterValue >= 5){
    if(correctAnswerCounterValue >= 4){
      // console.log("green text");
      // document.getElementById('add1').classList.add('visible')
      add1.classList.add('visible');
    }else if(correctAnswerCounterValue = 3){
      // console.log("blue text");
      // document.getElementById('add2').classList.add('visible')
      add2.classList.add('visible');
    }else if(correctAnswerCounterValue = 2){
      // console.log("black text");
      // document.getElementById('add3').classList.add('visible')
      add3.classList.add('visible');
    }else{
      // console.log("rad text");
      // document.getElementById('add4').classList.add('visible')
      add4.classList.add('visible');
    };
    roundCounterValue = 0;
    const roundCounter = new RoundCounter(roundCounterValue);
    roundCounter.saveToCookie('roundCounter');

    correctAnswerCounterValue = 0;
    const correctAnswerCounter = new CorrectAnswerCounter(correctAnswerCounterValue);
    correctAnswerCounter.saveToCookie('correctAnswerCounter');
    modal.close();

  }else{
    console.log("oooo")
  var audios = new Array('music/mono/1.mp3','music/mono/2.mp3','music/duet/11.mp3','music/duet/12.mp3','music/duet/13.mp3','music/trio/111.mp3','music/trio/112.mp3','music/trio/113.mp3');
  var rand_audio_index = Math.round(Math.random()*(audios.length-1));
  rand_audio = audios[rand_audio_index]; 
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
    beginningOfThePlay(); ///////////////////////?
////////////
    console.log(check1.checked);
    console.log(check2.checked);
    console.log(check3.checked);
    console.log("real:" + audio.src.includes('trio'));
    console.log("real:" + audio.src.includes('duet'));
    console.log("real:" + audio.src.includes('mono'));
   

    setTimeout(() => {
      modal.showModal(); 
      modal.classList.add('dialog-scale');
      modal.scrollIntoView();      
    }, "1500");
});  


///1
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
            console.log("теперь 1"+check1.checked);
            console.log("теперь 2"+check2.checked);
            console.log("теперь 3"+check3.checked);

};

