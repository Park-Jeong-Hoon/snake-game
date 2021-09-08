const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const cvsX = canvas.width; //캔버스의 가로
const cvsY = canvas.height; //캔버스의 세로

let player = []; //플레이어(snake)의 몸체의 위치에 대한 좌표 객체를 담는 배열
const SIZE_X = 20; //플레이어나 아이템의 몸체를 이루는 정사각형의 가로
const SIZE_Y = 20; //플레이어나 아이템의 몸체를 이루는 정사각형의 세로
let len = 3; //초기 배열의 크기

let direction = "right"; //초기 플레이어의 움직임 방향

function getDirection(event) { //키보드 방향키에 따라 direction의 값을 바꿔준다.
    if(event.keyCode === 37 && direction !== "right") {
        direction = "left";
    } else if(event.keyCode === 38 && direction !== "down") {
        direction = "up";
    } else if(event.keyCode === 39 && direction !== "left") {
        direction = "right";
    } else if(event.keyCode === 40 && direction !== "up") {
        direction = "down";
    }
};

document.addEventListener("keydown", getDirection);

for(let i = len - 1; i >= 0; i--) { //초기 배열의 크기만큼 좌표에 이용될 객체를 배열에 넣어준다.
    player.push({
        x:i,
        y:0
    });
};

function draw(x, y) { //정사각형 하나 그리는 함수
    ctx.fillStyle = "white";
    ctx.fillRect(x * SIZE_X, y * SIZE_X, SIZE_Y, SIZE_Y);
    ctx.strokeStyle = "black";
    ctx.strokeRect(x * SIZE_X, y * SIZE_X, SIZE_Y, SIZE_Y);
}

function drawPlayer() { //플레이어의 몸체를 그리는 함수
    ctx.clearRect(0, 0, cvsX, cvsY);
    
    for(let i = 0; i < player.length; i++) {
        ctx.fillStyle = "white";
        draw(player[i].x, player[i].y);
    }

    player.pop();

    let headX = player[0].x;
    let headY = player[0].y;

    //direction 값에 따라 방향이 바뀌도록 한다.
    if(direction === "right") {
        headX++;
    } else if(direction ==="left") {
        headX--;
    } else if(direction ==="up") {
        headY--;
    } else if(direction ==="down") {
        headY++;
    };

    let head = { //플레이어 몸체의 가장 앞부분
        x:headX,
        y:headY
    };

    player.unshift(head); //새로운 요소를 배열의 맨 앞부분에 추가하는 unshift 메서드 이용
};

setInterval(drawPlayer, 200);