var numSquares = 6;
var colors = generateColors(numSquares);
var pickedColor = pickColor();

var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetBtn = document.querySelector("#reset");
var modeBtns = document.querySelectorAll(".mode");

init();

function init() {
    modeSetup();
    eventSetup();
    reset();
}

function modeSetup() {
    //Mode btn event listners
    for (var i = 0; i < modeBtns.length; i++) {
        modeBtns[i].addEventListener("click", function() {
            modeBtns[0].classList.remove("selected");
            modeBtns[1].classList.remove("selected");
            this.classList.add("selected");

            // Change this if we want to add difficulties
            this.textContent === "Easy" ? numSquares = 3
                : this.textContent === "Medium" ? numSquares = 6
                : numSquares = 9;

            reset();
        });
    }
}

function eventSetup() {
    for (var i = 0; i < squares.length; i++) {
        // Add click listeners to squares
        squares[i].addEventListener("click", function() {
            var clickedColor = this.style.backgroundColor;
            // Compare
            if (clickedColor === pickedColor) {
                messageDisplay.textContent = "Correct!";
                resetBtn.textContent = "Play Again?";
                changeColors(clickedColor);
                h1.style.backgroundColor = clickedColor;
            } else {
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try Again!";
            }
        });
    };
}

function reset() {
    colors = generateColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    messageDisplay.textContent = "";

    for (var i = 0; i < squares.length; i++) {
        // If there is a color, create paint box else, set disp to none
        if(colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }

    h1.style.backgroundColor = "steelblue";
    resetBtn.textContent = "New Colors";
}

resetBtn.addEventListener("click", function() {
    reset();
});

function changeColors(color) {
    for (var i = 0; i < colors.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}

function pickColor() {
    var rand = Math.floor(Math.random() * colors.length);
    return colors[rand];
}

function generateColors(num) {
    var arr = [];
    for(var i = 0; i < num; i++) {
        arr.push(randomColor());
    }

    return arr;
}

function randomColor() {
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);

    return "rgb(" + red + ", " + green + ", " + blue + ")";
}


// easy.addEventListener("click", function() {
//     hard.classList.remove("selected");
//     easy.classList.add("selected");
//     numSquares = 3;
//     colors = generateColors(numSquares);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;
//     messageDisplay.textContent = "";

//     for (var i = 0; i < squares.length; i++) {
//         if(colors[i]) {
//             squares[i].style.backgroundColor = colors[i];
//         } else {
//             squares[i].style.display = "none";
//         }
//     }
// });

// hard.addEventListener("click", function() {
//     hard.classList.add("selected");
//     easy.classList.remove("selected");
//     numSquares = 6;
//     colors = generateColors(numSquares);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;
//     messageDisplay.textContent = "";

//     for (var i = 0; i < squares.length; i++) {
//         squares[i].style.backgroundColor = colors[i];
//         squares[i].style.display = "block";
//     }

// });