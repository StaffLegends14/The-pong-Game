var ball;
var comp;
var player;
var compscr = 0;
var playerscr = 0;
var gameState = "serve";
function setup(){ 
    createCanvas(800, 800);
   ball = createSprite(400,400,10,10); 
 comp = createSprite(10,200,10,70);
 player = createSprite(790,200,10,70);
}
function draw(){
    background("black");
  fill("red")
    textSize(20);
    text(compscr,375,15); 
  text(playerscr,425,15);
      if (keyDown("space") && gameState === "serve") {
    serve();
    gameState = "play";
  } 
    if (gameState === "serve") {
    text("Press Space to start",330,380);
    ball.setVelocity(0,0);
  }
   if(ball.x > 800 ){
     compscr = compscr + 1;
   }
  if(ball.x < 0 ){
   playerscr++;
  }
 
       fill("red");
    if(ball.x > 800 || ball.x <0) {
   ball.x = 400;
      ball.y = 400;
  } 
   textSize(30);
   text(mouseX+","+mouseY,30,30);
  textSize(15);
  player.y = mouseY;     
  comp.y = ball.y;
  edges = createEdgeSprites();
  ball.bounceOff(edges[2]);
  ball.bounceOff(edges[3]);
  ball.bounceOff(player);
  ball.bounceOff(comp);
   if (compscr === 5 ||playerscr === 5) {
   text("Game Over",370,380);
      text("press enter to restart",350,420);
   gameState = "end";
 }
 if (gameState === "end" && keyDown(ENTER)) {
    gameState = "serve";
    playerscr = 0;
    compscr = 0;
 }
 if(gameState === "end"){
   ball.velocityX = 0;
   ball.velocityY = 0;
 }
  
 
  //reset the ball to the centre if it crosses the screen
  if(ball.x > 800 || ball.x <0) {
    reset();
    gameState = "serve";    
  }
  drawSprites();
}
function serve() {
  ball.velocityX = 3;
  ball.velocityY = 4;
}

function reset() {
  ball.x = 400;
  ball.y = 400;
  ball.velocityX = 0;
  ball.velocityY = 0;
} 