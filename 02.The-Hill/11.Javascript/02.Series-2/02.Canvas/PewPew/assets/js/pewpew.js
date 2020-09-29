let canvasBack = document.getElementById('canvasBack');
let canvasFront = document.getElementById('canvasFront');
let canvasUI = document.getElementById('canvasUI');
let ctxBack = canvasBack.getContext("2d");
let ctxFront = canvasFront.getContext("2d");
let ctxUI = canvasUI.getContext("2d");
let game;

(localStorage.length === 0) && localStorage.setItem('highscores', [['Bastien', 10]]);

class Game {
    constructor() {
        this.user = window.prompt('Enter your name');
        this.highscores = this.getHighscores();
        this.score = 0;
        this.gameInterval = setInterval(gameLoop, 25);
        this.timer = 30;
        this.timerInterval = setInterval(gameTimer, 1000);
        this.crossbow = new Crossbow(canvasBack.width/2);
        this.bolt = new Bolt(canvasBack.width/2);
        this.target = new Target(randomPosition(), 100);
    }
    
    drawUI() {
        ctxUI.font = '30px Arial';
        ctxUI.textAlign = 'center';
        ctxUI.beginPath();
        ctxUI.moveTo(140,0);
        ctxUI.lineTo(140,canvasUI.height);
        ctxUI.closePath();
        ctxUI.stroke();
        ctxUI.beginPath();
        ctxUI.moveTo(canvasUI.width-140,0);
        ctxUI.lineTo(canvasUI.width-140,canvasUI.height);
        ctxUI.closePath();
        ctxUI.stroke();
        ctxUI.fillText('Score', 70, 40);
        ctxUI.fillText('Timer', canvasUI.width-70, 40);
        ctxUI.fillText(this.score, 70, 80);
        ctxUI.fillText(this.timer, canvasUI.width-70, 80);
        ctxUI.fillText('Top', 70, 150);
        let y = 0;
        if (this.highscores !== '') {
            this.highscores.forEach(highscore => {
                ctxUI.fillText(highscore[0], 70, 200+y);
                y = y + 50;
                ctxUI.fillText(highscore[1], 70, 200+y);
                y = y + 50;
            })
        }
    }

    updateScore() {
        ctxUI.clearRect(0, 50, 139, 50);
        this.score++;
        ctxUI.fillText(this.score, 70, 80);
    }

    updateTimer() {
        ctxUI.clearRect(canvasUI.width-139, 50, 139, 50);
        this.timer--;
        ctxUI.fillText(this.timer, canvasUI.width-70, 80);
    }

    init() {
        document.addEventListener('keydown', controls);
        ctxBack.clearRect(0, 0, canvasBack.width, canvasBack.height);
        ctxFront.clearRect(0, 0, canvasFront.width, canvasFront.height);
        ctxUI.clearRect(0, 0, canvasUI.width, canvasUI.height);
        this.crossbow.drawCrossbow();
        this.bolt.drawBolt();
        this.target.drawTarget();
    }

    stop() {
        document.removeEventListener('keydown', controls);
        clearInterval(this.gameInterval);
        clearInterval(this.timerInterval);
    }

    getHighscores() {
        let local = localStorage.getItem('highscores').split(';');
        let highscoresArray = [];
        local.forEach(highscore => highscoresArray.push(highscore.split(',')));
        return highscoresArray;
    }

    setHighscores() {
        let highscoresString = '';
        this.highscores.forEach(highscore => {
            this.highscores.indexOf(highscore) !== 0 && (highscoresString = highscoresString + ';');
            highscoresString = highscoresString + highscore[0] + ',' + highscore[1];
        });
        localStorage.setItem('highscores', highscoresString);
    }

    checkHighscores() {
        const scoresNb = 3;
        let userscore = [this.user, this.score];
        for (let i = 0; i < this.highscores.length; i++) {
            if (userscore[1] > parseInt(this.highscores[i][1], 10)) {
                this.highscores.splice(i, 0, userscore);
                break;
            }
        }
        this.highscores.length > scoresNb && this.highscores.splice(scoresNb, this.highscores.length - scoresNb);
        (this.highscores.length < scoresNb && !this.highscores.includes(userscore)) && this.highscores.push(userscore);
        this.setHighscores();
    }
}

class Crossbow {
    constructor(xPos) {
        this.xPos = xPos;
    }

    strafe(x) {
        this.clearCrossbow();
        this.xPos = this.xPos + x;
        this.drawCrossbow();
    }

    drawCrossbow() {
        ctxBack.beginPath();
        ctxBack.moveTo(this.xPos-10,canvasBack.height);
        ctxBack.lineTo(this.xPos-10,canvasBack.height-60);
        ctxBack.lineTo(this.xPos,canvasBack.height-65);
        ctxBack.lineTo(this.xPos+10,canvasBack.height-60);
        ctxBack.lineTo(this.xPos+10,canvasBack.height);
        ctxBack.closePath();
        ctxBack.fillStyle = "brown";
        ctxBack.fill();
        ctxBack.beginPath();
        ctxBack.arc(this.xPos,canvasBack.height-21,40,0,Math.PI,true);
        ctxBack.closePath();
        ctxBack.lineWidth = 2;
        ctxBack.stroke();
    }

    clearCrossbow() {
        ctxBack.clearRect(0, canvasBack.height-65, canvasBack.width, canvasBack.height);
    }
}

class Bolt {
    constructor(xPos) {
        this.xPos = xPos;
        this.yPos = canvasBack.height-61;
        this.shot = false;
    }

    travel() {
        this.clearBolt();
        this.yPos = this.yPos - 10;
        this.drawBolt();
    }

    strafe(x) {
        this.clearBolt();
        this.xPos = this.xPos + x;
        this.drawBolt();
    }

    drawBolt() {
        ctxFront.lineWidth = 1;
        ctxFront.beginPath();
        ctxFront.moveTo(this.xPos,this.yPos);
        ctxFront.lineTo(this.xPos-8,this.yPos+16);
        ctxFront.lineTo(this.xPos+8,this.yPos+16);
        ctxFront.closePath();
        ctxFront.fillStyle = "grey";
        ctxFront.fill();
        ctxFront.lineWidth = 5;
        ctxFront.beginPath();
        ctxFront.moveTo(this.xPos,this.yPos+16);
        ctxFront.lineTo(this.xPos,this.yPos+40);
        ctxFront.closePath();
        ctxFront.stroke();
    }

    clearBolt() {
        ctxFront.clearRect(this.xPos-8, this.yPos, 16, 44);
    }
}

class Target {
    constructor(xPos, yPos) {
        this.xPos = xPos;
        this.yPos = yPos;
        this.moveRight = Math.random() < 0.5;
    }

    changeDirection() {
        this.moveRight = !this.moveRight;
    }

    strafe() {
        this.clearTarget();
        this.moveRight ? this.xPos = this.xPos - 5 : this.xPos = this.xPos + 5;
        this.drawTarget();
    }

    drawTarget() {
        ctxBack.lineWidth = 1;
        ctxBack.beginPath();
        ctxBack.arc(this.xPos,this.yPos,50,0,Math.PI*2,false);
        ctxBack.closePath();
        ctxBack.stroke();
        ctxBack.beginPath();
        ctxBack.arc(this.xPos,this.yPos,50,0,Math.PI*2,false);
        ctxBack.closePath();
        ctxBack.fillStyle = "red";
        ctxBack.fill();
        ctxBack.beginPath();
        ctxBack.arc(this.xPos,this.yPos,35,0,Math.PI*2,false);
        ctxBack.closePath();
        ctxBack.stroke();
        ctxBack.beginPath();
        ctxBack.arc(this.xPos,this.yPos,35,0,Math.PI*2,false);
        ctxBack.closePath();
        ctxBack.fillStyle = "white";
        ctxBack.fill();
        ctxBack.beginPath();
        ctxBack.arc(this.xPos,this.yPos,15,0,Math.PI*2,false);
        ctxBack.closePath();
        ctxBack.stroke();
        ctxBack.beginPath();
        ctxBack.arc(this.xPos,this.yPos,15,0,Math.PI*2,false);
        ctxBack.closePath();
        ctxBack.fillStyle = "red";
        ctxBack.fill();
    }

    clearTarget() {
        ctxBack.clearRect(this.xPos-51, this.yPos-51, 102, 102);
    }
}

document.getElementById('start').addEventListener('click', start);

function start() {
    game && game.stop();
    game = new Game();
    game.init();
    game.drawUI();
}

function gameLoop() {
    if (game.target.xPos <= 200 || game.target.xPos >= 700) {
        game.target.changeDirection();
    }
    game.target.strafe();
    if (game.bolt.shot) {
        if (Math.abs(game.bolt.xPos-game.target.xPos) < 50 && Math.abs(game.bolt.yPos-game.target.yPos) < 25) {
            game.updateScore();
            game.bolt.clearBolt();
            game.bolt = new Bolt(game.crossbow.xPos);
            game.bolt.drawBolt();
            game.target.clearTarget();
            game.target = new Target(randomPosition(), 100);
            game.target.drawTarget();
        } else if (game.bolt.yPos > 0) {
            game.bolt.travel();
        } else {
            game.bolt.clearBolt();
            game.bolt = new Bolt(game.crossbow.xPos);
            game.bolt.drawBolt();
        }
    }
}

function gameTimer() {
    if (game.timer > 0) {
        game.updateTimer();
    } else {
        game.stop();
        game.checkHighscores();
    }
}

function controls() {
    let key = event.code;
    if ((key === 'ArrowLeft' || key === 'KeyA') && game.crossbow.xPos > 200) {
        game.crossbow.strafe(-5)
        !game.bolt.shot && game.bolt.strafe(-5);
    }
    if ((key === 'ArrowRight' || key === 'KeyD') && game.crossbow.xPos < canvasBack.width - 200) {
        game.crossbow.strafe(5);
        !game.bolt.shot && game.bolt.strafe(5);
    }
    if (key === 'Space') {
        game.bolt.shot = true;
    }
}


function randomPosition() {
    return (Math.floor(Math.random()*500) + 200);
}