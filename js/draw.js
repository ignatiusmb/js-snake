var drawModule = (function () {
  var bodySnake = function (x, y) {
    playground.fillStyle = "darkgreen";
    playground.fillRect(x * snakeSize, y * snakeSize, snakeSize, snakeSize);
    playground.strokeStyle = "black";
    playground.strokeRect(x * snakeSize, y * snakeSize, snakeSize, snakeSize);
  };

  var pizza = function (x, y) {
    playground.fillStyle = "black";
    playground.fillRect(x * snakeSize, y * snakeSize, snakeSize, snakeSize);
    playground.fillStyle = "firebrick";
    playground.fillRect(
      x * snakeSize + 1,
      y * snakeSize + 1,
      snakeSize - 2,
      snakeSize - 2
    );
  };

  /**
   * Scoreboard
   */
  var scoreText = function () {
    scoreboard.fillStyle = "grey";
    scoreboard.fillRect(0, 0, w, 40);
    scoreboard.font = "20px Verdana";
    var score_text = "Score: " + score;
    scoreboard.fillStyle = "blue";
    scoreboard.fillText(score_text, w / 2 - 50, 27);
  };

  /**
   * Generate Snake Body
   */
  var drawSnake = function () {
    var length = 4;
    snake = [];
    for (var i = length - 1; i >= 0; i--) {
      snake.push({
        x: i,
        y: 0
      });
    }
  };

  /**
   * Playground
   */
  var paint = function () {
    playground.fillStyle = "darkolivegreen";
    playground.fillRect(0, 0, w, h);
    playground.strokeStyle = "black";
    playground.strokeRect(0, 0, w, h);

    btn.setAttribute("disabled", true);

    var snakeX = snake[0].x;
    var snakeY = snake[0].y;

    if (direction == "right") {
      ++snakeX;
    } else if (direction == "left") {
      --snakeX;
    } else if (direction == "up") {
      --snakeY;
    } else if (direction == "down") {
      ++snakeY;
    }

    if (
      snakeX == -1 ||
      snakeX == w / snakeSize ||
      snakeY == -1 ||
      snakeY == h / snakeSize ||
      checkCollision(snakeX, snakeY, snake)
    ) {
      //restart game
      btn.removeAttribute("disabled", true);

      playground.clearRect(0, 0, w, h);
      scoreboard.clearRect(0, 0, w, 40);
      score = 0;
      gameloop = clearInterval(gameloop);
      return;
    }

    if (snakeX == food.x && snakeY == food.y) {
      var tail = {
        x: snakeX,
        y: snakeY
      }; // Create a new head instead of moving the tail
      ++score;

      createFood(); // Create new food
    } else {
      var tail = snake.pop(); //pops out the last cell
      tail.x = snakeX;
      tail.y = snakeY;
    }
    //The snake can now eat the food.
    snake.unshift(tail); //puts back the tail as the first cell

    for (var i = 0; i < snake.length; i++) {
      bodySnake(snake[i].x, snake[i].y);
    }

    pizza(food.x, food.y);
    scoreText();
  };

  /**
   * Food Spawner
   */
  var createFood = function () {
    food = {
      x: Math.floor(Math.random() * 15 + 1),
      y: Math.floor(Math.random() * 15 + 1)
    };

    for (var i = 0; i > snake.length; i++) {
      var snakeX = snake[i].x;
      var snakeY = snake[i].y;

      if (
        (food.x === snakeX && food.y === snakeY) ||
        (food.y === snakeY && food.x === snakeX)
      ) {
        food.x = Math.floor(Math.random() * 15 + 1);
        food.y = Math.floor(Math.random() * 15 + 1);
      }
    }
  };

  /**
   * Collision Checker
   * 
   * @param {*} x 
   * @param {*} y 
   * @param {*} array 
   */
  var checkCollision = function (x, y, array) {
    for (var i = 0; i < array.length; i++) {
      if (array[i].x === x && array[i].y === y) {
        return true;
      }
    }
    return false;
  };

  /**
   * Initialize Game
   * 
   * @var gameloop increase value to slow snake's movement, decrease to speed up
   */
  var init = function () {
    direction = "down";
    drawSnake();
    createFood();
    gameloop = setInterval(paint, 120);
  };

  return {
    init: init
  };
})();