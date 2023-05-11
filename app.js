const myCanvas = document.getElementById('myCanvas');

const ctx = myCanvas.getContext('2d');

ctx.strokeStyle = 'gray';
ctx.lineWidth = 2;

function drawSquare(x, y, size) {
	ctx.beginPath();
	ctx.rect(x, y, size, size);
	ctx.fill();
	ctx.stroke();
}

const size = 30;
let offset = 0;
for (let y = 0; y < myCanvas.height; y += size) {
	for (let x = 0; x <= myCanvas.width; x += size) {
		if ((x / size) % 2 === 0) {
			ctx.fillStyle = 'black';
		} else {
			ctx.fillStyle = 'white';
		}
		drawSquare(x - offset, y, size);
	}
	offset = size / 2 - offset;
}
