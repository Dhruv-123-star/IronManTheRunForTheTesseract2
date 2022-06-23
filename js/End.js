class End {
    constructor() {

     
    }

    finish () {
      gameOver = createSprite(width/2, height/2, 20, 20);
      gameOver.addImage('over',gameOverImg);
      gameOver.scale = 2;

      iron.changeImage(ironDead)

      if(keyDown('LEFT_ARROW') || keyDown('A')){
        iron.x = iron.x-0;
       
      }

     if(keyDown('RIGHT_ARROW') || keyDown('D')){
         iron.x = iron.x+0;
        
      }

      if(keyDown('UP_ARROW') || keyDown('W') && keyDown('LEFT_ARROW') || keyDown('A')) {
         iron.x = iron.y+0;
        
      }

      if(keyDown('UP_ARROW') || keyDown('W') && keyDown('RIGHT_ARROW') || keyDown('D')) {
        iron.x = iron.y+0;
        
     }
    }

    //getting recognition for the functions
    display() {
      this.finish();
    }
}