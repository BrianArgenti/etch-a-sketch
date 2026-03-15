
function randomNum() {return Math.floor(Math.random() * 255);}

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
                row.style.backgroundColor = `rgb(${randomNum()}, ${randomNum()}, ${randomNum()})`;
            });
        }
        grid.appendChild(column); 
    }   
}

document.querySelector('.create-btn').addEventListener('click', () =>{
    let size = parseInt(prompt('Enter grid size:'), 10);
    while ( isNaN(size) || size < 0 || size > 100) {
        size = parseInt(prompt('Invalid entry, please choose an integer between 1 and 100:'), 10);
        
    }
    console.log(isNaN(size));
    makeGrid(size);
});



makeGrid(16);