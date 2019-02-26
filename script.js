const btnStart = document.querySelector('.btnStart');
const gameOverEle = document.getElementById('gameOverEle');
const constainer = document.getElementById('container')
const box = document.querySelector('.box');
const boxCenter = [box.offsetLeft + (box.offsetWidth / 2),
    box.offsetTop + (box.offsetHeight / 2)
];
console.log(boxCenter)

let gamePlay = false;
let player;
let animateGame;



btnStart.addEventListener('click', startGame)
constainer.addEventListener('mousedown', mouseDown);
constainer.addEventListener('mousemove', movePostion);



function movePostion(e) {
    // console.log(e);
    let deg = getDeg(e);
    box.style.webkitTtransform = 'rotate(' + deg + 'deg)';
    box.style.mozTransform = 'rotate(' + deg + 'deg)';
    box.style.msTransform = 'rotate(' + deg + 'deg)';
    box.style.oTransform = 'rotate(' + deg + 'deg)';
    box.style.transform = 'rotate(' + deg + 'deg)';
}

function getDeg(e) {
    let angle = Math.atan2(e.clientX - boxCenter[0], -(e.clientY - boxCenter[1]));
    return angle * (180 / Math.PI)
}




function degRad(deg) {
    return deg + (Math.PI / 180);
}


function mouseDown(e) {
    if (gamePlay) {
        let div = document.createElement('div');
        let deg = getDeg(e);
        div.setAttribute('class', 'fireme')
        div.moverx = 5 * Math.sign(degRad(deg));
        div.movery = -5 * Math.cos(degRad(deg));

        div.style.left = (boxCenter[0] - 5) + 'px';
        div.style.top = (boxCenter[1] - 5) + 'px';
        div.style.width = 10 + 'px';
        div.style.height = 10 + 'px';
        container.appendChild(div);
    }
}

function startGame() {
    gamePlay = true;
    gameOverEle.style.display = 'none';
    player = {
        score: 0,
        barwidth: 100,
        lives: 100
    }
    // set badguys
    animateGame = requestAnimationFrame(playGame)
}

function moveShots() {
    let tempShotss = document.querySelectorAll('.fireme');
    for (let shot of tempShotss) {
        shot.style.top = shot.offsetTop + shot.moverx + 'px';
        shot.style.left = shot.offsetLeft + shot.movery + 'px';
    }
}

function playGame() {
    if (gamePlay) {
        moveShots();
        // update dashboard
        // move enemy
        animateGame = requestAnimationFrame(playGame)
    }

}
