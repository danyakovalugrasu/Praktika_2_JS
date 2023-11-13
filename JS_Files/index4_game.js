const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const player = {
    x: canvas.width / 2,
    y: canvas.height - 30,
    width: 30,
    height: 30,
    speed: 43.5,
};

const enemies = [];
const medals = [];

let level = 1;
let score = 0;
let gameRunning = false;

function drawPlayer() {
    ctx.fillStyle = "blue";
    ctx.fillRect(player.x, player.y, player.width, player.height);
}

function createEnemy() {
    const enemy = {
        x: Math.random() * (canvas.width - 20),
        y: 0,
        width: 20,
        height: 20,
        speed: level,
    };
    enemies.push(enemy);
}

function createMedal() {
    const medal = {
        x: Math.random() * (canvas.width - 20),
        y: 0,
        width: 20,
        height: 20,
        speed: 2,
    };
    medals.push(medal);
}

function drawEnemies() {
    ctx.fillStyle = "red";
    for (const enemy of enemies) {
        ctx.fillRect(enemy.x, enemy.y, enemy.width, enemy.height);
        enemy.y += enemy.speed;
    }
}

function drawMedals() {
    ctx.fillStyle = "gold";
    for (const medal of medals) {
        ctx.fillRect(medal.x, medal.y, medal.width, medal.height);
        medal.y += medal.speed;
    }
}

function checkCollision() {
    for (const enemy of enemies) {
        if (
            player.x < enemy.x + enemy.width &&
            player.x + player.width > enemy.x &&
            player.y < enemy.y + enemy.height &&
            player.y + player.height > enemy.y
        )
        {
            gameRunning = false;
            alert("Game Over! Your Score: " + score);
            break;
        }
    }

    for (let i = medals.length - 1; i >= 0; i--) {
        const medal = medals[i];
        if (
            player.x < medal.x + medal.width &&
            player.x + player.width > medal.x &&
            player.y < medal.y + medal.height &&
            player.y + player.height > medal.y
        ) {
            medals.splice(i, 1);
            score += 1;
            level += 0.2;
        }
    }
}

function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawPlayer();
    drawEnemies();
    drawMedals();
    checkCollision();
    document.getElementById("level").innerText = "Ваши очки: " + score + ". Ваш уровень: " + parseInt(level);
    if (gameRunning) {
        requestAnimationFrame(gameLoop);
    }
    else
    {
        document.location.reload();
    }
}
if (score < 2)
{
    setInterval(createEnemy, 250 - score * 125);
}
else
{
    setInterval(createEnemy, 0);
}
setInterval(createMedal, 1000);
document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowLeft" && player.x > 0) {
        console.log("left")
        player.x -= player.speed;
    }
    if (event.key === "ArrowRight" && player.x < canvas.width - player.width && player.x < 540) {
        console.log(player.x)
        player.x += player.speed;
    }
});

var startButton = document.getElementById("startButton");
startButton.addEventListener("click", () => {
    gameRunning = true;
    startButton.style.display = "none";
    gameLoop();
});