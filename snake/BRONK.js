const canvas = document.getElementById('game');
const context = canvas.getContext('2d');
const box = 20;
let score = 0;
let snake = [];
snake[0] = { x: 10 * box, y: 10 * box };
let food = {
    x: Math.floor(Math.random() * 20) * box,
    y: Math.floor(Math.random() * 20) * box
};
let d;

document.addEventListener('keydown', direction);

function direction(event) {
    if (event.keyCode === 37 && d !== 'RIGHT') d = 'LEFT';
    if (event.keyCode === 38 && d !== 'DOWN') d = 'UP';
    if (event.keyCode === 39 && d !== 'LEFT') d = 'RIGHT';
    if (event.keyCode === 40 && d !== 'UP') d = 'DOWN';
}


function draw() {
    context.fillStyle = 'rgb(0, 191, 255)';
    context.fillRect(0, 0, 400, 400);

    for (let i = 0; i < snake.length; i++) {
        context.fillStyle = i === 0 ? 'black' : 'white';
        context.fillRect(snake[i].x, snake[i].y, box, box);
        context.strokeStyle = 'black';
        context.strokeRect(snake[i].x, snake[i].y, box, box);
    }

    context.fillStyle = 'red';
    context.fillRect(food.x, food.y, box, box);

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    if (d === 'LEFT') snakeX -= box;
    if (d === 'UP') snakeY -= box;
    if (d === 'RIGHT') snakeX += box;
    if (d === 'DOWN') snakeY += box;

    if (snakeX === food.x && snakeY === food.y) {
        score++;
        food = {
            x: Math.floor(Math.random() * 20) * box,
            y: Math.floor(Math.random() * 20) * box
        };
    } else {
        snake.pop();
    }

    const newHead = { x: snakeX, y: snakeY };

    if (
        snakeX < 0 ||
        snakeY < 0 ||
        snakeX >= 20 * box ||
        snakeY >= 20 * box ||
        collision(newHead, snake)
    ) {
        clearInterval(game);
    }

    snake.unshift(newHead);

    context.fillStyle = 'white';
    context.font = '45px Changa one';
    context.fillText(score, 2 * box, 1.6 * box);
}

function collision(head, array) {
    for (let i = 0; i < array.length; i++) {
        if (head.x === array[i].x && head.y === array[i].y) return true;
    }
    return false;
}

let game;

function startGame() {
    game = setInterval(draw, 100);
}

startGame();

function expandButton() {
    const button = document.getElementById('start-btn');
    button.style.padding = '15px 25px';
    button.style.fontSize = '18px';
}

function shrinkButton() {
    const button = document.getElementById('start-btn');
    button.style.padding = '10px 20px';
    button.style.fontSize = '16px';
}


function restartGame() {
    clearInterval(game);
    // Resetting the game variables
    snake = [{ x: 10 * box, y: 10 * box }];
    score = 0;
    food = {
        x: Math.floor(Math.random() * 20) * box,
        y: Math.floor(Math.random() * 20) * box
    };
    d = undefined;
    
    // Clearing previous game interval
    clearInterval(game);

    // Starting the game loop again
    game = setInterval(draw, 100);
}