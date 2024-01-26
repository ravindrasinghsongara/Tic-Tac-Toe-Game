let boxes = document.querySelectorAll(".box");
let newMatch = document.querySelector("#new-match");
let drawMatch = document.querySelector("#draw-match");
let msgContainer = document.querySelector(".check-winner");

let trueO = true;
let count = 0;
let winnerFound = false;

const winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (trueO) {
      box.innerText = "O";
      console.log("0");
      trueO = false;
      count = count + 1;

    } else {
      box.innerText = "X";
      console.log("X");
      count = count + 1;
      trueO = true;

    }
    box.disabled = true;

    checkWinner();
  });
});

//make all btn disabled after won the game..
function btndisabled() {
  for (let box of boxes) {
    box.disabled = true; //locked all buttons after showing the result.
  }
}

// show winner...
function showWinner(winner) {
  msgContainer.classList.remove("hide");
  msgContainer.innerText = `Winner is ${winner}`;
  msgContainer.style.color = "black";
  msgContainer.style.fontSize = "large";
  msgContainer.style.backgroundColor = 'white'
  msgContainer.style.border = '2px solid black'
  msgContainer.style.margin = '0 30% 0 30%'
  msgContainer.style.marginTop = "20px"
  msgContainer.style.marginBottom = "20px"

  btndisabled();
}



//drowGame.....
function drawGame() {
        count = 0;
        msgContainer.classList.remove("hide");
        msgContainer.innerText = "Draw Game";
        msgContainer.style.color = "black";
        msgContainer.style.fontSize = "large";
        msgContainer.style.backgroundColor = 'white'
        msgContainer.style.margin = '0 30% 0 30%'
  msgContainer.style.marginTop = "20px"
  msgContainer.style.marginBottom = "20px"


}

//check who is winner.....
function checkWinner() {
  for (let pattern of winPatterns) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (count == 9 && winnerFound == false) {
                  drawGame();
      }
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        winnerFound = true;
        showWinner(pos1Val);
      }
    }
  }
}


//Re-start the game.....
newMatch.addEventListener("click", function () {
  count = 0;
  winnerFound = false;
  for (let box of boxes) {
    box.innerText = "";
    box.disabled = false; // unlocked the buttons.
  }
  msgContainer.classList.add("hide");
});

// New Game.......
drawMatch.addEventListener("click", function () {
  count = 0;
  winnerFound = false;
  for (let box of boxes) {
    box.innerText = "";
    box.disabled = false; // unlocked the buttons.
  }
  msgContainer.classList.add("hide");
});
