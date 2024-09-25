let colors = [];
let timerID = null;
let currentColor = null;

function addColor() {
    const color = document.getElementById('colors').value;
    colors.push(color);
    const ul = document.querySelector('ul');
    const li = document.createElement('li');
    li.textContent = color;
    ul.appendChild(li);
}

function startTimer() {
    if (!timerID) {
    const listItems = document.querySelectorAll('ul li');

    listItems.forEach(li => {
        li.addEventListener('mouseenter', () => {
            currentColor = li;
        });

        li.addEventListener('mouseleave', () => {
            currentColor = null;
            li.style.backgroundColor = '';
    });
});
    

    timerID = setInterval(() => {
        if (currentColor) {
            const color = currentColor.textContent.trim();
            currentColor.style.backgroundColor = color;
        }
    }, 1);
}
}
function stopTimer() {
    clearInterval(timerID);
    timerID = null;
}
 