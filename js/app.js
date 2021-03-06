// Enemies our player must avoid
var Enemy = function(pos) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x = 0;
    this.y = pos * 83;

    this.speed = getRandomInt(1, 3) * 100;

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x += this.speed * dt;
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function() {
    this.x = 202;
    this.y = 415;
    this.sprite = "images/char-boy.png";
};

Player.prototype.update = function() {
    // Check if collision happens!

    if (this.y < 83) {
        // Win!
        this.x = 202;
        this.y = 415;
    }
};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function(input) {
    if (input === "left") {
        if (this.x > 0) {
            this.x -= 25;
        }
    } else if (input === "up") {
        if (this.y > 0) {
            this.y -= 40;
        }
    } else if (input === "right") {
        if (this.x < 404) {
            this.x += 25;
        }
    } else if (input === "down") {
        if (this.y < 415) {
            this.y += 40;
        }
    }
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var allEnemies = [];
window.setInterval(function() {
    for (var i = 1; i < 4; i++) {
        allEnemies.push(new Enemy(i));
    }
}, 2000);
var player = new Player();


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}