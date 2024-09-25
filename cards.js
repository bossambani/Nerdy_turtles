function Card(suit, value) {
    this.suit = suit;
    this.value = value;
}

const suits = ["clubs", "diamonds", "hearts", "spades"];
const values = ["ace", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "jack", "queen", "king"];
let globalCard = null;

function drawCard() {
    const cardDrawn = new Card(
        suits[Math.floor(Math.random() * suits.length)],
        values[Math.floor(Math.random() * values.length)]
    );
    globalCard = cardDrawn;

    //const cardSelect = document.getElementById("card");
    //const suitSelect = document.getElementById("suit");

    //cardSelect.value = card.value;
    //suitSelect.value = card.suit;

    console.log(`Card drawn: ${globalCard.value} of ${globalCard.suit}`); // Log the drawn card
    
}

function checkGuess() {
    if (!globalCard) {
        document.querySelector("h1").textContent = "Guess the Card";
        return;
    }
    const selectedCard = document.getElementById("card").value;
    const selectedSuit = document.getElementById("suit").value;
    const resultMessage = document.querySelector("h1");

    console.log(`Selected card: ${selectedCard} of ${selectedSuit}`); // Log the selected values
    console.log(`Global card: ${globalCard.value} of ${globalCard.suit}`); // Log the global card values

    if (globalCard.value.toLowerCase() === selectedCard.toLowerCase() &&
        globalCard.suit.toLowerCase() === selectedSuit.toLowerCase()) {
        resultMessage.textContent = "You got it!";
        console.log("Correct guess!");
    } else {
        resultMessage.textContent = "Better luck next time!";
        console.log("Incorrect guess.");
    }
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("drawCard").addEventListener("click", drawCard);
    document.getElementById("checkGuess").addEventListener("click", checkGuess);
});
