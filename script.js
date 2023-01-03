let fields = [];
let currentShape = 'cross'; //zu Beginn hat die Variable currentShape den Wert "cross"
let gameover = false;

function fillShape(x) { //x = 0,1,2,3,4,5,6,7,8
  if (!fields[x] && !gameover) { // wenn fields[x] nicht existiert und gameover nicht false (sondern true) ist, ( -> Rufzeichen = Gegenteil)
    if (currentShape == 'cross') { //wenn die Variable currentShape den Wert "cross" hat,...
      switchToPlayer2();
    } else {
      switchToPlayer1();
    }
    fields[x] = currentShape; //fülle das array "fields" an der Stelle 0,1,2,3,4,5,6,7,8 mit "cross" oder "circle"
    draw();
    checkForWin();
  }
}


function switchToPlayer2 () {
  currentShape = 'circle'; //... ändere den Wert zu "circle"
  document.getElementById('player1').classList.add('playerInactive');
  document.getElementById('player2').classList.remove('playerInactive');
}


function switchToPlayer1 () {
  currentShape = 'cross'; //wenn die Variable currentShape den Wert "circle" hat, ändere den Wert zu "cross"
  document.getElementById('player2').classList.add('playerInactive');
  document.getElementById('player1').classList.remove('playerInactive');
}


function draw() {
  for (let i = 0; i < fields.length; i++) {
    if (fields[i] == 'circle') { //wenn "fields" an der Stelle 0-8 den Wert "circle" hat, entferne display-none vom circle-Bild
      document.getElementById('circle' + i).classList.remove('d-none');
    }
    if (fields[i] == 'cross') { //wenn "fields" an der Stelle 0-8 den Wert "cross" hat, entferne display-none vom cross-Bild
      document.getElementById('cross' + i).classList.remove('d-none');
    }
  }
}


function checkForWin() {
  let winner;
  horizontalLines(winner);
  verticalLines(winner);
  diagonalLines(winner);
}


function horizontalLines (winner) {
  if (fields[0] == fields[1] && fields[1] == fields[2] && fields[0]) {
    winner = fields[0];
    document.getElementById('line0').style.transform = 'scaleX(1)';
  }
  if (fields[3] == fields[4] && fields[4] == fields[5] && fields[3]) {
    winner = fields[3];
    document.getElementById('line1').style.transform = 'scaleX(1)';
  }
  if (fields[6] == fields[7] && fields[7] == fields[8] && fields[6]) {
    winner = fields[6];
    document.getElementById('line2').style.transform = 'scaleX(1)';
  }
  if (winner) {
    gameIsOver();
  };
}


function verticalLines (winner) {
  if (fields[0] == fields[3] && fields[3] == fields[6] && fields[0]) {
    winner = fields[0];
    document.getElementById('line3').style.transform = 'rotate(90deg) scaleX(1)';
  }
  if (fields[1] == fields[4] && fields[4] == fields[7] && fields[1]) {
    winner = fields[1];
    document.getElementById('line4').style.transform = 'rotate(90deg) scaleX(1)';
  }
  if (fields[2] == fields[5] && fields[5] == fields[8] && fields[2]) {
    winner = fields[2];
    document.getElementById('line5').style.transform = 'rotate(90deg) scaleX(1)';
  }
  if (winner) {
    gameIsOver();
  };
}


function diagonalLines (winner) {
  if (fields[0] == fields[4] && fields[4] == fields[8] && fields[0]) {
    winner = fields[0];
    document.getElementById('line6').style.transform = 'rotate(45deg) scaleX(1.3)';
  }
  if (fields[2] == fields[4] && fields[4] == fields[6] && fields[2]) {
    winner = fields[2];
    document.getElementById('line7').style.transform = 'rotate(-45deg) scaleX(1.3)';
  }
  if (winner) {
    gameIsOver();
  };
}


function gameIsOver() {
  gameover = true;
  // setTimeout(function () {
  //   document.getElementById('gameover').classList.remove('d-none');
  //   document.getElementById('restart').classList.remove('d-none');
  // }, 700);
}


function restart() {
  fields = [];
  gameover = false;
  switchToPlayer1();
  resetLines();
  resetImages();
}


function resetLines() {
  for (let i = 0; i < 3; i++) {
    document.getElementById('line' + i).style.transform = 'scaleX(0.0)';
  }
  for (let i = 3; i < 6; i++) {
    document.getElementById('line' + i).style.transform = 'rotate(90deg) scaleX(0.0)';
  }
  document.getElementById('line6').style.transform = 'rotate(45deg) scaleX(0.0)';
  document.getElementById('line7').style.transform = 'rotate(-45deg) scaleX(0.0)';
}


function resetImages () {
  document.getElementById('gameover').classList.add('d-none');
  document.getElementById('restart').classList.add('d-none');
  for (let i = 0; i < 9; i++) {
    document.getElementById('circle' + i).classList.add('d-none');
    document.getElementById('cross' + i).classList.add('d-none');
  }
}