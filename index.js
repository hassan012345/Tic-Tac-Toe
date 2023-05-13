var board = [['','',''],
['','',''],
['','','']
];

var turn = 'X'

var buttons = document.querySelectorAll("button");
for (var i = 0; i < buttons.length; i++) {
  (function(index) {
    buttons[index].addEventListener("click", function() {
        if(turn==='X'){
            buttons[index].innerHTML = "X";
            board[index % 3][Math.floor(index / 3)] = 'X';
            if(checkWin(board)==='X'){
              const para = document.createElement("p");
              const text = document.createTextNode("X has won");
              para.appendChild(text);
              document.body.appendChild(para);
            }
            turn = "O";
        }
        else {
            buttons[index].innerHTML = "O";
            board[index % 3][Math.floor(index / 3)] = 'O';
            checkWin(board);
            if(checkWin(board)==='O'){
              const para = document.createElement("p");
              const text = document.createTextNode("O has won");
              para.appendChild(text);
              document.body.appendChild(para);
            }
            turn = "X";
        }
    });
  })(i);
}
// console.log(board)
function checkWin(board){
  for(var i =0;i<3;i++){
    if(board[i][0]!=='' && board[i][0] === board[i][1] && board[i][1]=== board[i][2]){
      return board[i][0];
    }
  }
  for(var j =0;j<3;j++){
    if(board[0][j]!=='' && board[0][j] === board[1][j] && board[1][j] === board[2][j]){
      return board[0][j];
    }
  }
  if (board[0][0] !== '' && board[0][0] === board[1][1] && board[1][1] === board[2][2]) {
    return board[0][0];
  }
  if (board[0][2] !== '' && board[0][2] === board[1][1] && board[1][1] === board[2][0]) {
    return board[0][2];
  }

  return null;
}