const cardsContainer = document.getElementById("cards");
const newDeckBtn = document.getElementById("new-deck");
const drawCardBtn = document.getElementById("draw-cards");
const header = document.getElementById("header");
const remainingText = document.getElementById("remaining");
const computerScoreEl = document.getElementById("computer-score");
const myScoreEl = document.getElementById("my-score");

let deckId;
let computerScore = 0;
let myScore = 0;

newDeckBtn.addEventListener('click', () => {
    fetch("https://deckofcardsapi.com/api/deck/new/shuffle/")
        .then(res => res.json())
        .then(data => {
            remainingText.textContent = `Remaining cards: ${data.remaining}`;
            deckId = data.deck_id;
            console.log(deckId);
        });
});

drawCardBtn.addEventListener('click', () => {
    fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`)
        .then(res => res.json())
        .then(data => {
            remainingText.textContent = `Remaining cards: ${data.remaining}`;
            cardsContainer.children[0].innerHTML = `<img src=${data.cards[0].image} class="card" />`;
            cardsContainer.children[1].innerHTML = `<img src=${data.cards[1].image} class="card" />`;

            const winnerText = determineCardWinner(data.cards[0], data.cards[1]);
            header.textContent = winnerText;

            if (data.remaining === 0) {
                drawCardBtn.disabled = true;

                if (computerScore > myScore) {
                    header.textContent = "The computer won the game!";
                } else if (myScore > computerScore) {
                    header.textContent = "You won the game!";
                } else {
                    header.textContent = "It's a tie game!";
                }
            }
        });
});

function determineCardWinner(card1, card2) {
    const valueOptions = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "JACK", "QUEEN", "KING", "ACE"];
    const card1Idx = valueOptions.indexOf(card1.value);
    const card2Idx = valueOptions.indexOf(card2.value);

    if (card1Idx > card2Idx) {
        computerScore++;
        computerScoreEl.textContent = `Computer score: ${computerScore}`;
        return "Computer wins!";
    } else if (card1Idx < card2Idx) {
        myScore++;
        myScoreEl.textContent = `My score: ${myScore}`;
        return "You win!";
    } else {
        return "War!";
    }
}

