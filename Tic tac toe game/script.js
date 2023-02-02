const cells = document.querySelectorAll("td");
const resetButton = document.querySelector("#reset-button");

let player = "X";

for (const cell of cells) {
  cell.addEventListener("click", function() {
    if (cell.textContent === "") {
      cell.textContent = player;
      checkWin();
      player = player === "X" ? "O" : "X";
    }
  });
}

resetButton.addEventListener("click", function() {
  for (const cell of cells) {
    cell.textContent = "";
  }
});

function checkWin() {
  const winCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (const combination of winCombinations) {
    const [a, b, c] = combination;
    if (
      cells[a].textContent === player &&
      cells[b].textContent === player &&
      cells[c].textContent === player
    ) {
      alert(`Player ${player} wins!`);
      return;
    }
  }
}
