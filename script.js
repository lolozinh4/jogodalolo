const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
let painting = false;

const colorPicker = document.getElementById('colorPicker');

function startPosition(e) {
    painting = true;
    draw(e);
}

function endPosition() {
    painting = false;
    ctx.beginPath();
}

function draw(e) {
    if (!painting) return;
    
    ctx.lineWidth = 5;
    ctx.lineCap = 'round';
    ctx.strokeStyle = colorPicker.value; // Usa o valor atual do seletor de cores

    ctx.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
}

canvas.addEventListener('mousedown', startPosition);
canvas.addEventListener('mouseup', endPosition);
canvas.addEventListener('mousemove', draw);

document.getElementById('clear').addEventListener('click', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});
