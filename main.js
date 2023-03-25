const gridContainer = document.querySelector('.grid-container');

function createGrid(numbSquares) {
    for (let i = 0; i < numbSquares * numbSquares; i++) {
        const square = document.createElement('div');
        square.classList.add('square')
        gridContainer.style.gridTemplateColumns = `repeat(${numbSquares}, 1fr)`;
        gridContainer.style.gridTemplateRows = `repeat(${numbSquares}, 1fr)`;
        gridContainer.appendChild(square);
    }

    const squares = document.querySelectorAll('.square');
    squares.forEach(square => {
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = 'black'
            square.style.transition = 'background 0.2s ease'; 
        });
        square.addEventListener('mouseleave', () => {
            square.style.backgroundColor = 'white'
            square.style.transition = 'background-color black 0.2s ease'; 
        });
    })
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
