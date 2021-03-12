class Question{
    constructor(){
        this.title;
        this.question;
        this.option1;
        this.option2;
        this.option3;
        this.option4;
        this.input1 = createInput('Answer');
        this.input2 = createInput('Name');
        this.button = createButton('Submit');
    }

    hide(){

    }

    display(){
        this.title = createElement('h3');
        this.title.html("MyQuiz Game");
        this.title.position(350, 0);
       
        this.question = createElement('h3');
        this.question.html("Question: - What starts and ends with the letter 'E', but has only one letter?");
        this.question.position(150, 80); 
        this.option1 = createElement('h3');
        this.option1.html("1: Everyone");
        this.option1.position(150, 100);
        this.option2 = createElement('h3');
        this.option2.html("2: Enevlope");
        this.option2.position(150, 120);
        this.option3 = createElement('h3');
        this.option3.html("3: Empty");
        this.option3.position(150, 140);
        this.option4 = createElement('h3');
        this.option4.html("4: Eye");
        this.option4.position(150, 160);

        this.input1.position(150, 230);
        this.input2.position(350, 230);
        this.button.position(300, 280);

        this.button.mousePressed(()=>{
            this.title.hide();
            this.input1.hide();
            this.input2.hide();
            this.button.hide();

            contestant.name = this.input2.value();
            contestant.answer = this.input1.value();
            
            contestantCount += 1;
        
            contestant.index = contestantCount;
            contestant.update()
            contestant.updateCount(contestantCount);
            });
    }
}