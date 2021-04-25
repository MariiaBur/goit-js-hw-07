let counterValue = 0;
const counterEl = document.querySelector('#value');
const incrementBtnEl = document.querySelector('button[data-action=increment]');
const decrementBtnEl = document.querySelector('button[data-action=decrement]');

const onIncrementBtnClick = () => {
    counterValue += 1;
    counterEl.textContent = counterValue;
}

const onDecrementBtnClick = () => {
    counterValue -= 1;
    counterEl.textContent = counterValue;
}

incrementBtnEl.addEventListener('click', onIncrementBtnClick);
decrementBtnEl.addEventListener('click', onDecrementBtnClick);
