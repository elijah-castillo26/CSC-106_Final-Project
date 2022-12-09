


//Anthony Bitmoji
var drawBitmojiInitials = function (bitmojiX,bitmojiY,size,adjust) {
    
    var x=bitmojiX+200;
    var y=bitmojiY+100;
    fill(255, 255, 255);
    rect(x-size*56/100,y+size*47/100,size*108/100,size*142/140);
    fill(0, 0, 0);
    textSize(61/100*size);
    text("AF",(x-size*36/100)-adjust,(y+size*25/21)-adjust);
};

//this draws the ear on bitmoji

var drawBitmojiEars = function (bitmojiX,bitmojiY,size){
    
    var x=bitmojiX+200;
    var y=bitmojiY+100;
    fill(252, 214, 202);
    ellipse (x-size*50/100,y-size*6/100,size*20/100,size*39/100);
    ellipse (x+size*50/100,y-size*6/100,size*20/100,size*39/100);
};

//this draws the hair on bitmoji

var drawBitmojiHair = function (bitmojiX,bitmojiY,size)
{
    var x=bitmojiX+200;
    var y=bitmojiY+100;
    
    fill(125, 58, 34);
    ellipse(x-size*40/100,y-size*40/100,size*13/100,size*20/100);
    ellipse(x+size*34/100,y-size*47/100,size*13/100,size*13/100);
    ellipse(x+size*40/100,y-size*40/100,size*13/100,size*20/100);
    ellipse(x-size*35/100,y-size*38/100,size*21/100,size*20/100);
};

//this draws the face on bitmoji

var drawBitmojiFace = function (bitmojiX,bitmojiY,size,adjust) {
    
    var x=bitmojiX+200;
    var y=bitmojiY+100;
    fill(0, 0, 0);
    ellipse(x,y-size/4,size*3/4,size*11/10);
    fill(252, 214, 202);
    ellipse(x,y,size,size*125/100);
    triangle(x,y+size*5/100,x-size*15/100,y+size*19/100,x+size*12/100,y+size*16/100);
    fill(222, 71, 122);
    triangle(x+size*5/100,y+size*48/100,x-size*30/100,y+size*40/100,x+size*30/100,y+size*40/100);
    fill(0, 0, 0);
    arc(x,y-size*4/10,size*(70/100),size*32/100,193,344);
    rect((x-size*25/100)+(adjust*20/43),y+size*22/100,size*53/100,((size*9/100)+adjust*-10/100));
};
//this draws the eyes on bitmoji

var drawBitmojiEyes = function (bitmojiX,bitmojiY,size,adjust) {
    
    var x = bitmojiX+200;
    var y = bitmojiY+100;
    //ellipse(100,100, 30, 30);
    ellipse(x+size*13/100,y-size*15/100,size*10/100,size*10/100);
    ellipse(x-size*15/100,y-size*15/100,size*10/100,size*10/100);
    line(x-size*30/100,y-size*30/100,x-size*5/100,y-size*30/100);
    line(x,y-size*30/100,x+size*30/100,y-size*30/100);
};

//this combines the parts of the bitmoji into a single drawbitmoji function that changes x position, y position, and size

function drawBitmojiAnthony(bitmojiX,bitmojiY,size,adjust) {
    
    drawBitmojiInitials(bitmojiX+adjust,bitmojiY+adjust,size,adjust);
    drawBitmojiEars(bitmojiX,bitmojiY,size);
    drawBitmojiHair(bitmojiX,bitmojiY,size);
    drawBitmojiFace(bitmojiX,bitmojiY,size,adjust);
    drawBitmojiEyes(bitmojiX,bitmojiY,size);
}


//Elijah Bitmoji
function drawUpper(x, y, h){
    fill(247, 210, 188); // Skin Color
    ellipse(x - (h / 20), y-(h/50*500), h/20*380, h/20*380); // Head
    
    
    fill(94, 55, 7); // Eye Color
    ellipse(x-(h/20*80), y-(h/55*600), h/20*30 , h/20*30);
    ellipse(x+(h/15*50), y-(h/55*600), h/20*30, h/20*30);  // Eyes
    
    
    noFill();
    stroke(217, 157, 28); //Brow Color
    arc(x-(h/20*80), y-(h/60*710), h/20*80, h/20*40, -180, 0); //Eye Brow
    arc(x+(h/20*70), y-(h/60*710), h/20*80, h/20*40, -180, 0); 
    noStroke();
    
    fill(252, 204, 176);
    stroke(0, 0, 0);
    arc(x - (h/10), y-(h/38*280), h /18*60, h/20*50, 100, 220); //Nose
    noStroke();
    
    
    fill(255, 255, 255);
    arc(x - (h/20), y-(h/20*80), h/10*100, h/8*15, 10, 180); //Mouth
    
    fill(255, 214, 89); // Hair
    ellipse(x+(h/10*80), y-(h/15*200), h/20*80, h/20*140);
    
    
    fill(252, 204, 176);
    stroke(0, 0, 0);
    arc(x+(h/35*300), y-(h/20*200), h/20*70, h/20*60, -100, 70); //Ear
    //arc(153, 150, 20, 20, 110, 280); //Ear
    noStroke();
    
    
    
    stroke(0,0,0);
    fill(79, 78, 78); //Hat Color
    arc(x+(h/20), y-(h/10*150), h/20*320, h/25*320, -180, 0); //Hat
    fill(20, 20, 20); //Brim Color
    quad(x-(h/40*300), y-(h/20*300), x+(h/30*250), y-(h/20*300), x +(h/20), y-(h/20*270), x-(h/20*300), y-(h/20*270)); // Brim
    noStroke();
}


function drawLower(x, y, h){
    fill(23, 59, 97); //Shirt Color
    quad(x-(h/20*200), y+(h/20), x+(h/20*200), y + (h/20), x+(h/20*300), y+(h/20*240), x-(h/20*300), y+(h/20*240)); //Shirt
    
    
    
    //fill(76, 130, 59); //Should be same as background
    //triangle(x-(h/50*550), y+(h/20*300), x-(h/40*300), y+(h/20*300), x-(h/20*150), y+(h/20*150)); //Arm Pits
    
    //triangle(x+(h/20*150), y+(h/20*300), x+(h/50*530), y+(h/20*300), x+(h/20*160), y+(h/20//*150));
    
    
    fill(255, 255, 255);
    textSize(h/20*150);
    text("EC", x-(h/20*100), y+(h/20*170)); //Shirt Text
    
}


function drawBitmoji(x, y, h){
    drawUpper(x, y, h);
    drawLower(x, y, h);
}








//Keep track of screens
// 0: Splash Screen
// 1: Bet Screen
// 2: Game Screen
// 3: Reset Screen
var currScene = 0;

//Config
    //Game Result
var afterResultScreen = 1;
var resultText = "";
var resultTextColor = color(65, 235, 88);
var gamesPlayed = 0;

    //Betting
var initalBalance = 3500;
var totalBalance = initalBalance;
var currentBet = 0;


//Store Values for each Card Object
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
        cardValue: 10
    },
    12: {
        cardDisplay: "Q",
        cardValue: 10
    },
    13: {
        cardDisplay: "K",
        cardValue: 10
    },
    14: {
        cardDisplay: "A",
        cardValue: [1, 11]
    },
};


//Colors that cards can have
var colorList = [color(242, 35, 12), color(0, 0, 0)];

//Khan Button Class
var Button = function(config) {
    this.x = config.x || 0;
    this.y = config.y || 0;
    this.width = config.width || 150;
    this.height = config.height || 50;
    this.label = config.label || "Click";
    this.onClick = config.onClick || function() {};
    this.color = config.color || color(0, 234, 255);
};

Button.prototype.draw = function() {
        textAlign(CENTER, CENTER);
        strokeWeight(2.5);
        stroke(255);
        fill(214, 64, 64);
        rectMode(CENTER);
        rect(this.x, this.y, this.width, this.height, 4);
        rectMode(CORNER);
        strokeWeight(1);
        fill(0,0,0);
        textSize(15);
        fill(255, 255, 255);
        text(this.label, this.x, this.y);
        textAlign(LEFT, BASELINE);
};

Button.prototype.isMouseInside = function() {
    //println("Click" + " X:" + this.x + " Y:" + this.y + " MX:" +mouseX +" MY:" + mouseY + " W:" + this.width + " H:" + this.height);
    return mouseX > (this.x - this.height + 5) &&
           mouseX < (this.x + this.width - 20) &&
           mouseY > (this.y - this.height + 10) &&
           mouseY < (this.y + this.height - 10);
};

Button.prototype.handleMouseClick = function() {

    if (this.isMouseInside()) {
        this.onClick();
    }
};



//Card object
var Card = function(face){
    this.x=0;
    this.y=0;
    this.faceUp = face;
    this.color = colorList[round(random(0, 1))];
    this.width = 45;
    this.height = 60;
    
    
    //constructor
    //When an instance is created values for the card will be randomly Picked
    //and added to its properties
    var randomCard = round(random(0, 14));
    this.displayValue = cardObj[randomCard].cardDisplay;
    this.value= cardObj[randomCard].cardValue;
    //test
    
};

Card.prototype.draw = function() {
//dealers second card
    if(this.faceUp){
        fill(235, 40, 40);
        rect(this.x, this.y, this.width, this.height,5);
        return;
    }
    
    //Noraml Card
    textAlign(CENTER, LEFT);
    //body
    fill(255, 255, 255);
    rect(this.x, this.y, this.width, this.height,5);
    
    //value
    fill(this.color);
    textSize(15);
    text(this.displayValue, this.x +11, this.y+16);
    text(this.displayValue, this.x+35, this.y+55);
};

var Player = function(){
  
  this.currentCards = [];
  this.currentValue = 0;
  this.bust = false;
};

Player.prototype.drawNewCard = function(f){
    
    //make new card, add to players array of active cards
    var newC = new Card(f);
    this.currentCards.push(newC);
    
    //card is face down dont recount
    if(f){
        return;
    }
    
    var acesInArray = 0;
    var totalRecount = 0;
    
    for(var i = 0; i < this.currentCards.length; i++){
        //If there is an ace
        if(this.currentCards[i].displayValue === "A"){

            acesInArray++;
        } else {

            totalRecount += this.currentCards[i].value;
            
        }
    }
    
    //println("Total Before: " + totalRecount + " Aces Count: " + acesInArray);
    //add recount value to player obj
    this.currentValue = totalRecount;
    
    //calcuate values of aces based on currentValue
    if(acesInArray > 0){

        for(var j = 0; j < acesInArray; j++){
            
            this.currentValue += this.addCardValue();
        }
    }

    
    this.checkBust();
    
    
};

Player.prototype.addCardValue = function(){
    //use differnt value for Ace depending on current value 
    if((this.currentValue + 11) > 21){

        return 1;
            
    } else if ( (this.currentValue + 1) < 21) {

        return 11;
            
    }
};

Player.prototype.displayCards = function(startX){
    //draw cards in sets of 3
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

Player.prototype.reset = function(){
  //remove total and card from properties
  this.currentCards = [];
  this.currentValue = 0;
  this.bust = false;
};







var player = new Player();
var computer = new Player();


var closeBoxBtn = new Button({
    x: 200,
    y: 270,
    width: 50,
    height: 40,
    label: "X",
    color: color(237, 35, 35),
    onClick: function() {
       afterResultScreen = 0;
    }
});


function handleGameResult(result){
    if(result === 1){
        //win
        resultText = "You Won";
        resultTextColor = color(65, 235, 65);
        
        //add Bet
        totalBalance += currentBet;
        
        
    } else if (result === 0){
        //loss

        
        //Subtract, check if below 0
        if(totalBalance - currentBet <= 0){

            //end
            resultText = "Bankrupt";
            resultTextColor = color(232, 39, 62);
            totalBalance -= currentBet;
            closeBoxBtn.onClick = function(){

                currScene = 0;
            };
            
        } else {
            resultText = "You Lost";
            resultTextColor = color(235, 23, 23);
            totalBalance -= currentBet;
        }
        
    } else if (result === 2){
        //tie
        resultText = "You Tied";
        resultTextColor = color(237, 228, 66);
        
        //keep Bet, do nothing
    }

}

function comparePlayers(){
    
    //check game state, find winner
    //println("COMPARE");

    if (computer.bust  && player.bust){
        //println("Tie Bust Bust");
        handleGameResult(2);
        
    } 
    else if(computer.currentValue === player.currentValue){

        handleGameResult(2);
    }
    else if (computer.bust && !player.bust){

        handleGameResult(1);
    } else if (player.bust && !computer.bust){

        handleGameResult(0);
    } else if (player.currentValue > computer.currentValue){

        handleGameResult(1);
    } else if (player.currentValue < computer.currentValue){

        handleGameResult(0);
    }
    currScene = 3;
    
}



function computerTurn(){
    //turn over hidden card
    //since this is called everytime there is a bust or stand, only do this logic the first time.
    if(computer.currentCards[1].faceUp === true){
        
        //remove flipped card and create new
        computer.currentCards.splice(1, 1);
         computer.drawNewCard(false);
    }

    
    
    //computer "AI"
    while(computer.currentValue < 17){

        computer.drawNewCard(false);

        
    }
    
    comparePlayers();
    
}

Player.prototype.checkBust = function(){

    if(this.currentValue > 21){
        //println("BUST TRUE");
        this.bust = true;
        
        //players card puts them over 21
        if(player.currentValue > 21){
            computerTurn();
        } else if (computer.currentValue > 21){
            comparePlayers();
        }
        
        
        
    }
};








//button objects
var hitBtn = new Button({
    x: 40,
    y: 360,
    width: 60,
    height: 40,
    label: "Hit",
    onClick: function() {
        player.drawNewCard(false);
    }
});

var standBtn = new Button({
    x: 140,
    y: 360,
    width: 110,
    height: 40,
    label: "Stand",
    onClick: function() {
        computerTurn();
    }
});

function initGame(){
    //player Start Cards
    player.drawNewCard(false);
    player.drawNewCard(false);
    
    
    //computer Start Cards
    computer.drawNewCard(false);
    computer.drawNewCard(true);
    
    //change buttons back to original state
    hitBtn.label = "Hit";
    standBtn.label = "Stand";
    
    hitBtn.onClick = function(){
        player.drawNewCard(false);
    };
    standBtn.onClick = function(){
        computerTurn();
    };
    
}

function resetGame(){
    //clear objects
    player.reset();
    computer.reset();
    
    initGame();
    currScene = 2;
    afterResultScreen = 1;
    
    //if bankrupt, then this func changes, so reset
    closeBoxBtn.onClick = function(){
        afterResultScreen = 0;
    };
    
    
}



var startGameBtn = new Button({
    x: 200,
    y: 320,
    width: 80,
    height: 50,
    label: "Start",
    onClick: function() {
        currScene = 1;
        //reset balance
        totalBalance = initalBalance;
        
        
    }
});



//Betting

function chooseBet(betValue){
    currentBet = betValue;
    gamesPlayed += 1;
    resetGame();
    
}
var betBtn250 = new Button({
    x: 100,
    y: 200,
    width: 70,
    height: 50,
    label: "$250",
    color: color(123, 209, 235),
    onClick: function() {
        chooseBet(250);
    }
});

var betBtn500 = new Button({
    x: 200,
    y: 200,
    width: 70,
    height: 50,
    label: "$500",
    color: color(123, 209, 235),
    onClick: function() {
        chooseBet(500);
    }
});

var betBtn1000 = new Button({
    x: 300,
    y: 200,
    width: 70,
    height: 50,
    label: "$1000",
    color: color(123, 209, 235),
    onClick: function() {
        chooseBet(1000);
    }
});




//Screens

var brick_background = function(x, y, s){
    
    noFill();
    stroke(0, 0, 0, 30);
    
    for(var i = 0; i < 600; i += s * 2 + 1)
    {
        rect(x + i, y, s * 2, s,6);
    }
};

function splashScreen(){
        background(120, 120, 120);    
    for(var i = 0; i < 8; ++i)
    {
        brick_background(60, 0 + i * 120, 60);
    }
    
    for(var i = 0; i < 8; ++i)
    {
        brick_background(0, 60 + i * 120, 60);
    }
    fill(255, 255, 255);
    textSize(45);
    text("Blackjack", 100, 50);
    textSize(15);
    text("Goal: Get as close to 21 without going over", 55, 85);
    
    //Bitmojis
    textAlign(LEFT, LEFT);
        stroke(0,0,0);
    drawBitmoji(100, 200, 4);
        stroke(0,0,0);
    drawBitmojiAnthony(100, 60, 70, 0);
    
    //Button
    startGameBtn.draw();
    
    
}



function betScreen(){
    background(120, 120, 120);
    for(var i = 0; i < 8; ++i)
    {
        brick_background(60, 0 + i * 120, 60);
    }
    
    for(var i = 0; i < 8; ++i)
    {
        brick_background(0, 60 + i * 120, 60);
    }
    fill(255, 255, 255);
    textSize(21);
    textFont(createFont("monospace"));
    text("Choose how much you want to bet", 20, 80);
    
    textFont(createFont("fantasy"));
    textSize(25);
    text("Current Balance: $" + totalBalance, 70, 130);
    
    textFont(createFont("sans-serif"));
    
    betBtn250.draw();
    betBtn500.draw();
    betBtn1000.draw();
}

function gameEndScreen(){
    //display after so its drawn on top

        //change labels
        hitBtn.label = "End";
        standBtn.label = "Play Again";
        
        //change functions
        //end game
        hitBtn.onClick = function(){
            currScene = 0;
            //reset betting
            totalBalance = 3500;
            gamesPlayed = 0;
        };
        //play again
        standBtn.onClick = function(){
            currScene = 1;
        };
        
        
        if(afterResultScreen === 1){
            //Outcome
            fill(0, 0, 0);
            rect(100, 100, 200, 200);
            fill(resultTextColor);
            textSize(40);
            text(resultText, 200, 150);
        
            //stats
            fill(255, 255, 255);
            textSize(20);
            text("# Played: " + gamesPlayed, 180, 200);
            text("Balance: " + totalBalance, 200, 230);
        
            //X
            closeBoxBtn.draw();
        }

        
}

function gameScreen(){
    // println("2");
    background(92, 148, 74);
    
    
    //rect or line?
    rect(200, 0, 2, 400);
    
    //Text
    fill(0, 0, 0);
    textSize(30);
    text("You", 80, 35);
    text("Computer", 240, 35);
    
    //Current Value of cards
    textSize(20);
    text("Value: " + player.currentValue, 60, 60);
    text("Value: " + computer.currentValue, 260, 60);
    
    //Cards
    computer.displayCards(220);
    player.displayCards(20);
    
    if (currScene === 3){
        gameEndScreen();
    }
    
    //Buttons
    hitBtn.draw();
    standBtn.draw();
}



//Before logic


// 0: Splash Screen
// 1: Bet Screen
// 2: Game Screen
// 3: Reset Screen

mouseClicked = function() {

    if(currScene === 0){

        startGameBtn.handleMouseClick();
    }
    
    if(currScene === 2 || 3){
 
        hitBtn.handleMouseClick();
        standBtn.handleMouseClick();
        closeBoxBtn.handleMouseClick();
    }

    
    if (currScene === 1){

        betBtn250.handleMouseClick();
        betBtn500.handleMouseClick();
        betBtn1000.handleMouseClick();
    }
    

};

draw = function() {
    //Draw Screens
    if(currScene === 0){
        splashScreen();
        return;
    } else if (currScene === 1){
        betScreen();
        return;
    }
    gameScreen();
    
   
};
