const fontSizeControlEl = document.getElementById('font-size-control');
const textEl = document.getElementById('text');

fontSizeControlEl.addEventListener('input', (event) => {
    console.log(event.currentTarget.value)
    textEl.style.fontSize = `${event.currentTarget.value}px`;
})