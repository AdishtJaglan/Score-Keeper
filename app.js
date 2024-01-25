const p1 = {
    score: 0,
    button: document.querySelector("#p1Button"),
    display: document.querySelector("#p1Display")
}

const p2 = {
    score: 0,
    button: document.querySelector("#p2Button"),
    display: document.querySelector("#p2Display")
}

const reset = document.querySelector("#reset");
const target = document.querySelector("#playTo");

let winningScore = 3;
let isGameOver = false;

function updateScore(player, opponent) {
    if (!isGameOver) {
        player.score += 1;
        if (player.score === winningScore) {
            isGameOver = true;

            player.display.classList.add("has-text-success");
            opponent.display.classList.add("has-text-danger");

            player.button.disabled = true;
            opponent.button.disabled = true;
        }
        player.display.textContent = player.score;
    }
}

p1Button.addEventListener("click", () => {
    updateScore(p1, p2);
});

p2Button.addEventListener("click", () => {
    updateScore(p2, p1);
});

target.addEventListener("change", () => {
    winningScore = parseInt(target.value);

    resetButton();
});

reset.addEventListener("click", resetButton);

function resetButton() {
    isGameOver = false;

    for (p of [p1, p2]) {
        p.score = 0;
        p.display.textContent = p.score;
        p.display.classList.remove("has-text-success", "has-text-danger");
        p.button.disabled = false;
    }
}