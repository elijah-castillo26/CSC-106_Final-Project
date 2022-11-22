var click = false;
var scene = 1;
var c1 = color(15, 85, 196);
var c1r = 0;
var c1g = 0;
var c1b = 0;
var c2 = color(212, 12, 12);
var c2r = 255;
var c2g = 255;
var c2b = 255;
var h1 = 0;
var h2 = 0;
var t = 0;
var t2 = 0;

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

    
        textAlign(CENTER, CENTER);
        strokeWeight(2.5);
        stroke(255);
        fill(214, 64, 64);
        rectMode(CENTER);
        rect(this.x, this.y, 80, 35, 4);
        rectMode(CORNER);
        strokeWeight(1);
        fill(0,0,0);
        textSize(15);
        text(this.label, this.x, this.y);
        textAlign(LEFT, BASELINE);
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
    //test
    
};

Card.prototype.draw = function() {
    //dealers second card
    if(this.faceUp){
        fill(46, 168, 37);
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
        return card.value[0];
            
    } else if (card.displayValue === "A" ) {
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
        println("You Both Busted");
    } 
    else if(computer.currentValue === player.currentValue){
        println("You Both Tied");
    }
    else if (computer.bust && !player.bust){
        println("You Won!");
    } else if (player.bust && !computer.bust){
        println("Computer won :(");
    } else if (player.currentValue > computer.currentValue){
        println("You Won");
    } else if (player.currentValue < computer.currentValue){
        println("Computer Won");
    }
    
}

var winScreen = function(){
    comparePlayers();
};


function computerTurn(){
    //turn over hidden card
    //since this is called everytime there is a bust or stand, only do this logic the first time.
    if(computer.currentCards[1].faceUp === true){
        computer.currentCards[1].faceUp = false;
        computer.currentValue += computer.addCardValue(computer.currentCards[1]);
        
    }

    //computer "AI"
    while(computer.currentValue < 17){
        computer.drawNewCard(false);
    }
    
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
    x: 100,
    y: 297,
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
    x: 204,
    y: 324,
    width: 80,
    height: 50,
    label: "Start",
    onClick: function() {
        currScene = 1;
    }
});
var brick_background = function(x, y, s){
    
    noFill();
    stroke(0, 0, 0, 20);
    
    for(var i = 0; i < 600; i += s * 2 + 1)
    {
        rect(x + i, y, s * 2, s,6);
    }
};

//Screens
function splashScreen(){
        background(120, 120, 120);    for(var i = 0; i < 8; ++i)
    {
        brick_background(60, 0 + i * 120, 60);
    }
    
    for(var i = 0; i < 8; ++i)
    {
        brick_background(0, 60 + i * 120, 60);
    }
    fill(255, 255, 255);
    textSize(40);
    text("Blackjack", 209, 42);
    textSize(15);
    text("Goal: Get as close to 21 without going over", 204, 81);
    
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
    background(136, 166, 240);
}

//Before logic
startGame();

mouseClicked = function() {
    hitBtn.handleMouseClick();
    standBtn.handleMouseClick();
    startGameBtn.handleMouseClick();
};


//created by LeaferStudios
var loadingTime = function(){
    background(120, 120, 120);
    
    noStroke();
    
    for (var i = 0; i < 12; i++) {
        fill(c1r,c1g,c1b, 50+h1);
        rect(0+i*0, 0+i*-40, 400, 400);
        fill(c2r,c2g, c2b, 50+h2);
        rect(0+i*-40, 0, 400, 400);
    }
    
    textFont(createFont("Arial"), 58);
    textAlign(CENTER, CENTER);
    fill(255, 255, 255);
    text("LOADING...", width/2-10, height/2);
    fill(255, 255, 255);
    text("LOADING...", width/2-5, height/2);
    fill(0, 0, 0);
    text("LOADING...", width/2, height/2);
    
    c1r++;
    if (c1r >= 255) {
        c1r =lerp(c1r, 0, 15);}
    c1g++;
    if (c1g >= 255) {
        c1g =lerp(c1g,0,15);}
        c1b++;
    if (c1b >= 255) {
        c1b =lerp(c1b,0,15);}
        
        c2r--;
    if (c2r <= 0) {
        c2r =lerp(c2r,255,15);}
        c2g--;
    if (c2g <= 0) {
        c2g =lerp(c2g,255,15);}
        c2b--;
    if (c2b <= 0) {
        c2b =lerp(c2b,255,15);}

    if (t === 0 ) {
        h1++;
        h2++;
    }
    if (t === 1) {
        h1--;
        h2--;}
    if (h1 >= 255 || h2 >= 255) {
        t=1;}
    if (h1 <= 0 || h2 <= 0) {
        t=0;}
};

var gameScreen = function(){
    //rect or line?
    background(120, 120, 120);
    rect(200, 0, -1, 400);
        brick_background();
    //Text
    fill(0, 0, 0);
    textSize(30);
    text("You", 70, 42);
    text("Computer", 240, 41);
    
    //Current Value of cards
    textSize(20);
    text("Value: " + player.currentValue, 60, 80);
    text("Value: " + computer.currentValue, 260, 80);
    
    //Cards
    computer.displayCards(215);
    player.displayCards(15);
    
    //Buttons
    hitBtn.draw();
    standBtn.draw();
};

draw = function() {
    //Draw Screens
    if(currScene === 0){
    loadingTime();
    if (millis()>4000){
        splashScreen();
        }
        return;
    }
    
    gameScreen();
};


