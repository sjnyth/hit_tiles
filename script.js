var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");


window.addEventListener("keydown", keyDown);


ctx.font = "30px Cyberpunk";

var colors = ["red", "yellow", "green", "cornflowerblue"]

var c = new Audio();
c.src = "sounds/c.wav";
c.preload = 'auto';
var d = new Audio();
d.src = "sounds/d.wav";
d.preload = 'auto';
var e = new Audio();
e.src = "sounds/e.wav";
e.preload = 'auto';
var f = new Audio();
f.src = "sounds/f.wav";
f.preload = 'auto';
var g = new Audio();
g.src = "sounds/g.wav";
g.preload = 'auto';
var a = new Audio();
a.src = "sounds/a.wav";
a.preload = 'auto';
var b = new Audio();
b.src = "sounds/b.wav";
b.preload = 'auto';
var c2 = new Audio();
c2.src = "sounds/c2.wav";
c2.preload = 'auto';

var sounds = [c, d, e, f, g, a, b, c2];
var gameOver = new Audio('sounds/gameover.mp3');

function playSound(){

}

var buttonSizes = [canvas.width/4, canvas.width/4, canvas.width/4, canvas.width/4];
var buttonIncrease = 50;

function rect(x, y, wid, hi){
  ctx.beginPath();
  ctx.rect(x, y, wid, hi)
}
function text(message, x, y){
  ctx.fillStyle = "black";
  ctx.fillText(message, x, y);
}
function fill(r, g, b){
  ctx.fillStyle = "rgb(" + r + "," + g + "," + b + ")";
  ctx.fill();
  ctx.stroke();
}

function line(x1, y1, x2, y2){
    
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
    
}

function drawArrows(arrowsX, arrowsY, arrowSpacer){

  for (var i = 0; i < 4; i++){
    
    ctx.beginPath();
    
    ctx.rect(i * (2*canvas.width/4-buttonSizes[i]) , 800, buttonSizes[i], 100);
    ctx.fillStyle = colors[i];
    ctx.fill();

    if (buttonSizes[i] > canvas.width/4){buttonSizes[i] -= 10;}
  }
    
  ctx.font = "100px Arial";
  text("v", arrowsX, arrowsY + canvas.width / 16);
  text("b",arrowsX+canvas.width/4, arrowsY + canvas.width/13);
  text("n", arrowsX + 1.99*canvas.width/4, arrowsY + canvas.width / 16);
 
  text("m", arrowsX + 2.88*canvas.width/4, arrowsY + canvas.width / 16);
    
    line(0, 800, 450, 800);

    for (var i = 1; i < 4; i++){

        line(i * canvas.width/4, 800, i * canvas.width/4, 900)
    }

}


var score = 0;
var misses = 0
var blocks = [];
var speed = 2

function drawBlocks(){
    
    for (var i = 0; i < blocks.length; i++){
        
        ctx.beginPath();
    
        ctx.rect(blocks[i][0] * canvas.width/4, blocks[i][1], canvas.width/4, 100);
        ctx.fillStyle = colors[blocks[i][0]];
        ctx.fill();
        
    }
    
}

setTimeout(makeBlock, 0);
function makeBlock(){
    var newBlock = [Math.round(Math.random()*3), -canvas.width/4, true]
    console.log("Created block at position:", newBlock[0]);
    blocks.push(newBlock);
    
    setTimeout(makeBlock, 3* 1000/speed);
}

var falling = setInterval(fallingBlocks, 50/3);



function fallingBlocks(){
    
    speed += 0.001
    
    document.getElementById("speed").innerHTML = "Speed: " + Math.round(speed);
    
    document.getElementById("score").innerHTML = "Score: " + Math.round(score);
    
    document.getElementById("misses").innerHTML = "Misses: " + misses;
    
    for (var i = 0; i < blocks.length; i++){
        blocks[i][1] += speed;
        
        if (blocks[i][1] > 800){
            blocks.splice(i, 1);
            misses += 1;
            score -= 1;
        }
    }
    
    if (misses >= 20){
        gameOver.play();
        clearInterval(falling);
        document.getElementById("misses").innerHTML = "Misses: " + misses;

        ctx.clearRect(0, 0, 450, 900);

        ctx.font = "30px Arial";
        ctx.fillStyle = "black";
        text('Press "r" to try again', 90, 300);
        
    }
    else{
    
      ctx.clearRect(0, 0, 450, 900);
      
      drawBlocks();
      
      drawArrows(30, 850, 130);
    }

    
    
   
}


function keyDown(){
    var key = event.key.toLowerCase();

    // console.log(misses >= 20  );
    
    if (key == "v"){
        console.log("V key pressed");
        if (blocks[0][0] == 0){
            if (blocks[0][1] >= 800 - 100){
                score += 2;
                blocks.splice(0, 1);
                sounds[Math.round(Math.random()*7)].play();
                buttonSizes[0] += buttonIncrease;
            }
            else{
                score --;
                misses ++;
            }
        }
        
        else{
            score --;
            misses ++;
        }
        
    }
    
    if (key == "b"){
        console.log("B key pressed");
        console.log(blocks[0][0]);
        if (blocks[0][0] == 1){
            if (blocks[0][1] >= 800 - 100){
                score += 2;
                blocks.splice(0, 1);
                sounds[Math.round(Math.random()*7)].play();
                buttonSizes[1] += buttonIncrease;
            }
            else{
                score --;
                misses ++;
            }
        }
        
        else{
            score --;
            misses ++;
        }
    }
    
    if (key == "n"){
        if (blocks[0][0] == 2){
            if (blocks[0][1] >= 800 - 100){
                score += 2;
                blocks.splice(0, 1);
                sounds[Math.round(Math.random()*7)].play();
                buttonSizes[2] += buttonIncrease;
            }
            else{
                score --;
                misses ++;
            }
        }
        
        else{
            score --;
            misses ++;
        }
    }
    
    if (key == "m"){
        if (blocks[0][0] == 3){
            if (blocks[0][1] >= 800 - 100){
                score += 2;
                blocks.splice(0, 1);
                sounds[Math.round(Math.random()*7)].play();
                buttonSizes[3] += buttonIncrease;
            }
            else{
                score --;
                misses ++;
            }
        }
        
        else{
            score --;
            misses ++;
        }
    }
    

    if (misses >= 20 && key == "r"){
      score = 0;
      speed = 2;
      misses = 0;
      blocks = [];
      falling = setInterval(fallingBlocks, 50/3);
    }
       
}