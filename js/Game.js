class Game {
    constructor() {

     
    }

    start() {

      
      //to add the bg image
      background(bgImg);

      //creating the ground
      ground = createSprite(width/2 ,715,8000,10);
      ground.shapeColor = 'brown';


       // creating the iron man sprite
       iron = createSprite(1060,ground.y,10,10);
       iron.addImage("stand", ironStand);
       iron.scale = 0.1;
       iron.collide(ground);
 
       // creating the enemy sprite
       enemy = createSprite(400,400,10,10);
       enemy.addImage("idle", enemyStandRight);
       enemy.scale = 4;
       enemy.collide(ground);
     
      
      
    }

    play() {
      if(gameState === PLAY){
        play.display();

      } else if(gameState === END){
        end.display();
      }
    }

   

    //getting recognition for the functions
    display() {
      this.start();
      this.play();
      
    }
}