var noteGroup; 
var note, totalnotes; 
var noteImg1, noteImg2; 
var score, timelapsed; 
var keyF, keyG, keyJ, keyK;
var keyFImgNorm, keyGImgNorm, keyJImgNorm, keyKImgNorm;
var keyFImgGreen, keyGImgGreen, keyJImgGreen, keyKImgGreen;
var keyFImgRed, keyGImgRed, keyJImgRed, keyKImgRed; 
let mySound; 
var percentage; 
var openingBackgroundImg; 
var endingBackgroundImg; 
var pauseBackgrondImg; 
var instructBackgroundImg; 
var songBackgroundImg; 
var myFont; 

var TITLE = 0; 
var INSTRUCTIONS = 2; 
var PLAY =3; 
var PAUSE = 4; 
var END=5; 
var gameState = 0; 

console.log("hi");


function preload(){
  
    keyFImgNorm = loadImage("images/keyFImgNorm.png");
    keyGImgNorm = loadImage("images/keyGImgNorm.png");
    keyJImgNorm = loadImage("images/keyJImgNorm.png");
    keyKImgNorm = loadImage("images/keyKImgNorm.png");

    keyFImgGreen = loadImage("images/keyFImgSuc.png");
    keyGImgGreen = loadImage("images/keyGImgSuc.png");
    keyJImgGreen = loadImage("images/keyJImgSuc.png");
    keyKImgGreen = loadImage("images/keyKImgSuc.png");

    keyFImgRed = loadImage("images/keyFImgFail.png");
    keyGImgRed = loadImage("images/keyGImgFail.png");
    keyJImgRed = loadImage("images/keyJImgFail.png");
    keyKImgRed = loadImage("images/keyKImgFail.png");

    openingBackgroundImg = loadImage("images/Opening .png");
    endingBackgroundImg = loadImage("images/Ending.png");
    pauseBackgrondImg = loadImage("images/Pause.png");
    instructBackgroundImg = loadImage("images/Instructions.png");

    //soundFormats('mp3');
    //mySound = loadSound('sunflower.mp3')
    
    myFont = loadFont("DubaiSummer.otf");
    noteImg1 = loadImage("images/noteImg1.png");
    noteImg2 = loadImage("images/noteImg2.png");
    
}

function setup() {

    keyK = createSprite(306,316,20,20);
    keyK.addImage(keyKImgNorm);
    keyK.scale = 0.25;

    keyJ = createSprite(243,315,20,20);
    keyJ.addImage(keyJImgNorm);
    keyJ.scale = 0.25;

    keyG = createSprite(171,315,20,20);
    keyG.addImage(keyGImgNorm);
    keyG.scale = 0.25;

    keyF = createSprite(99,315,20,20);
    keyF.addImage(keyFImgNorm);
    keyF.scale = 0.25; 

    noteGroup = new Group();

    score = 0; 
    totalnotes =0; 
    timelapsed = 0;
}

function draw() {
    if(gameState==0)
    {
        background(openingBackgroundImg);

        if(keyDown("1"))
        {
            gameState=2; 
        }
    }
    else if(gameState==2)
    {
        background(instructBackgroundImg);
        if(keyDown("2"))
        {
            gameState=3; 
        }

    }
    else if(gameState==3)
    {
        background("black");

        textSize(16);
        fill(20, 220, 255);
        text("Score = " + score,275,25);
        text("Press O to pause",250,50);
        spawnNotes();
        
        timelapsed = timelapsed + Math.round(getFrameRate()/60);

        if(noteGroup.isTouching(keyF) && keyDown("f")){
            if(noteGroup.isTouching(keyF)){
            keyF.addImage(keyFImgGreen);
            keyF.scale = 0.25; 
            }
            note.destroy();
            score = score + 1;
          }
        if(noteGroup.isTouching(keyG)  && keyDown("g")){
            if(noteGroup.isTouching(keyG)){
            keyG.addImage(keyGImgGreen);
            keyG.scale = 0.25; 
            }
            note.destroy();
            score = score + 1;
          }
        if(noteGroup.isTouching(keyJ) && keyDown("j")){
            if(noteGroup.isTouching(keyJ)){
                keyJ.addImage(keyJImgGreen);
                keyJ.scale = 0.25; 
                }
                note.destroy();
                score = score + 1;
          }
        if(noteGroup.isTouching(keyK) && keyDown("k")){
            if(noteGroup.isTouching(keyK)){
            keyK.addImage(keyKImgGreen);
            keyK.scale = 0.25; 
            }
            note.destroy();
            score = score + 1;
          }
        
        if(noteGroup.isTouching(keyF) && !( keyDown("f")))
        {
            if(noteGroup.isTouching(keyF)){
            keyF.addImage(keyFImgRed);
            keyF.scale = 0.25; 
            }
            note.destroy();
        }
        if(noteGroup.isTouching(keyG) && !( keyDown("g")))
        {
            if(noteGroup.isTouching(keyG)){
            keyG.addImage(keyGImgRed);
            keyG.scale = 0.25; 
            }
            note.destroy();
        }
        if(noteGroup.isTouching(keyJ) && !( keyDown("j")))
        {
            if(noteGroup.isTouching(keyJ)){
                keyJ.addImage(keyJImgRed);
                keyJ.scale = 0.25; 
            }
            note.destroy();
        }

        if(noteGroup.isTouching(keyK) && !( keyDown("k")))
        {
            if(noteGroup.isTouching(keyK)){
            keyK.addImage(keyKImgRed);
            keyK.scale = 0.25; 
            }
           note.destroy();
        }
    
        if(keyDown("o"))
        {
            gameState = 4; 
            timelapsed = timelapsed; 
            score = score;
            totalnotes = totalnotes; 
        }
        
        if(timelapsed >1852)
        {
            gameState =5; 
        }
        drawSprites();
        //playSong();
    }
    else if(gameState==4)
    {
        background(pauseBackgrondImg);
        if(keyDown("p"))
        {
            gameState=3;
        }
        if(keyDown("e"))
        {
            gameState=5; 
        }
    }
    else if(gameState==5)
    {
        background(endingBackgroundImg);
        percentage = Math.round((score/totalnotes)*100);

        if(percentage<60)
        {
            
            fill(255, 171, 165);
        }
        else if(percentage>=60)
        {
            fill(148,236,196);
        }
        textFont(myFont);
        textSize(110);
        textAlign(CENTER, CENTER);
        text(percentage+" %",200,225); 
        if(keyDown("r"))
        {
            Restart();
        }
    }

    keyF.addImage(keyFImgNorm);
    keyG.addImage(keyGImgNorm);
    keyJ.addImage(keyJImgNorm);
    keyK.addImage(keyKImgNorm);
    }

function playSong() {
    mySound.play();
  }

function Restart(){
    gameState = 3;
    noteGroup.destroyEach();
    score=0;
    timelapsed = 0; 
    keyF.addImage(keyFImgNorm);
    keyG.addImage(keyGImgNorm);
    keyJ.addImage(keyJImgNorm);
    keyK.addImage(keyKImgNorm);
  }

function spawnNotes(){
  
    if(frameCount%60 === 0){
    note= createSprite(400,60,40,10);
    //note.addImage(noteImg2);
    note.scale=0.2;
    
    totalnotes++;
    //note.x= 100; 
    c = Math.round(random(1,2));
    if(c == 1)
        note.addImage(noteImg1);
    else if(c == 2)
        note.addImage(noteImg2);
    r = Math.round(random(1,4));
    //console.log(4);
    switch(r) {
        case 1:
            note.x= 99; 
          break;
        case 2:
            note.x= 171; 
          break;
        case 3: 
            note.x= 243; 
            break;
        case 4: 
            note.x= 310; 
             break;
        default:
            note.x= 0; 
      }

      

    note.velocityY= (5 + timelapsed/100); 
    note.lifetime= 85;
      
      
    noteGroup.add(note);

    note.setCollider("circle",0,0,70);
    note.debug = true; 
    }
}

