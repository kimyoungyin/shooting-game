var config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  backgroundColor: '#a5eff5',
  physics: {
    default: 'arcade',
    matter: {
      debug: true,
      gravity: {y : 0},
    }
  },
  scene: [overlap],
};

//초기화가 안됨
var cursor;
var nowX; //햄스터 생성 x좌표
var ham; //햄스터 객체
var hamster; //햄스터 사진 배열
var cursorOn;
var player;

var game = new Phaser.Game(config);