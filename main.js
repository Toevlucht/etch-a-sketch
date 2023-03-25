const gridContainer = document.querySelector('.grid-container');
let isMouseDown = false;
let lastSelectedSize = 16;
let currentColor = "black";

//create a new grid based on variable 'numbSquares'
function createGrid(numbSquares) {
    lastSelectedSize = numbSquares;

    for (let i = 0; i < numbSquares * numbSquares; i++) {
        const square = document.createElement('div');
        square.classList.add('square')
        gridContainer.style.gridTemplateColumns = `repeat(${numbSquares}, 1fr)`;
        gridContainer.style.gridTemplateRows = `repeat(${numbSquares}, 1fr)`;
        gridContainer.appendChild(square);

        square.addEventListener('mousedown', () => {
            isMouseDown = true;
            draw(square);
        });

        square.addEventListener('mouseover', function() {
            if (isMouseDown) {
                draw(square);
            }
        });

        square.addEventListener('mouseup', function() {
            isMouseDown = false;
        });
    }
}

function draw(square) {
    if (currentColor === "random") {
        setRandomColor(square);
    } else if (currentColor === "white") {
        square.style.backgroundColor = currentColor;
    } else {
        square.style.backgroundColor = currentColor;
    }
};

function deleteGrid () {
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }
}

//get new grid-size number
const grid = document.querySelector('#new-grid')
grid.addEventListener('click', function() {
    let numbSquares;

    while (true) {
        let askSquares = prompt('Enter the number of squares per side (max. 100)');
        numbSquares = parseInt(askSquares);

        if (!isNaN(numbSquares) && (numbSquares <= 100)) {
            break;
        } 
        
        alert ("invalid input, please enter a number (max. 100)");
        return numbSquares;  
    }

    deleteGrid();
    createGrid(numbSquares);

});

//reset the sketch and set to last selected amount of pixels
const reset = document.querySelector('#reset') 
reset.addEventListener('click', function() {
    deleteGrid();
    createGrid(lastSelectedSize);
});


//generate a random rgb color
const randomColor = document.querySelector('#random-color');
randomColor.addEventListener('click', () => {
    if (randomColor.textContent === "Random color") {
        randomColor.textContent = "Black stylus";
        currentColor = "random";
    } else {
        randomColor.textContent = "Random color";
        currentColor = "black";
    }

});

//set random rgb as random color
function setRandomColor(square) {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    square.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
};

//set eraser button
const eraserBtn = document.querySelector('#eraser');
eraserBtn.addEventListener('click', () => {
    currentColor = "white"
})

//create initial grid
createGrid(16);
