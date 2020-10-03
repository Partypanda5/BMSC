var audio, audio2, audio3, currentTime, currentTime2, currentTime3;

var playButton = document.getElementById("playPause");
var fastForwardButton = document.getElementById("fastForward");
var rewindButton = document.getElementById("rewind");

playButton.addEventListener('click', playPause);
// fastForwardButton.addEventListener('click', fastForwardAudio);
// rewindButton.addEventListener('click', rewindAudio);

audio = new Audio();
audio.src = "../assets/sound/BrettBMSCreading.mp3";
audio.loop = false;

audio2 = new Audio();
audio2.src = "../assets/sound/Background.mp3"; 
audio2.loop = false;

audio3 = new Audio();
audio3.src = "../assets/sound/ZakesRecording.mp3";
audio3.loop = false;

audio.volume = 0.5;
audio2.volume = 0.1;
audio3.volume = 0.1;

console.log(audio.volume);
console.log(audio2.volume);
console.log(audio3.volume);

$("#appearance1").roundSlider({
    radius: 80,
    width: 8,
    handleSize: "+8",
    handleShape: "dot",
    sliderType: "min-range",
    value: 50,
    drag: function (event, ui) {
        //console.log(this.getValue());
        volume = this.getValue();
        setvolume();
    },
    slide: function(event, ui) { 
      setvolume();
    }
});

$("#appearance2").roundSlider({
    radius: 80,
    width: 8,
    handleSize: "+8",
    handleShape: "dot",
    sliderType: "min-range",
    value: 18,
    drag: function (event, ui) {
        //console.log(this.getValue());
        volume = this.getValue();
        setvolume2();
    },
    slide: function(event, ui) { 
      setvolume2();
    }
});

$("#appearance3").roundSlider({
    radius: 80,
    width: 8,
    handleSize: "+8",
    handleShape: "dot",
    sliderType: "min-range",
    value: 18,
    drag: function (event, ui) {
        //console.log(this.getValue());
        volume = this.getValue();
        setvolume3();
    },
    slide: function(event, ui) { 
      setvolume3();
    }
});


function setvolume ()
{
    audio.volume = volume / 100;
    console.log(audio.volume);
}

function setvolume2 ()
{
    audio2.volume = volume / 100;
    console.log(audio2.volume);
}

function setvolume3 ()
{
    audio3.volume = volume / 100;
    console.log(audio3.volume);
}

function playPause ()
{
    if (audio.paused && audio2.paused && audio3.paused)
    {
        audio.play();
        audio2.play();
        audio3.play();
        playButton.src = "assets/img/pause.png";
    }else
    {
        audio.pause();
        audio2.pause();
        audio3.pause();
        playButton.src = "assets/img/play.png";
    }
}

// function fastForwardAudio ()
// {
//     var currentTime = audio.currentTime;
//     var currentTime2 = audio2.currentTime;
//     var currentTime3 = audio3.currentTime;

//     audio.currentTime = (currentTime >= 3.0) ? currentTime + 3.0 : 0;
//     audio2.currentTime2 = (currentTime2 >= 3.0) ? currentTime2 + 3.0 : 0;
//     audio3.currentTime3 = (currentTime3 >= 3.0) ? currentTime3 + 3.0 : 0;

//     console.log(currentTime, currentTime2, currentTime3);
// }

// function rewindAudio ()
// {
//     var currentTime = audio.currentTime;
//     var currentTime2 = audio2.currentTime;
//     var currentTime3 = audio3.currentTime;

//     audio.currentTime = (currentTime >= 3.0) ? currentTime - 3.0 : 0;
//     audio2.currentTime2 = (currentTime2 >= 3.0) ? currentTime2 - 3.0 : 0;
//     audio3.currentTime3 = (currentTime3 >= 3.0) ? currentTime3 - 3.0 : 0;
// }