const gridContainer = document.querySelector('.grid-container');
let isMouseDown = false;

function createGrid(numbSquares) {
    for (let i = 0; i < numbSquares * numbSquares; i++) {
        const square = document.createElement('div');
        square.classList.add('square')
        gridContainer.style.gridTemplateColumns = `repeat(${numbSquares}, 1fr)`;
        gridContainer.style.gridTemplateRows = `repeat(${numbSquares}, 1fr)`;
        gridContainer.appendChild(square);

        square.addEventListener('mousedown', function() {
            isMouseDown = true;
            this.style.backgroundColor = "black";
        });

        square.addEventListener('mouseover', function() {
            if (isMouseDown) {
                this.style.backgroundColor = "black";
            }
        });

        square.addEventListener('mouseup', function() {
            isMouseDown = false;
        });
    }
}

function deleteGrid () {
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }
}

const btn = document.querySelector('.btn')
btn.addEventListener('click', function() {
    let numbSquares;

    while (true) {
        let askSquares = prompt('Enter the number of squares per side (max. 100)');
        numbSquares = parseInt(askSquares);

        if (!isNaN(numbSquares) && (numbSquares <= 100)) {
            break;
        } 
        
        alert ("invalid input, please enter a number (max. 100)");
        
    }

    deleteGrid();
    createGrid(numbSquares);

});

createGrid(16);
