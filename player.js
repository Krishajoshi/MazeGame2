class Player {
    constructor() {
        this.index = null;
        this.name = null;
        this.confidence = 0;
         this.playerY=250;
        this.playerX=250;
    }

    getCount() {
        var playerCountRef = database.ref('playerCount');
        playerCountRef.on("value",function(data){
            playerCount = data.val();
        })
    }

    updateCount(count) {
        database.ref('/').update({
            playerCount: count
        });
    }

    update() {
        var playerIndex = "players/player" + this.index;
        database.ref(playerIndex).set({
            name: this.name,
           playerY:this.playerY,
           playerX:this.playerX,
            confidence:this.confidence
        });
    }

    static getPlayerInfo() {
        var playerInfoRef = database.ref('players');
        playerInfoRef.on("value", (data) => {
            allPlayers = data.val();
        })
    }

    playerDied(){
        var playerInfoRef = database.ref('players');
        playerInfoRef.remove();
    }
    
}
