const parentContainer = document.querySelector(`#container`);

for (let i = 0; i < 256; i++) {
  let childDivs = document.createElement(`div`);
	childDivs.id = `childDivs`;
	parentContainer.appendChild(childDivs);
};

