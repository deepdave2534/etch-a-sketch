const container = document.querySelector('.container');
const resetButton = document.querySelector('.reset');

function clearGrid() {
    container.innerHTML = '';
    let userInput = prompt("Enter a number:");
    let number = parseInt(userInput);

    makeGrid(number);
}

function randomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

function makeGrid(n) {
    container.innerHTML = '';

    for (let i = 0; i < n * n; i++) {
        const div = document.createElement('div');
        div.classList.add('grid-item');

        div.style.width = `calc(100% / ${n})`;
        div.style.height = `calc(100% / ${n})`;

        div.addEventListener('mouseover', () => {
            div.style.backgroundColor = randomColor();
        });

        container.appendChild(div);
    }
}

let userInput = prompt("Enter a number:");
let number = parseInt(userInput);

makeGrid(number);