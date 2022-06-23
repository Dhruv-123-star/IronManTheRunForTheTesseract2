//declaring the variables
var home, enemy, play, end;
var iron, ironStand, ironStandLeft, ironFly, ironFlyLeft, ironWalk, ironWalkLeft;
var ironWin, enemyStand,enemyStandRight, bullet, enemyBullet, gameOver;
var gameOverImg, bgImg, ironDead, ironFight, ironFightLeft, ground, formBgImg;
var bgSound;
var START = 0;
var PLAY = 1;
var END = 2;
var enemyLife = 200;
var ammo = 200;
var life = 200;
var gameState = START;

//loading the images, animations, sounds, etc.
function preload(){
   bgImg = loadImage("./assets/images/Background0.png");
   formBgImg = loadImage("./assets/images/FormBg.png");
   bgSound = loadSound("./assets/sounds/Action-Rock.mp3");
   ironStand = loadImage("./assets/images/IronStand0.png");
   ironWalkLeft = loadImage("./assets/images/IronWalkLeft1.png");
   enemyStand = loadImage("./assets/images/EnemyStandLeft.png");
   gameOverImg = loadImage("./assets/images/gameover.png");
   ironDead = loadImage("./assets/images/IronDead0.png");
  
}

function setup(){
    createCanvas(windowWidth, windowHeight);
    
    //creating the class objects
    end = new End();
    home = new Home();
    game = new Game();
    play = new Play();
    
    
    
    
    
}
function draw(){
    background(formBgImg);

    //calling the constructors
    home.display();   
   

    console.log(mouseX, mouseY);

    drawSprites();
    
}