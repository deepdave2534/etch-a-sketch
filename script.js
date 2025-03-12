const container = document.querySelector('.container');

function clearGrid() {
    const reset = document.getElementById("reset");

    reset.addEventListener("click", function() {
        container.innerHTML = '';
    });
}

function makeGrid(n) {
    container.innerHTML = '';

    for (let i = 0; i < n * n; i++) {
        const div = document.createElement('div');
        div.classList.add('grid-item');

        // Set size dynamically based on n
        div.style.width = `calc(100% / ${n})`;
        div.style.height = `calc(100% / ${n})`;

        div.addEventListener('mouseover', () => {
            div.style.backgroundColor = 'green';
        });

        container.appendChild(div);
    }

    clearGrid();
}

let userInput = prompt("Enter a number:");
let number = parseInt(userInput);

makeGrid(number);