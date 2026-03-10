
function makeGrid(size) {
    let grid = document.querySelector('.grid');
    grid.innerHTML = ''; // Clear current grid
    for (let i=0; i < size; i++) {
        let column = document.createElement('div');
        column.classList.add('column');
        for (let j=1; j <= size; j++) {
            let row = document.createElement('div');
            row.classList.add('row');
            // row.style.border = `1px solid black`;
            // row.innerText = (i * size) + j;
            column.appendChild(row);
            row.addEventListener('mouseover', () => {
                row.style.backgroundColor = 'black';
            });
        }
        grid.appendChild(column); 
    }   
}

document.querySelector('.create-btn').addEventListener('click', () =>{
    let size = parseInt(prompt('Enter grid size:'), 10);
    makeGrid(size);
});



makeGrid(16);