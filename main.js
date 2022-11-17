

var cardObj = {
    1: {
        cardDisplay: "1",
        cardValue: 1
    },
    2: {
        cardDisplay: "2",
        cardValue: 2
    },
    3: {
        cardDisplay: "3",
        cardValue: 3
    },
    4: {
        cardDisplay: "4",
        cardValue: 4
    },
    5: {
        cardDisplay: "5",
        cardValue: 5
    },
    6: {
        cardDisplay: "6",
        cardValue: 6
    },
    7: {
        cardDisplay: "7",
        cardValue: 7
    },
    8: {
        cardDisplay: "8",
        cardValue: 8
    },
    9: {
        cardDisplay: "9",
        cardValue: 9
    },
    10: {
        cardDisplay: "10",
        cardValue: 10
    },
    11: {
        cardDisplay: "J",
        cardValue: 11
    },
    12: {
        cardDisplay: "Q",
        cardValue: 12
    },
    13: {
        cardDisplay: "K",
        cardValue: 13
    },
    14: {
        cardDisplay: "A",
        cardValue: [1, 11]
    },
};

var colorList = [color(242, 35, 12), color(0, 0, 0)];

//Khan Button Class
var Button = function(config) {
    this.x = config.x || 0;
    this.y = config.y || 0;
    this.width = config.width || 150;
    this.height = config.height || 50;
    this.label = config.label || "Click";
    this.onClick = config.onClick || function() {};
};

Button.prototype.draw = function() {
    fill(0, 234, 255);
    rect(this.x, this.y, this.width, this.height, 5);
    fill(0, 0, 0);
    textSize(19);
    textAlign(LEFT, TOP);
    text(this.label, this.x+10, this.y+this.height/4);
};

Button.prototype.isMouseInside = function() {
    return mouseX > this.x &&
           mouseX < (this.x + this.width) &&
           mouseY > this.y &&
           mouseY < (this.y + this.height);
};

Button.prototype.handleMouseClick = function() {
    if (this.isMouseInside()) {
        this.onClick();
    }
};




var Card = function(face){
    this.x=0;
    this.y=0;
    this.faceUp = face;
    this.color = colorList[round(random(0, 1))];
    this.width = 45;
    this.height = 60;
    
    
    //constructor
    var randomCard = round(random(0, 14));
    this.displayValue = cardObj[randomCard].cardDisplay;
    this.value= cardObj[randomCard].cardValue;
    
};

Card.prototype.draw = function() {
    
    if(this.faceUp){
        fill(237, 26, 26);
        rect(this.x, this.y, this.width, this.height);
        return;
    }
    
    textAlign(CENTER, LEFT);
    //body
    fill(255, 255, 255);
    rect(this.x, this.y, this.width, this.height);
    
    //value
    fill(this.color);
    textSize(35);
    text(this.displayValue, this.x + (this.width/3), this.y+(this.height/1.5));
    //text(this.display, this.x + (this.width-20), this.y+(this.height-10));
};

var Player = function(){
  
  this.currentCards = [];
  this.currentValue = 0;
  this.bust = false;
};

Player.prototype.drawNewCard = function(f){
    var newC = new Card(f);
    this.currentCards.push(newC);
    
    //dont add value if card is turned over
    if(!f){
        this.currentValue += this.addCardValue(newC);
        this.checkBust();
    }
    
};

Player.prototype.addCardValue = function(card){
    if(card.displayValue === "A" && ((this.currentValue + 11) > 21)){
        println("1");
        return card.value[0];
            
    } else if (card.displayValue === "A" ) {
        println("11");
        return card.value[1];
            
    } else {
        return card.value;
    }
};

Player.prototype.displayCards = function(startX){
    var offset = 0;
    var offsetY = 100;
    for(var i = 0; i < this.currentCards.length; i++){
        if(i%3 ===0 && i !== 0){
            //change row if card indx is even (2 cols)
            offsetY += 100;
            offset = 0;
        } 

        //set card pos
        this.currentCards[i].y = offsetY;
        this.currentCards[i].x = startX + offset*60;
        offset += 1;
        
        //draw current card
        this.currentCards[i].draw();
    }
};







var player = new Player();
var computer = new Player();




function comparePlayers(){
    
    //check game state, find winner

    if (computer.bust  && player.bust){
        println("Tie Bust Bust");
    } 
    else if(computer.currentValue === player.currentValue){
        println("Tie Equal");
    }
    else if (computer.bust && !player.bust){
        println("Player Win  CB !PB");
    } else if (player.bust && !computer.bust){
        println("Computer Win PB !CB");
    } else if (player.currentValue > computer.currentValue){
        println("Player Win PV > CV");
    } else if (player.currentValue < computer.currentValue){
        println("Computer Win CV > PV");
    }
    
}



function computerTurn(){
    //turn over hidden card
    //since this is called everytime there is a bust or stand, only do this logic the first time.
    if(computer.currentCards[1].faceUp === true){
        computer.currentCards[1].faceUp = false;
        println(computer.addCardValue(computer.currentCards[1]));
        computer.currentValue += computer.addCardValue(computer.currentCards[1]);
        
    }

    
    
    //computer "AI"
    while(computer.currentValue < 17){
        println("Inside AI");
        computer.drawNewCard(false);
    }
    
    println("Start Win Check");
    comparePlayers();
    
}

Player.prototype.checkBust = function(){
    if(this.currentValue > 21){
        this.bust = true;
        
        //players card puts them over 21
        if(player.bust && !computer.bust){
            println("Comp Turn");
            computerTurn();
        }
        
    }
};




function startGame(){
    //player Start Cards
    player.drawNewCard(false);
    player.drawNewCard(false);
    
    
    //computer Start Cards
    computer.drawNewCard(false);
    computer.drawNewCard(true);
    
}


//button objects
var hitBtn = new Button({
    x: 20,
    y: 340,
    width: 60,
    height: 50,
    label: "Hit",
    onClick: function() {
        player.drawNewCard(false);
    }
});

//button objects
var standBtn = new Button({
    x: 100,
    y: 340,
    width: 60,
    height: 50,
    label: "Stand",
    onClick: function() {
        computerTurn();
    }
});


//Before logic
startGame();

mouseClicked = function() {
    hitBtn.handleMouseClick();
    standBtn.handleMouseClick();
};

draw = function() {
    background(237, 197, 237);
    line(200, 0, 200, 400);
    
    //Text
    fill(0, 0, 0);
    textSize(30);
    text("You", 80, 0);
    text("Computer", 240, 0);
    
    //Current Value of cards
    textSize(20);
    text("Value: " + player.currentValue, 70, 40);
    text("Value: " + computer.currentValue, 260, 40);
    
    //Cards
    computer.displayCards(220);
    player.displayCards(20);
    
    //Buttons
    hitBtn.draw();
    standBtn.draw();
};




    


