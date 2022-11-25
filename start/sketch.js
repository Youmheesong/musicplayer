let mySound;
function setup(){
    soundFormats('mp3','ogg');
    mySound = loadSound('Pink Venom.mp3');
    mySound.play();
}