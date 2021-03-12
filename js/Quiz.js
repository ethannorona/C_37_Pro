class Quiz{
    constructor(){
        this.p1;
        this.p2;
        this.p3;
        this.p4;
    
    }

    getState(){
        var gameStateRef  = database.ref('gameState');
        gameStateRef.on("value",function(data){
           gameState = data.val();
        })
    }

    update(state){
        database.ref('/').update({
            gameState: state
            });
    }

    async start(){
        if(gameState === 0){
           contestant = new Contestant();
           var contestantCountRef = await database.ref('contestantCount').once("value");
           if(contestantCountRef.exists()){
               contestantCount = contestantCountRef.val();
               contestant.getCount();
           }
           question = new Question();
           question.display();
        }

    }

    play(){
        background("yellow");
        
        Contestant.getPlayerInfo();

        if(allContestants !== undefined){
            var display_position = 230;
            for(var plr in allContestants){
                var correctAns = "2";
                if(correctAns === allContestants[plr].answer)
                fill("green");
                else
                fill("red");
            
                display_position += 20;
                textSize(15);
                text(allContestants[plr].name + ": " + allContestants[plr].answer, 150, display_position);
            }
        }

        textSize(20);
        fill("grey");
        text("*NOTE: Contestant who answered correct are highlighted in green color!", 100, 220);

    }
}