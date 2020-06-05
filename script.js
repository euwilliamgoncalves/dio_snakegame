let canvas = document.getElementById("snake")
let context = canvas.getContext("2d")
let box = 8
let snake = []

snake[0] = {
    x: 8 * box,
    y: 8 * box
}

let direction = "right"

let food = {
    x: Math.floor(Math.random() * 49 + 1) * box,
    y: Math.floor(Math.random() * 49 + 1) * box
}

function criarBG() {
    context.fillStyle = "#cccccc"
    context.fillRect(0, 0, 50 * box, 50 * box)
}

function criarCobrinha() {
    for (i=0; i < snake.length; i++) {
        context.fillStyle = "#131313"
        context.fillRect(snake[i].x, snake[i].y, box, box)
    }
}

function drawFood(){
    context.fillStyle = "#ff4b4b"
    context.fillRect(food.x, food.y, box, box)
}

document.addEventListener("keydown", update);

function update (event) {
    if (event.keyCode == 37 && direction != "right") direction = "left"
    if (event.keyCode == 39 && direction != "left") direction = "right"
    if (event.keyCode == 38 && direction != "down") direction = "up"
    if (event.keyCode == 40 && direction != "up") direction = "down"
}

function iniciarJogo() {
    if (snake[0].x > 49 * box && direction == "right") snake[0].x = 0
    if (snake[0].x < 0 * box && direction == "left") snake[0].x = 49 * box
    if (snake[0].y > 49 * box && direction == "down") snake[0].y = 0
    if (snake[0].y < 0 * box && direction == "up") snake[0].y = 49 * box
    criarBG()
    criarCobrinha()
    drawFood()

    let snakeX = snake[0].x
    let snakeY = snake[0].y

    if (direction == "right") snakeX += box
    if (direction == "left") snakeX -= box
    if (direction == "up") snakeY -= box
    if (direction == "down") snakeY += box

    if (snakeX != food.x || snakeY != food.y) {
        snake.pop()
    }else{
        food.x = Math.floor(Math.random() * 49 + 1) * box,
        food.y = Math.floor(Math.random() * 49 + 1) * box
    }    

    let newHead = {
        x: snakeX,
        y: snakeY
    }

    snake.unshift(newHead)
}

let tempo = 100

let jogo = setInterval(iniciarJogo, tempo)