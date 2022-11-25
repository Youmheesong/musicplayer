let mySound;
function setup(){
    soundFormats('mp3','ogg');
    mySound = loadSound('Pink Venom', loadMusic);
    mySound.play();
}

function loadmusic(){
    mySound.play();
    }

function draw(){
    fill(255,0,0);
    ellipse(50,50,100,100);
}