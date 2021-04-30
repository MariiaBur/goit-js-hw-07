const controlsInputEl = document.querySelector('#controls input');
const controlsRenderBtnEl = document.querySelector('[data-action="render"]');
const controlsDestroyBtnEl = document.querySelector('[data-action="destroy"]');
const boxesContainerEl = document.querySelector('#boxes');


let boxes = [];


const createBoxes = (amount) => {
    for (let i = 0; i < amount; i += 1) {
        const divEl = document.createElement('div');
        divEl.style.backgroundColor = "#" + ((1 << 24) * Math.random() | 0).toString(16);
        divEl.style.width = `${30 + 10 * i}px`;
        divEl.style.height = `${30 + 10 * i}px`;
        boxes.push(divEl);
    }
    boxesContainerEl.append(...boxes);
}    

const destroyBoxes = () => { 
    boxesContainerEl.innerHTML = '';
    boxes = [];
}

controlsRenderBtnEl.addEventListener('click', (event) => { 
    return createBoxes(controlsInputEl.value);
})

controlsDestroyBtnEl.addEventListener('click', destroyBoxes)