# JS Snake Game
> A nostalgic remake of the classic snake game created with HTML5 canvas and JavaScript

## Getting Started

### Demo
[JS Snake Game](https://ignatiusmb.github.io/js-snake/)

### Docs
Our snake is a chain of elements (squares) and the movement is controlled by arrow keys which directs the head of the snake.

1. Create the canvas element in our html.
2. Draw the body of the snake and the food using canvases.
3. Create the structure of the snake and of the food.
4. Create a _checkCollision_ function to detect if the snake has touched itself.
5. Create the main function which has to run everything we need to play.
6. Use the _keyCode_ event to move the snake using the keyboard.

## Reproduce
### The Snake

1. Create the form of the snake.
2. Create the structure of the snake using the created form.
3. Bind the controls for the movement.

**Snake Form**
```js
var bodySnake = function(x, y) {
  // Single Square for the Snake
  playground.fillStyle = "darkgreen";
  playground.fillRect(x * snakeSize, y * snakeSize, snakeSize, snakeSize);
  // Border of the Square
  playground.strokeStyle = "black";
  playground.strokeRect(x * snakeSize, y * snakeSize, snakeSize, snakeSize);
};
```

**Snake Structure**
```js
var drawSnake = function() {
  // The Snake will initially have a body consisting of 5 squares
  var length = 4;
  snake = [];

  // With for loop, we push the 5 elements(squares) inside the array(snake).
  // Every element will have x = 0 and the y will take the value of the index.
  for (var i = length; i >= 0; i--) {
    snake.push({ x: i, y: 0 });
  }
};
```

**Snake Movement**
```js
var snakeX = snake[0].x;
var snakeY = snake[0].y;

if (direction == "right") {
  snakeX++;
} else if (direction == "left") {
  snakeX--;
} else if (direction == "up") {
  snakeY--;
} else if (direction == "down") {
  snakeY++;
}
```

**Inspired from [Competa](http://www.competa.com/blog/how-to-build-a-snake-game-using-javascript-and-html5-canvas/)**

### License
JS Snake Game is [MIT licensed](LICENSE)

---
<p align="center">
  <a href="https://ignatiusmb.github.io">ignatiusmb.io</a>
  &middot;
  <a href="www.imbagus.com">imbagus.com</a>
  &middot;
  <a href="https://github.com/ignatiusmb">GitHub</a>
  &middot;
  <a href="https://gitlab.com/ignatiusmb">GitLab</a>
</p>
