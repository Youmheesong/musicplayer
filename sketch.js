// let mySound;
// function setup(){
//     soundFormats('mp3','ogg');
//     mySound = loadSound('Pink Venom');
//     mySound.play();
// }

// function loadmusic(){
//     mySound.play();
//     }

// function draw(){
//     fill(255,0,0);
//     ellipse(50,50,100,100);
// }

var song;
var button;

function setup(){
    createCanvas(200,200);
    song = loadSound('Pink Venom.mp3',loaded);
    button.mousePressed(togglePlaying);
    background(51);
}

function togglePlaying(){
    if(!song.isPlaying()){
        song.play();
        song.setVolume(0.3);
        button.html('pause');
    }else{
        song.stop();
        button.html('play');
    }

function loaded(){
    console.log('loaded');
}