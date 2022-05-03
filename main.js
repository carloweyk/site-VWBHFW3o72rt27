let username = document.querySelector('.username')
let password = document.querySelector('.password')
let button = document.querySelector('.btn') 

button.onclick = (event) => {
  if(username.value && password.value) {
    window.location.href = 'about.html'
  }
}





const body = document.body;
const square = document.querySelector('.square');
const blueIndicator = document.querySelector('.indicator.blue');
const redIndicator = document.querySelector('.indicator.red');

let squareRect = square.getBoundingClientRect()

let centerX = squareRect.left + squareRect.width / 2;
let centerY = squareRect.top + squareRect.height / 2;

let initialAngle = 0

body.onmousedown = (event) => {

    initialAngle = angle(centerX, centerY, event.clientX, event.clientY);

    blueIndicator.style.left = `${centerX}px`;
    blueIndicator.style.top = `${centerY}px`;

    body.onmousemove = (event) => {
        const x = event.clientX;
        const y = event.clientY;
        
        const alpha = angle(centerX, centerY, x, y) - initialAngle;
        square.style.transform = `rotate(${alpha}deg)`;

        redIndicator.style.left = `${x}px`;
        redIndicator.style.top = `${y}px`;
    };
}

body.onmouseup = () => {
    body.onmousemove = null;
}

function angle(x1, y1, x2, y2) {
    return Math.atan2(y2 - y1, x2 - x1) * 180 / Math.PI;
}