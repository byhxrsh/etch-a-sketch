const parentContainer = document.querySelector('#container');

for (let i = 0; i < 256; i++) {
  let childDiv = document.createElement('div');
	childDiv.className = 'childDiv';
	parentContainer.appendChild(childDiv);

  childDiv.addEventListener('mouseover', () => {
    childDiv.style.backgroundColor = 'black';
  });
};

const btn = document.querySelector('#select');
const superContainer = document.querySelector('#superContainer');

btn.addEventListener('click', (event) => {
  let storeInput = prompt('enter a valid size!', 16);
  let totalCells = storeInput ** 2;
  console.log(storeInput);
  console.log(totalCells);

  if (storeInput <= 100) {
    const updatedContainer = document.createElement('div');
    updatedContainer.setAttribute('id', 'addContainer');
    superContainer.replaceChildren(updatedContainer);
    let cellSize = ((580 - (storeInput - 1)) / storeInput);

    for (i = 0; i < totalCells; i++) {
      let gridCell = document.createElement('div');
	    gridCell.className = 'cell';
      gridCell.style.width = `${cellSize}px`;
      gridCell.style.height = `${cellSize}px`;
	    updatedContainer.appendChild(gridCell);

      gridCell.addEventListener('mouseover', () => {
        gridCell.style.backgroundColor = 'black';
      }); 
    };
  } else {
    alert('invalid size selection.');
  }

});