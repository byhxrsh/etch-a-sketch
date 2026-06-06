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

btn.addEventListener('click', (event) => {
  parentContainer.remove();

  let storeInput = prompt('enter a valid size!', 16);
  let totalCells = storeInput ** 2;
  console.log(storeInput);
  console.log(totalCells);

  if (storeInput <= 100) {
    const updatedContainer = document.createElement('div');
    updatedContainer.setAttribute('id', 'addContainer');
    document.body.appendChild(updatedContainer);

    for (i = 0; i < totalCells; i++) {
      let gridCell = document.createElement('div');
	    gridCell.className = 'cell';
	    updatedContainer.appendChild(gridCell);

      gridCell.addEventListener('mouseover', () => {
        gridCell.style.backgroundColor = 'black';
      }); 
    };
  } else {
    alert('invalid size selection.');
  }

});