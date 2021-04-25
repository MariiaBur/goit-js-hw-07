const refs = {
    nameInput: document.getElementById('name-input'),
    nameOutput: document.getElementById('name-output'),
};

const onInputChange = (input) => {
    refs.nameOutput.textContent = input.currentTarget.value;
    if (input.currentTarget.value === '') {
      refs.nameOutput.textContent = 'незнакомец';
    }
}

refs.nameInput.addEventListener('input', onInputChange);