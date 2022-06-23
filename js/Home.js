class Home{
  constructor() {
    //creating elements for home page
    this.startButton = createButton("Start");
    this.titleImage = createImg("./assets/images/Title.png", "game title");
    this.helpButton = createButton("Help");
    this.continueButton = createButton("Continue...");
    this.okButton = createButton("OK");
    this.intro = createElement("h2");
    this.control = createElement("h3");

   
  }
  handleMousePressed(){

    //adding the functions to be executed after pressin' the startButton.
    this.startButton.mousePressed(() => {
      var story = `The Tesseract was in control of The Avengers. But, one day, it suddenly disappeared...
       <br>Thor thought that none other than Loki could have taken it.
        <br>Thor went to Asgard to check... He found that Loki had built a huge army out of Tesseract,
        <br>and was so powerful now, that it was nearly impossible to defeat him.
        <br>Thor told this to his team. Everyone got scared and denied to fight with him.
        <br>When the playboy came up...
        <br> Tony Stark was ready to defeat him, and went alone to fight with him.
        <br> While going to Asgard, he finds a mysterious cave at the border of
        <br>   Manhattan, he went there, and the game begins...`
        this.intro.html(story);
        this.helpButton.hide();
        this.startButton.hide();
        this.titleImage.hide();
        this.continueButton.position(width/2 - 100, 500);
    });    
    //adding the functions to be executed after pressin' the helpButton.
    this.helpButton.mousePressed(() => {

    
        var help = `Right and Left Arrow keys or ‘A’,’D’ keys to move Iron man.
         <br>Up Arrow key or ‘W’ key to make him fly.
         <br>Press Spacebar to shoot laser beams.
         <br>Hold Spacebar to fire a supercharger(Supercharger can only be fired when we kill 5 enemies).
         <br>‘M’ key to fire Missiles(Missiles can only be fired when we kill 10 enemies).
         <br>
         <br>
         <br>Note: If an enemy dies, he leaves behind a power-up, such as First Aid kit,
         <br>Ammunation, shield,etc. We can collect these by pressing the Down Arrow key or the ‘S’ key.
         <br>But, when Loki dies, he leaves behind the Tesseract, which we have to collect…`
        this.control.html(help);
        this.startButton.hide();
        this.helpButton.hide();
        this.titleImage.hide();
        this.okButton.position(width/2 - 100, 500);
    });


    //adding the functions to be executed after pressin' the continueButton.
    this.continueButton.mousePressed(() => {
        this.continueButton.hide();
        this.intro.hide();
        game.display();    
        gameState = gameState + 1;
  });

     //adding the functions to be executed after pressin' the okButton.
     this.okButton.mousePressed(() => {
        this.okButton.hide();
        this.control.hide();
  });
  
  }
 
  //setting the positions of the elements mentioned above^^^
  setElementsPosition(){
     this.startButton.position(width/2 - 100, height/2 + 100);
     this.helpButton.position(width/2 - 100, height/2 + 175);
     this.intro.position(20, 120);
     this.control.position(20, 0);
     this.titleImage.position(width/2 - 250, 10);
  }

  //setting the the style, font, etc. of the elements^^^ 
  setElementsStyle(){
     this.startButton.class("customButton");
     this.helpButton.class("customButton");
     this.continueButton.class("customButton");
     this.okButton.class("customButton");
     this.intro.class("greeting");
     this.control.class("greeting");
     this.titleImage.class("gameTitle")
     
  }
 
  //mentioning the functions so that they get recognition...  
  display(){
    this.handleMousePressed();
    this.setElementsPosition();
    this.setElementsStyle();
  }

  

}