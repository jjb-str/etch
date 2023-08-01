const container = document.querySelector('#container');

let gridSize = 16;
let mosiacMode = false;

function reset() {
    let squares = document.querySelectorAll('.grid');
    squares.forEach((square) => square.style = 'color:black;')
    gridSize = parseInt(prompt('Enter new size grid', '16'));
    if (checkIfValid(gridSize)) {
        deleteGrid()
        makeGrid(gridSize)
    }
    else {
        return;
    }

}

function checkIfValid(size) {
    if ((size > 0) && (size <= 100)){
        return true;
    } else {
        alert('Invalid Input! Size must be between 1-100');
        return false;
    }
}

function makeGrid(GRID_SIZE) {
    let gridWidth = 940 / gridSize
    for (let i = 0;  i < GRID_SIZE; i++) {
        const row = document.createElement('div')
        row.classList.add('row');
        container.appendChild(row)
        for(let i = 0; i < GRID_SIZE; i++) {
            let grid = document.createElement('div');
            grid.classList.add('grid');
            grid.style = `width:${gridWidth}px; height:${gridWidth}px;`;
            grid.addEventListener('mouseover', function (e) { e.target.style.background = mosiacMode? randomColor() : 'blue'; console.log(randomColor())})
            row.appendChild(grid);
        }
    } 
}

function randomColor() {
    ranNum = Math.floor(Math.random() * 4);
    switch(ranNum) {
        case 0: return '#e7eaf6';
        case 1: return '#a2a8d3';
        case 2: return '#38598b';
        case 3: return '#113f67';
    }
}

function deleteGrid(){
    squares = document.querySelectorAll('.row');
    squares.forEach((row) => row.remove())
}

function toggleMosiac(mosiacButton) {
    mosiacMode? mosiacMode = false : mosiacMode = true;
    mosiacButton.textContent = `Mosiac Mode: ${mosiacMode? 'On' : 'Off'}`
}

resetButton = document.createElement('button');
resetButton.classList.add('reset-btn');
resetButton.textContent = 'RESET'
resetButton.addEventListener('click', function () {reset()})
container.appendChild(resetButton);

mosiacButton = document.createElement('button');
mosiacButton.classList.add('mosiac-btn');

mosiacButton.addEventListener('click', function () {toggleMosiac(mosiacButton)})
mosiacButton.textContent = `Mosiac Mode: ${mosiacMode? 'On' : 'Off'}`
container.appendChild(mosiacButton);

makeGrid(gridSize);




