let musicFile;
let musicFile2;
let button;
let button2;
let volumeUpButton;
let volumeDownButton;
let playBackSpeedUpButton;
let playBackSpeedDownButton;
let jumpForwardButton;
let jumpBackButton;
let amp;
let music;
let volume1;
let volume2;
let rate1;
let rate2;
let delay;




function preload() {
    soundFormats('mp3', 'ogg');
    musicFile = loadSound('music.mp3');
    musicFile2 = loadSound('music2.mp3');
    amp = new p5.Amplitude();

}

function setup()
{
    createCanvas( 640, 480 );
    background(0);

    fill(204, 101, 192, 127);
    stroke(127, 63, 120);
    
    delay = new p5.Delay();
    delay.process(musicFile, 0.12, 0.7, 2300);
    delay.process(musicFile2, 0.12, 0.7, 2300);
    delay.setType('pingPong'); 

    button = createButton("play");
    button.mousePressed(togglePlaying1);
    button.position(360,440);

    button2 = createButton("music");
    button2.mousePressed(togglePlaying2);
    button2.position(250,440);

    volumeUpButton = createButton("volume up");
    volumeUpButton.mousePressed(volumeUp);
    volumeUpButton.position(5,490);

    volumeDownButton = createButton("volume down");
    volumeDownButton.mousePressed(volumeDown);
    volumeDownButton.position(5,515);

    playBackSpeedUpButton = createButton("playback speed up");
    playBackSpeedUpButton.mousePressed(playBackSpeedUp);
    playBackSpeedUpButton.position(270,490);

    playBackSpeedDownButton = createButton("playback speed down");
    playBackSpeedDownButton.mousePressed(playBackSpeedDown);
    playBackSpeedDownButton.position(260,515);

    jumpForwardButton = createButton("jump forward");
    jumpForwardButton.mousePressed(jumpForward);
    jumpForwardButton.position(555,490);

    jumpBackButton = createButton("jump backward");
    jumpBackButton.mousePressed(jumpBackward);
    jumpBackButton.position(543,515);
    music = 1;

    rate1 = 1.0;
    rate2 = 1.0;
    musicFile.rate(rate1);
    musicFile2.rate(rate2);
    

    volume1 = 0.2;
    volume2 = 0.2;
    musicFile.setVolume(volume1);
    musicFile2.setVolume(volume2);

    amp = new p5.Amplitude();

    
 

}

function volumeUp() {
    console.log("inside volumeUp");

    if (music === 1) {
        volume1 = volume1 + 0.2 < 1.0 ? volume1 + 0.2 : 1.0;
        musicFile.setVolume(volume1);
    }
    if (music === 2) {
        volume2 = volume2 + 0.2 < 1.0 ? volume2 + 0.2 : 1.0;
        musicFile2.setVolume(volume2);
    }
}

function volumeDown() {
    if (music === 1) {
        volume1 = volume1 - 0.2 > 0.0 ? volume1 - 0.2 : 0.0;
        musicFile.setVolume(volume1);
    }
    if (music === 2) {
        volume2 = volume2 - 0.2 > 0.0 ? volume2 - 0.2 : 0.0;
        musicFile2.setVolume(volume2);
    }
}
function playBackSpeedUp() {
    if (music === 1) {
        rate1 = rate1 + 0.5;
        musicFile.rate(rate1);
    }
    if (music === 2) {
        rate2 = rate2 + 0.5;
        musicFile2.rate(rate2);
    }
}

function playBackSpeedDown() {
    if (music === 1) {
        rate1 = rate1 - 0.5 > 0.0 ? rate1 - 0.5 : 0.0;
        musicFile.rate(rate1);
    }
    if (music === 2) {
        rate2 = rate2 - 0.5 > 0.0 ? rate2 - 0.5 : 0.0;
        musicFile2.rate(rate2);
    }
}
    
function jumpForward() {
    if (music === 1) {
        var totalTime = musicFile.duration();
        var current = musicFile.currentTime();
        musicFile.jump(totalTime < current + 10 ? totalTime : current + 10);
    }  
    if (music === 2) {
        var totalTime = musicFile2.duration();
        var current = musicFile2.currentTime();
        musicFile2.jump(totalTime < current + 10 ? totalTime : current + 10);
    }
}

function jumpBackward() {
    if (music === 1) {
        var totalTime = musicFile.duration();
        var current = musicFile.currentTime();
        musicFile.jump(0 < current - 10 ? current - 10 : 0);
    }
    if (music === 2) {
        var totalTime = musicFile2.duration();
        var current = musicFile2.currentTime();
        musicFile2.jump(0 < current - 10 ? current - 10 : 0);
    }
}


function togglePlaying1(){
    if(music === 1){
        if(!musicFile.isPlaying()){
            musicFile.play();
            button.html('pause');
        }else{
            musicFile.stop();
            button.html('play');
        }
    }
    if(music === 2){
        if(!musicFile2.isPlaying()){
            musicFile2.play();
            button.html('pause');
        }else{
            musicFile2.stop();
            button.html('play');
        }
    }
}

function togglePlaying2(){
    if(music === 1){
        music = 2;
        button2.html('attention');
    }else{
        music = 1;
        button2.html('cookieee');
    }

}

function loadMusic(){
    console.log("It's Working!!!!!");
}



function draw() {
    background(160);

    let level = amp.getLevel();

    let levelHeight = map(level, 0, 0.1, 0, height);
    fill(100, 250, 100);
    rect(0, height, width, -levelHeight);

    let filterFreq = map(mouseX, 0, width, 60, 15000);
    filterFreq = constrain(filterFreq, 60, 15000);
    let filterRes = map(mouseY, 0, height, 3, 0.01);
    filterRes = constrain(filterRes, 0.01, 3);
    delay.filter(filterFreq, filterRes);
    let delTime = map(mouseY, 0, width, 0.2, 0.01);
    delTime = constrain(delTime, 0.01, 0.2);
    delay.delayTime(delTime);

textSize(20);
text("Move the mouse. The sound will change.",170, 240);
    fill(255, 60, 80);
rect(210, 417, 220, 50);


    // fill(255, 60, 80);
    // text('>>>>>>>>', 460, 180);

    // fill(255);
    // text('shi', x, 290);

}


