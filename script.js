const parentContainer = document.querySelector(`#container`);

for (let i = 0; i < 256; i++) {
  let childDiv = document.createElement(`div`);
	childDiv.id = `childDiv`;
	parentContainer.appendChild(childDiv);
  
  childDiv.addEventListener(`mouseover`, () => {
    childDiv.style.backgroundColor = `black`;
  });
};
