
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
    
};

Card.prototype.draw = function() {
    //dealers second card
    if(this.faceUp){
        fill(237, 26, 26);
        rect(this.x, this.y, this.width, this.height);
        return;
    }
    
    //Noraml Card
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
    
    //make new card, add to players array of active cards
    var newC = new Card(f);
    this.currentCards.push(newC);
    
    //dont add value if card is turned over
    if(!f){
        //add value of card, and check if bust
        this.currentValue += this.addCardValue(newC);
        this.checkBust();
    }
    
};

Player.prototype.addCardValue = function(card){
    //use differnt value for Ace depending on current value 
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

            computerTurn();
        
        
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

var startGameBtn = new Button({
    x: 160,
    y: 320,
    width: 80,
    height: 50,
    label: "Start",
    onClick: function() {
        currScene = 1;
    }
});


//Screens
function splashScreen(){
    background(76, 130, 59);
    fill(255, 255, 255);
    textSize(40);
    text("Blackjack", 120, 10);
    textSize(15);
    text("Goal: Get as close to 21 without going over", 60, 70);
    
    //Bitmojis
    textAlign(LEFT, LEFT);
    drawBitmoji(100, 200, 4);
    drawBitmojiAnthony(100, 60, 70, 0);
    
    //Button
    startGameBtn.draw();
}

function betScreen(){
    background(136, 166, 240);
}

//Before logic
startGame();

mouseClicked = function() {
    hitBtn.handleMouseClick();
    standBtn.handleMouseClick();
    startGameBtn.handleMouseClick();
};

draw = function() {
    //Draw Screens
    if(currScene === 0){
        splashScreen();
        return;
    }
    
    
    background(237, 197, 237);
    
    //rect or line?
    rect(200, 0, 2, 400);
    
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



