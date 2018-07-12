class Enemy {
    constructor(x, y, speed) {
        this.sprite = 'images/enemy-bug.png';
        this.x = x;
        this.y = y;
        this.speed = speed;
    }

    update(dt, speed) {
        this.x += this.speed;

        if (this.x > 500) {
            this.x = 0;
        }
    }

    render(x, y) {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
}

class Player {
    constructor(x, y) {
        this.sprite = 'images/char-boy.png';
        this.x = x;
        this.y = y;
    }

    update() {
    }

    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }

    handleInput(key) {
        switch(key) {
           case 'up':
           case 'w':
                this.y -= 80;
                break;
            case 'down':
            case 's':
                    this.y += 80;
                    break;
            case 'left':
            case 'a':
                    this.x -= 80;
                    break;
            case 'right':
            case 'd':
                    this.x += 80;
                    break;
        } 
    }
}

const enemy1 = new Enemy(180, 50, 2);
const enemy2 = new Enemy(280, 140, 4);
const enemy3 = new Enemy(100, 140, 4);
const enemy4 = new Enemy(150, 220, 6);

const allEnemies = [enemy1, enemy2, enemy3, enemy4];

const player = new Player(200, 370);


// Enemies our player must avoid
/*var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

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
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};*/

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down',
        87: 'w',
        65: 'a',
        83: 's',
        68: 'd',
        32: 'spacebar'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
