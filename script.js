const board = document.getElementById("board");
const status = document.getElementById("status");
const resetButton = document.getElementById("reset");
const applause = document.getElementById("applause");
applause.volume = 1.0; // Ensure volume is set
let currentPlayer = "X";
let cells = Array(9).fill(null);

function createConfetti() {
    for (let i = 0; i < 50; i++) {
        let confetti = document.createElement("div");
        confetti.classList.add("confetti");
        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.background = ["gold", "red", "blue", "green", "pink"][Math.floor(Math.random() * 5)];
        confetti.style.animationDuration = Math.random() * 2 + 2 + "s";
        document.body.appendChild(confetti);
        setTimeout(() => confetti.remove(), 3000);
    }
}

function checkWinner() {
    const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];
    
    for (let combination of winningCombinations) {
        const [a, b, c] = combination;
        if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
            setTimeout(() => {
                applause.play();
                createConfetti();
            }, 300); // Delay for better effect
            return cells[a];
        }
    }
    return cells.includes(null) ? null : "Draw";
}

function handleClick(index, cell) {
    if (!cells[index] && !checkWinner()) {
        cells[index] = currentPlayer;
        cell.textContent = currentPlayer;
        cell.classList.add("taken");
        cell.style.background = currentPlayer === "X" ? "#ff4f4f" : "#4fafff";
        cell.style.color = "white";
        let winner = checkWinner();
        
        if (winner) {
            status.textContent = winner === "Draw" ? "It's a Draw!" : `Player ${winner} Wins!`;
        } else {
            currentPlayer = currentPlayer === "X" ? "O" : "X";
            status.textContent = `Player ${currentPlayer}'s turn`;
        }
    }
}

function resetGame() {
    cells.fill(null);
    board.innerHTML = "";
    status.textContent = "Player X's turn";
    currentPlayer = "X";
    createBoard();
}

function createBoard() {
    board.innerHTML = "";
    cells.forEach((_, index) => {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.addEventListener("click", () => handleClick(index, cell));
        board.appendChild(cell);
    });
}

resetButton.addEventListener("click", resetGame);
createBoard();
