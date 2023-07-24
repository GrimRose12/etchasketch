const grid = document.querySelector('.container');


function createGrid(length) {
    for (let i = 0; i < length; i++){
        const column = document.createElement('div');
        for (let j = 0; j < length; j++) {
            const gridContent = document.createElement('div');
            gridContent.id = i.toString()+j.toString();
            //gridContent.textContent = i.toString()+j.toString();
            gridContent.classList.add('gridItem');
            column.appendChild(gridContent);
    
    
            gridContent.addEventListener('mouseover', function (){
                gridContent.style.background = getRandomRGB();
            })
        }
        column.classList.add('column');
        //row.style.display = 'flex';
        grid.appendChild(column);
    }
    
}

function getRandomRGB() {
    // Generate random values for red, green, and blue (0 to 255)
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
  
    // Return the RGB string format: "rgb(r, g, b)"
    return `rgb(${red}, ${green}, ${blue})`;
  }



createGrid(16);

const gridSize = document.querySelector('.gridSize');
gridSize.addEventListener('click', function () {
    const sideLength = parseInt(prompt("Enter number side length (max 100): "));
    if (sideLength > 100) {
        alert("Greater than 100, try again.");
        return;
    }

    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
    };

    createGrid(sideLength);
})
