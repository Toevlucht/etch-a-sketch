const gridContainer = document.querySelector('.grid-container');
let isMouseDown = false;
let lastSelectedSize = 16;
let size = 16;
let currentColor = "black";


//create a new grid based on variable 'numbSquares'
function createGrid(size) {
    lastSelectedSize = size;

    for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div');
        square.classList.add('square')
        gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
        gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;
        gridContainer.appendChild(square);

        //if mousedown, draw
        square.addEventListener('mousedown', () => {
            isMouseDown = true;
            draw(square);
        });

        //also draw in case of mouseover, if isMouseDown is true
        square.addEventListener('mouseover', () => {
            if (isMouseDown) {
                draw(square);
            }
        });

        //stop drawing when releasing 'click'
        square.addEventListener('mouseup', () => {
            isMouseDown = false;
        });
    }
}

//draw function
function draw(square) {
    if (currentColor === "random") {
        setRandomColor(square);
    } else if (currentColor === "white") {
        square.style.backgroundColor = currentColor;
    } else {
        square.style.backgroundColor = currentColor;
    }
};

//delete grid
function deleteGrid () {
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }
}


const rangeDisplay = document.querySelector('#range-display')
rangeDisplay.textContent = `${size} x ${size}`

//get new grid-size number
const grid = document.querySelector('#new-grid')

grid.addEventListener('input', () => {
    const gridSize = grid.value;
    updateGrid(gridSize);
});

function updateGrid(size) {
    rangeDisplay.textContent = `${size} x ${size}`
    deleteGrid();
    createGrid(size);
}

//reset the sketch and set to last selected amount of pixels
const reset = document.querySelector('#reset') 
reset.addEventListener('click', function() {
    deleteGrid();
    createGrid(lastSelectedSize);
});


//generate a random rgb color
const randomColor = document.querySelector('#random-color');
randomColor.addEventListener('click', () => {
    if (randomColor.textContent === "Rainbow stylus") {
        randomColor.textContent = "Black stylus";
        currentColor = "random";
    } else {
        randomColor.textContent = "Rainbow stylus";
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

//pick a color using colorPicker
const colorPicker = document.getElementById('colorPicker')
colorPicker.addEventListener('input', function() {
    currentColor = colorPicker.value;
});

//create initial grid
createGrid(16);
