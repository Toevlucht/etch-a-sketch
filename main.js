const gridContainer = document.querySelector('.container');
for (let i = 0; i < 256; i++) {
    const gridItem = document.createElement('div');
    gridItem.className = 'grid'
    gridContainer.appendChild(gridItem);

    const grids = document.querySelectorAll('.grid');
    grids.forEach(gridItem => {
        gridItem.addEventListener('mouseover', () => {
            gridItem.style.backgroundColor = 'black'
        });

        gridItem.addEventListener('mouseleave', () => {
            gridItem.style.backgroundColor = 'white';
        });
    });
}

