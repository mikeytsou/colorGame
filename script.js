let numOfSquares = 6;
let pickedColor;
let colors = [];
let squares = document.querySelectorAll('.square');
let colorDisplay = document.querySelector('#color-display');
let messageDisplay = document.querySelector('#message');
let h1 = document.querySelector('h1');
let resetButton = document.querySelector('#reset');
let modeButtons = document.querySelectorAll('.mode');

init();

function init() {
  // MODE LISTENER
  for (var i = 0; i < modeButtons.length; i += 1) {
    modeButtons[i].addEventListener('click', function() {
      modeButtons[0].classList.remove('selected');
      modeButtons[1].classList.remove('selected');
      this.classList.add('selected');
      this.textContent === "Easy" ? numOfSquares = 3 : numOfSquares = 6
      reset();
    });
  }

  // SQUARE LISTENER
  for (var i = 0; i < squares.length; i += 1) {
    // squares[i].style.backgroundColor = colors[i];
    squares[i].addEventListener('click', function() {
      let clickedColor = this.style.backgroundColor;
      console.log(clickedColor, pickedColor)
      if (clickedColor === pickedColor) {
        messageDisplay.textContent = 'Correct!'
        changeColors(clickedColor);
        h1.style.backgroundColor = clickedColor;
        resetButton.textContent = 'Play Again?';
      } else {
        this.style.backgroundColor = '#232323'
        messageDisplay.textContent = 'Try Again'
      }
    });
  }
  reset();
}

function reset() {
  colors = generateRandomColors(numOfSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  h1.style.backgroundColor = 'steelblue';
  messageDisplay.textContent = '';
  resetButton.textContent = 'New Colors';
  for (var i = 0; i < squares.length; i += 1) {
    if (colors[i]) {
      squares[i].style.display = 'block';
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = 'none';
    }
  }
}

// REFACTORED
// easyButton.addEventListener('click', function() {
//   hardButton.classList.remove('selected');
//   this.classList.add('selected');
//   numOfSquares = 3;
//   colors = generateRandomColors(numOfSquares);
//   pickedColor = pickColor();
//   colorDisplay.textContent = pickedColor;
//   messageDisplay.textContent = '';
//   resetButton.textContent = 'New Colors';
//   h1.style.backgroundColor = 'steelblue';
//   for (var i = 0; i < squares.length; i += 1) {
//     if (colors[i]) {
//       squares[i].style.backgroundColor = colors[i];
//     } else {
//       squares[i].style.display = 'none';
//     }
//   }
// });

// hardButton.addEventListener('click', function() {
//   easyButton.classList.remove('selected');
//   this.classList.add('selected');
//   numOfSquares = 6;
//   colors = generateRandomColors(numOfSquares);
//   pickedColor = pickColor();
//   colorDisplay.textContent = pickedColor;
//   messageDisplay.textContent = '';
//   resetButton.textContent = 'New Colors';
//   h1.style.backgroundColor = 'steelblue';
//   for (var i = 0; i < squares.length; i += 1) {
//     squares[i].style.backgroundColor = colors[i];
//     squares[i].style.display = 'block';
//   }
// });

resetButton.addEventListener('click', function() {
  reset();
  // REFACTORED
  // colors = generateRandomColors(numOfSquares);
  // pickedColor = pickColor();
  // colorDisplay.textContent = pickedColor;
  // h1.style.backgroundColor = 'steelblue';
  // messageDisplay.textContent = '';
  // this.textContent = 'New Colors';
  // for (var i = 0; i < squares.length; i += 1) {
  //   squares[i].style.backgroundColor = colors[i];
  // }
});

// colorDisplay.textContent = pickedColor;

function changeColors(color) {
  for (var i = 0; i < squares.length; i += 1) {
    squares[i].style.backgroundColor = color;
  }
}

function pickColor() {
  let random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num) {
  let arr = [];
  for (var i = 0; i < num; i += 1) {
    arr.push(randomColor());
  }
  return arr;
}

function randomColor() {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);
  return `rgb(${red}, ${green}, ${blue})`;
}