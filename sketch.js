var database;
var gameState =0;
var playerCount;
var allPlayers;
var player, form,game;

var player1,player2;
var players;
var player_img;
var player_img2;
var cImg;
//obstacles variable
var monster_img;
var confidence = 0;

var allplayers;
var wallGroup,mad1Group,rewardGroup;
var mad1, mad2, mad3, mad4, mad5, mad6,mad7, mad8, mad9, mad10, mad11, mad12;
var cb1, cb2, cb3, cb4, cb5, cb6, cb7, cb8, cb9, cb10;

function preload(){
  player_img = loadImage("person1.png");
  player_img2 = loadImage("person2.png");
  monster_img = loadImage("monster1.png");
  cImg = loadAnimation("coin1.png","coin2.png", "coin3.png", "coin4.png", "coin5.png","coin6.png");
}
function setup() {
  createCanvas(displayWidth-100, displayHeight-100);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();

  wallGroup = new Group();
  mad1Group=new Group();
  rewardGroup=new Group();
}

function draw() {
  background("white");
  
   if (playerCount === 2) {
     game.update(1);
   }
   if (gameState === 1) {
     clear(); 
     game.play();
   }
   if (gameState === 2) {
    
     game.end();
   }
}
