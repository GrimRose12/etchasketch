const grid = document.querySelector('.container');

for (let i = 0; i < 16; i++){
    const row = document.createElement('div');
    for (let j = 0; j < 16; j++) {
        const gridContent = document.createElement('div');
        gridContent.id = i.toString()+j.toString();
        // gridContent.textContent = i.toString()+j.toString();
        gridContent.classList.add('gridItem');
        row.appendChild(gridContent);


        gridContent.addEventListener('mouseover', function (){
            gridContent.style.background = 'red';
        })
    }
    grid.appendChild(row);
}

