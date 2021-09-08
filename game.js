const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let player = []; //플레이어(snake)의 몸체의 위치에 대한 좌표 객체를 담는 배열
const SIZE_X = 20; //플레이어나 아이템의 몸체를 이루는 정사각형의 가로
const SIZE_Y = 20; //플레이어나 아이템의 몸체를 이루는 정사각형의 세로
let len = 3; //초기 배열의 크기

for(let i = len - 1; i >= 0; i--) { //초기 배열의 크기만큼 좌표 객체를 배열에 넣어준다.
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
    for(let i = 0; i < player.length; i++) {
        ctx.fillStyle = "white";
        draw(player[i].x, player[i].y);
    }
};

drawPlayer();