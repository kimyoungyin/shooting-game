
//canvas 세팅
let canvas;
let ctx; //이미지 그리는 걸 도와줄 변수
canvas = document.createElement("canvas"); // canvas 만들어서 변수에 할당
ctx = canvas.getContext("2d"); // 2d로 가져옴

//canvas 크기 정하기
canvas.width = 400;
canvas.height = 700;

//만들어진 canvas를 html에 넣어주기
document.body.appendChild(canvas);