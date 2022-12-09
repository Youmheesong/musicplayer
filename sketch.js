let musicFile;
let musicFile2;
let button;
let button2;
let button3;
let button4;
var jumpButton;
var t=0;
let amp;
var rB;
let music;

function setup()
{
    createCanvas( 640, 480 );
    soundFormats('mp3', 'ogg');
    musicFile =loadSound('music', loadMusic);
    musicFile2 = loadSound('music2', loadMusic);

    button = createButton("play");
    button.mousePressed(togglePlaying1);

    button2 = createButton("Cookieee");
    button2.mousePressed(togglePlaying2);
    music = 1;

    amp = new p5.Amplitude();
}

function togglePlaying1(){
    if(music === 1){
        if(!musicFile.isPlaying()){
            // rB=musicFile.reverseBuffer();
            musicFile.setVolume(0.5);
            musicFile.rate(1);
            musicFile.play();
            button.html('멈춘다');
        }else{
            musicFile.stop();
            button.html('노래시작!');
        }
    }
    if(music === 2){
        if(!musicFile2.isPlaying())
        //rB=musicFile.reverseBuffer();
        musicFile2.jump(200);
        musicFile2.setVolume(0.5);
        musicFile.rate(1);
        musicFile2.play();
        button.html('스탑');
    }else{
        musicFile2.stop();
        button.html('노래 스타트');
    }
}

function togglePlaying2(){
    if(music === 1){
        music = 2;
        button2.html('attenTION~');
    }else{
        music = 1;
        button2.html('Cookieeee');
    }
    console.log(노래나옴);
}

 function loadMusic()
 {
    console.log("It's Working!!!!!");
 }

 function draw(){
    console.log(amp.getLevel(), musicFile.duration());

    fill(255,0,220);
    ellipse(musicFile.currentTime()*20,480-amp.getLevel()*1000,20,20);
    
 }
