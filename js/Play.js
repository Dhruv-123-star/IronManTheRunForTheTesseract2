class Play {
    constructor() {

     
    }

    handleFunctionality () {
      if(life === 0 ) {
        gameState = END;
      }

      if(keyDown('LEFT_ARROW') || keyDown('A')){
        iron.x = iron.x-5;
        iron.changeImage('walk', ironWalkLeft);
      }

     if(keyDown('RIGHT_ARROW') || keyDown('D')){
         iron.x = iron.x+5;
         iron.changeImage('walk', ironWalk);
      }

      if(keyDown('UP_ARROW') || keyDown('W') && keyDown('LEFT_ARROW') || keyDown('A')) {
         iron.x = iron.y+5;
         iron.changeImage('walk', ironFlyLeft);
      }

      if(keyDown('UP_ARROW') || keyDown('W') && keyDown('RIGHT_ARROW') || keyDown('D')) {
        iron.x = iron.y+5;
        iron.changeImage('walk', ironFly);
     }

     if(keyDown('SPACE') && frameCount % 60){
      bullet.create();
      ammo = ammo - 1;
     }

     if(enemy.x === iron.x){
      enemyBullet.create();
     }

     iron.y = iron.y-8;


    }

    //getting recognition for the functions
    display() {
      this.handleFunctionality();
      
    }
}