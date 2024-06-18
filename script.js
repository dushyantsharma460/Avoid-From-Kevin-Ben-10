let currentAlienTile = null;
let currentGraymetalTile = null;
let score = 0;
let gameOver = false;

window.onload = function() {
    setGame();
}

function setGame() {
    for (let i = 0; i < 9; i++) {
        let tile = document.createElement("div");
        tile.id = i.toString();
        tile.addEventListener("click", selectTile);
        document.getElementById("board").appendChild(tile);
    }
    // document.body.style.backgroundColor = 'green';
    setInterval(setAlien, 1000);
    setInterval(setGraymetal, 500);
}

function getRandomTile() {
    let num = Math.floor(Math.random() * 9);
    return num.toString();
}

function setAlien() {
    if (gameOver) {
        return;
    }

    if (currentAlienTile) {
        currentAlienTile.innerHTML = "";
    }

    let alien = document.createElement("img");
    alien.src = "./Sources/Way Big Transparent.png";

    let num;
    do {
        num = getRandomTile();
    } while (currentGraymetalTile && currentGraymetalTile.id == num);

    currentAlienTile = document.getElementById(num);
    currentAlienTile.appendChild(alien);
}

function setGraymetal() {
    if (gameOver) {
        return;
    }

    if (currentGraymetalTile) {
        currentGraymetalTile.innerHTML = "";
    }

    let graymetal = document.createElement("img");
    graymetal.src = "./Sources/Kevin simple.webp";
    graymetal.classList.add("graymetal");

    let num;
    do {
        num = getRandomTile();
    } while (currentAlienTile && currentAlienTile.id == num);

    currentGraymetalTile = document.getElementById(num);
    currentGraymetalTile.appendChild(graymetal);
}

function selectTile() {
    if (gameOver) {
        return;
    }

    if (this === currentAlienTile) {
        score += 1;
        document.getElementById("score").innerText = score;
    } else if (this === currentGraymetalTile) {
        document.getElementById("score").innerText = "Game Over : " + score.toString();
        document.body.style.background = 'red';
        gameOver = true;
    }
}