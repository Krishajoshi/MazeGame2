class Game{
    constructor(){

    }
    getState() {
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function (data) {
            gameState = data.val();
        })
        console.log("gameState is:"+gameStateRef)

    }

    update(state) {
        database.ref('/').update({
            gameState: state
        });
    }
    async start() {
            if (gameState === 0) {
                player = new Player();
                var playerCountRef = await database.ref('playerCount').once("value");
                if (playerCountRef.exists()) {
                    playerCount = playerCountRef.val();
                    player.getCount();
                }
               form = new Form()
                form.display();
                
            }
    //add players here
    mad1 = createSprite(435, 350);
    mad1.addImage(monster_img);
    mad1.scale = 0.05;
    mad2 = createSprite(290, 230);
    mad2.addImage(monster_img);
    mad2.scale = 0.05;
    mad3 = createSprite(530, 540);
    mad3.addImage(monster_img);
    mad3.scale = 0.05;
    mad4 = createSprite(490, 415);
    mad4.addImage(monster_img);
    mad4.scale = 0.05;
    mad5 = createSprite(175, 450);
    mad5.addImage(monster_img);
    mad5.scale = 0.05;
    mad6 = createSprite(600, 250);
    mad6.addImage(monster_img);
    mad6.scale = 0.05; 
    mad7 = createSprite(260, 350);
    mad7.addImage(monster_img);
    mad7.scale = 0.05;
    mad8 = createSprite(820, 150);
    mad8.addImage(monster_img);
    mad8.scale = 0.05;
    mad9 = createSprite(100, 230);
    mad9.addImage(monster_img);
    mad9.scale = 0.05;
    mad10 = createSprite(915, 470);
    mad10.addImage(monster_img);
    mad10.scale = 0.05;
    mad11 = createSprite(1035, 425);
    mad11.addImage(monster_img);
    mad11.scale = 0.05;
    mad12 = createSprite(790, 390);
    mad12.addImage(monster_img);
    mad12.scale = 0.05;
    

    cb1 = createSprite(180, 300);
    cb1.addAnimation("conf", cImg);
    cb1.scale = 0.1;
    cb2 = createSprite(400, 160);
    cb2.addAnimation("conf", cImg);
    cb2.scale = 0.1;
    cb3 = createSprite(975, 170);
    cb3.addAnimation("conf", cImg);
    cb3.scale = 0.1;
    cb4 = createSprite(915, 565);
    cb4.addAnimation("conf", cImg);
    cb4.scale = 0.1;
    cb5 = createSprite(340, 575);
    cb5.addAnimation("conf", cImg);
    cb5.scale = 0.1;
    cb6 = createSprite(750, 468);
    cb6.addAnimation("conf", cImg);
    cb6.scale = 0.1;
    cb7 = createSprite(55, 370);
    cb7.addAnimation("conf", cImg);
    cb7.scale = 0.1;
    cb8 = createSprite(520, 225);
    cb8.addAnimation("conf", cImg);
    cb8.scale = 0.1;
    cb9 = createSprite(1090, 110);
    cb9.addAnimation("conf", cImg);
    cb9.scale = 0.1;
    cb10 = createSprite(110, 70);
    cb10.addAnimation("conf", cImg);
    cb10.scale = 0.1;

    mad1Group.add(mad1);
    mad1Group.add(mad2);
    mad1Group.add(mad3);
    mad1Group.add(mad4);
    mad1Group.add(mad5);
    mad1Group.add(mad6);
    mad1Group.add(mad7);
    mad1Group.add(mad8);
    mad1Group.add(mad9);
    mad1Group.add(mad10);
    mad1Group.add(mad11);
    mad1Group.add(mad12);

    rewardGroup.add(cb1);
    rewardGroup.add(cb2);
    rewardGroup.add(cb3);
    rewardGroup.add(cb4);
    rewardGroup.add(cb5);
    rewardGroup.add(cb6);
    rewardGroup.add(cb7);
    rewardGroup.add(cb8);
    rewardGroup.add(cb9);
    rewardGroup.add(cb10);

    player1 = createSprite(200,500);
    player1.addImage("player1",player_img);
    
    player2 = createSprite(800,500);
    player2.addImage("player2", player_img2);
    players=[player1,player2];
    createWallPuzzle();
        }
    
    play(){
        
               form.hide();

                Player.getPlayerInfo();
                //fill("white");
                 text(mouseX+","+mouseY,mouseX,mouseY);
                 var x =525;
                 var y;
                 var index =0;
                 drawSprites();
                 for(var plr in allPlayers){
                    
                    
                     index = index+1;
                     y = allPlayers[plr].playerY;
                     x = allPlayers[plr].playerX;
                     
                     players[index-1].x = x;
                     players[index-1].y = y;
                      
                     
                     fill("black");
                     textSize(20);
                     text("START POSITION:",10,20)
                     text("Player 1 :" +allPlayers.player1.confidence,650,24);
                     text("Player 2 :" + allPlayers.player2.confidence, 850, 24);
     
                 
                 }
                 if(keyIsDown(UP_ARROW)&& player.index != null)
                 {
                     console.log("It worked!");
                     player.playerY = player.playerY-2;
                     player.update();
                 }
                 if(keyIsDown(DOWN_ARROW)&& player.index != null)
                 {
                     player.playerY = player.playerY+2;
                     player.update();
                 }
                 if(keyIsDown(RIGHT_ARROW)&& player.index != null)
                 {
                     player.playerX = player.playerX+2;
                     player.update();
                 }
                 if(keyIsDown(LEFT_ARROW)&& player.index != null)
                 {
                     player.playerX = player.playerX-2;
                     player.update();
                 }
                
            
               
                 if (player.index !== null)
                 {

                    for (var i = 0; i < rewardGroup.length; i++) 
      {
          if (rewardGroup.get(i).isTouching(players)) {
              //coinSound.play();
            rewardGroup.get(i).destroy();
            console.log("before:"+player.confidence);
              player.confidence =player.confidence+1;
              console.log("after:"+player.confidence);
              player.update();
              
          }
         
          
      }





                    for (var i = 0; i < mad1Group.length; i++) 
                    {
                        if (mad1Group.get(i).isTouching(players)) {
                          mad1Group.get(i).destroy();
                         
                           player.confidence =player.confidence-10;
                            
                            player.update();
                            
                        }
                      
                      }
                    
                 }
                }
                end()
                {
                    imageMode(CENTER);
                    Player.getPlayerInfo();  
                    console.log("Game Ended");
                    fill("red");
                    textAlign(CENTER);
                    textSize(50);
                }
            }

function createWallPuzzle()
{

    wall1 = createSprite(505, 250, 10,100);
    wall1.shapeColor = "pink";
     
    wall2 = createSprite(540, 200, 80, 10);
    wall2.shapeColor ="lavender ";
    wall3 = createSprite(575, 215, 10, 20);
    wall3.shapeColor = "thistle ";
    wall4 = createSprite(575, 285, 10, 20);
    wall4.shapeColor = "plum";
    wall5 = createSprite(540, 300, 80, 10);
    wall5.shapeColor = "orchid"
    wall6 = createSprite(595, 230, 50, 10);
    wall6.shapeColor = "violet";
    wall7 = createSprite(595, 270, 50, 10);
    wall7.shapeColor = "fuchsia";
    wall8 = createSprite(625, 300, 10, 70);
    wall8.shapeColor = "magenta";
    wall9 = createSprite(625, 215, 10, 40);
    wall9.shapeColor = "indigo";
    wall10 = createSprite(670, 250, 10, 100);
    wall10.shapeColor = "salmon";
    wall11= createSprite(700, 300, 70, 10);
    wall11.shapeColor = "red";
    wall12 = createSprite(645, 340, 50, 10);
    wall12.shapeColor = "orange";
    wall13 = createSprite(665, 370, 10, 50);
    wall13.shapeColor = "coral";
    wall14 = createSprite(705, 385, 10, 100);
    wall14.shapeColor = "gold";
    wall15 = createSprite(725, 340, 50, 10);
    wall15.shapeColor = "yellow";
    wall16 = createSprite(605, 390, 130, 10);
    wall16.shapeColor = "khaki";
    wall17 = createSprite(650, 430, 40, 10);
    wall17.shapeColor = "moccasin";
    wall18 = createSprite(665, 440, 10, 30);
    wall18.shapeColor = "lime";
    wall19 = createSprite(810, 540, 80, 10);
    wall19.shapeColor = "green";
    wall20 = createSprite(810, 580, 80, 10);
    wall20.shapeColor = "teal";
    wall21 = createSprite(590, 460, 10, 70);
    wall21.shapeColor = "cyan";
    wall22 = createSprite(610, 430, 40, 10);
    wall22.shapeColor = "aqua";
    wall23 = createSprite(550, 440, 10, 30);
    wall23.shapeColor = "blue";
    wall24 = createSprite(560, 490, 70, 10);
    wall24.shapeColor = "navy";
    wall25 = createSprite(535, 450, 40, 10);
    wall25.shapeColor = "tan";
    wall26 = createSprite(530, 430, 50, 10);
    wall26.shapeColor = "peru";
    wall27 = createSprite(490, 430, 50, 10);
    wall27.shapeColor = "chocolate";
    wall28 = createSprite(515, 390, 50, 10);
    wall28.shapeColor = "olive";
    wall29 = createSprite(625,175,10,50);
    wall29.shapeColor =  "orange";
    
    wallGroup.add(wall1);
    wallGroup.add(wall2);
    wallGroup.add(wall3);
    wallGroup.add(wall4);
    wallGroup.add(wall5);
    wallGroup.add(wall6);
    wallGroup.add(wall7);
    wallGroup.add(wall8);
    wallGroup.add(wall9);
    wallGroup.add(wall10);
    wallGroup.add(wall11);
    wallGroup.add(wall12);
    wallGroup.add(wall13);
    wallGroup.add(wall14);
    wallGroup.add(wall15);
    wallGroup.add(wall16);
    wallGroup.add(wall17);
    wallGroup.add(wall18);
    wallGroup.add(wall19);
    wallGroup.add(wall20);
    wallGroup.add(wall21);
    wallGroup.add(wall22);
    wallGroup.add(wall23);
    wallGroup.add(wall24);
    wallGroup.add(wall25);
    wallGroup.add(wall26);
    wallGroup.add(wall27);
    wallGroup.add(wall28);
    wallGroup.add(wall29);

}