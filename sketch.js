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

    button2 = createButton("music");
    button2.mousePressed(togglePlaying2);

    // button3 = createButton("attention");
    // button3.mousePressed(togglePlaying3);

    jumpButton = createButton("jump");
    jumpButton.mousePressed(togglePlaying4);
    music = 1;
 
    amp = new p5.Amplitude();
}

// function togglePlaying1(){
//     if(music === 1){
//         if(!musicFile.isPlaying()){
//             // rB=musicFile.reverseBuffer();
//             musicFile.setVolume(0.5);
//             musicFile.rate(1);
//             musicFile.play();
//             button.html('멈춘다');
//         }else{
//             musicFile.stop();
//             button.html('노래시작!');
//         }
//     }
//     if(music === 2){
//         if(!musicFile2.isPlaying())
//         //rB=musicFile.reverseBuffer();
//         // musicFile2.jump(200);
//         musicFile2.setVolume(0.5);
//         musicFile2.rate(1);
//         musicFile2.play();
//         button.html('pause');
//     }else{
//         musicFile2.stop();
//         button.html('노래 스타트');
//     }
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
//     if(music === 1){
//         music = 2;
//         button2.html('attenTION~');
//         musicFile.stop();
//         button.html('노래시작!');
//     }
//     if(music === 2){
//         music = 1;
//         button2.html('Cookieeee');
//         musicFile2.stop();
//         button.html('노래 스타트');

function togglePlaying2(){
    if(music === 1){
        music = 2;
        button2.html('attention');
    }else{
        music = 1;
        button2.html('cookieee');
    }

    }


// function togglePlaying3(){
//     if(music === 1){
//         button3.html('attention');
//         }
//     }



function togglePlaying4(){
    if(music === 1){
        button4.html('jump');
    }
}

function loadMusic(){
    console.log("It's Working!!!!!");
}

function draw(){
        console.log(amp.getLevel(), musicFile.duration());
    
        fill(255,0,220);
        ellipse(musicFile.currentTime()*20,480-amp.getLevel()*1000,20,20);
}



// function togglePlaying1(){
//     if(music === 1){
//         if(!musicFile.isPlaying()){
//             // rB=musicFile.reverseBuffer();
//             musicFile.setVolume(0.5);
//             musicFile.rate(1);
//             musicFile.play();
//             button.html('멈춘다');
//         }else{
//             musicFile.stop();
//             button.html('노래시작!');
//         }
//     }
//     if(music === 2){
//         if(!musicFile2.isPlaying())
//         //rB=musicFile.reverseBuffer();
//         // musicFile2.jump(200);
//         musicFile2.setVolume(0.5);
//         musicFile2.rate(1);
//         musicFile2.play();
//         button.html('pause');
//     }else{
//         musicFile2.stop();
//         button.html('노래 스타트');
//     }
// } 

// function togglePlaying2(){
//     if(music === 1){
//         music = 2;
//         button2.html('attenTION~');
//         musicFile.stop();
//         button.html('노래시작!');
//     }
//     if(music === 2){
//         music = 1;
//         button2.html('Cookieeee');
//         musicFile2.stop();
//         button.html('노래 스타트');
//     }
// }

//  function loadMusic()
//  {
//     console.log("It's Working!!!!!");
//  }

//  function draw(){
//     console.log(amp.getLevel(), musicFile.duration());

//     fill(255,0,220);
//     ellipse(musicFile.currentTime()*20,480-amp.getLevel()*1000,20,20);

//     if(music === 1){
//         if(!musicFile.isPlaying()){
//             // rB=musicFile.reverseBuffer();
//             // musicFile.setVolume(0.5);
//             // musicFile.rate(1);
//             // musicFile.play();
//             button.html('멈춘다');
//         }else{
//             // musicFile.stop();
//             button.html('노래시작!');
//         }
//     }
//     if(music === 2){
//         if(!musicFile2.isPlaying())
//         //rB=musicFile.reverseBuffer();
//         // musicFile2.jump(200);
//         // musicFile2.setVolume(0.5);
//         // musicFile2.rate(1);
//         // musicFile2.play();
//         button.html('pause');
//         }else{
//     //     musicFile2.stop();
//         button.html('노래 스타트');
//     }
//  }
