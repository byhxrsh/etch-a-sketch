const parentContainer = document.querySelector('#container');

for (let i = 0; i < 256; i++) {
  let childDiv = document.createElement('div');
	childDiv.className = 'childDiv';
	parentContainer.appendChild(childDiv);

  childDiv.addEventListener('mouseover', () => {
    let randomInt = Math.floor(Math.random() * 5);
    
    if (randomInt === 0) {
      childDiv.style.backgroundColor = 'rgb(255, 0, 0)';
    } else if (randomInt === 1) {
      childDiv.style.backgroundColor = 'rgb(60, 179, 113)';
    } else if (randomInt === 2) {
      childDiv.style.backgroundColor = 'rgb(238, 130, 238)';
    } else if (randomInt === 3) {
      childDiv.style.backgroundColor = 'rgb(106, 90, 205)';
    } else {
      childDiv.style.backgroundColor = 'rgb(255, 165, 0)';
    }
  });
};

const btn = document.querySelector('#select');
const superContainer = document.querySelector('#superContainer');

btn.addEventListener('click', (event) => {
  let storeInput = prompt('enter a valid size!', 16);
  let totalCells = storeInput ** 2;

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
        let randomInt = Math.floor(Math.random() * 5);
    
        if (randomInt === 0) {
          gridCell.style.backgroundColor = 'rgb(255, 0, 0)';
        } else if (randomInt === 1) {
          gridCell.style.backgroundColor = 'rgb(60, 179, 113)';
        } else if (randomInt === 2) {
          gridCell.style.backgroundColor = 'rgb(238, 130, 238)';
        } else if (randomInt === 3) {
          gridCell.style.backgroundColor = 'rgb(106, 90, 205)';
        } else {
          gridCell.style.backgroundColor = 'rgb(255, 165, 0)';
        }
      }); 
    };
  } else {
    alert('invalid size selection.');
  };

});