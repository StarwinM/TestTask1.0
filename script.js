const box = document.getElementById('box');
let boxX = 0;
let boxY = 0;
let speedX = 3;
let speedY = 3;

function updateBoxPosition() {
    boxX += speedX;
    boxY += speedY;

    if (boxX + box.offsetWidth > window.innerWidth || boxX < 0) {
        speedX = -speedX;
    }

    if (boxY + box.offsetHeight > window.innerHeight || boxY < 0) {
        speedY = -speedY;
    }

    box.style.left = boxX + 'px';
    box.style.top = boxY + 'px';
}

function animate() {
    updateBoxPosition();
    requestAnimationFrame(animate);
}

animate();