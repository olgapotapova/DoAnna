const openModal = document.querySelector('.openModal');
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
var counter;
var roundСounter;
var correctAnswerCounter;
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
      audio.src = rand_audio;
      audio.load();
      audio.play();
      var context = new AudioContext();
      var src = context.createMediaElementSource(audio);
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
      console.log(bufferLength); 
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
  if(roundСounter >= 5){
    if(correctAnswerCounter == 5){
      add1.classList.add('visible');
    }else if(correctAnswerCounter == 4){
      add2.classList.add('visible');
    }else if(correctAnswerCounter == 3){
      add3.classList.add('visible');
    }else{
      add4.classList.add('visible');
    }
    correctAnswerCounter = 0;

    modal.close();
  }else{
  if ((check3.checked && audio.src.includes('mono')) || (check1.checked && audio.src.includes('duet')) || (check2.checked && audio.src.includes('trio')) ) {  
      console.log(audio.src);
      correctAnswerCounter++;
      console.log(correctAnswerCounter);
      console.log('ok');
      var audios = new Array('music/mono/1.mp3','music/mono/2.mp3','music/duet/11.mp3','music/duet/12.mp3','music/duet/13.mp3','music/trio/111.mp3','music/trio/112.mp3','music/trio/113.mp3');
      var rand_audio_index = Math.round(Math.random()*(audios.length-1));
      rand_audio = audios[rand_audio_index];
      beginningOfThePlay(); 

    }else{
      var audios = new Array('music/mono/1.mp3','music/mono/2.mp3','music/duet/11.mp3','music/duet/12.mp3','music/duet/13.mp3','music/trio/111.mp3','music/trio/112.mp3','music/trio/113.mp3');
      var rand_audio_index = Math.round(Math.random()*(audios.length-1));
      rand_audio = audios[rand_audio_index];
      beginningOfThePlay();
    };
	}
});

closeX.addEventListener('click', () => {
  modal.close();
});

openModal.addEventListener('click', () => {
    add1.classList.remove('visible');
    add2.classList.remove('visible');
    add3.classList.remove('visible');
    add4.classList.remove('visible');
    roundСounter = 0; 
    correctAnswerCounter = 0;

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
  roundСounter ++;
  play_file();
}

repeat.addEventListener('click', () => {
  setTimeout(() => {
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
