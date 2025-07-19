let boxes = document.querySelectorAll(".box");
let message = document.querySelector("p");

let turnO = true; //player X, playerO

//2d array
const winningPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

//We add an argument 'box' to access every single box because, we can't add event in multiple boxes because of 'queryselectorAll'.
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      //playerO
      box.innerText = "O";
      turnO = false;
    } else {
      //playerX
      box.innerText = "X";
      turnO = true;
    }
    box.disabled = true; //to disable button after text entered
    checkWinner();
  });
});

const showWinner = (winner) => {
message.innerText = `Congratulations, The winner is '${winner}'`;
message.classList.remove("hide");
disableBoxes()
}



const disableBoxes = () => {
   for(let box of boxes) {
    box.disabled = true;
   }
}


const checkWinner = () => {
    for(let pattern of winningPatterns) {
    let pos1val = boxes[pattern[0]].innerText;
    let pos2val = boxes[pattern[1]].innerText;
    let pos3val = boxes[pattern[2]].innerText;

    if (pos1val != "" && pos2val != "" && pos3val != "") {
      if (pos1val===pos2val && pos2val===pos3val) {
         console.log("Winner", pos1val);
         showWinner(pos1val);
      }
    }
    }
}
