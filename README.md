# ♠️ War Card Game
This project is a web-based card game built with HTML, CSS, and JavaScript, where two players (the user and the computer) draw random cards using the [Deck of Cards API](https://deckofcardsapi.com/#draw-card). The player with the higher card wins the round.

When the user clicks the "Draw" button:
- a request is made to the Deck of Cards API to draw two random cards
- the cards are displayed on screen (with real card images provided by the API)
- the card values are compared, and a message is shown to declare a winner (or a draw)

The project is great for practicing API integration, Asynchronous JavaScript (fetch), DOM manipulation, basic game logic.

## 🎯 Features
- Fetches real card data from the Deck of Cards API
- Displays both card images dynamically
- Compares card values based on rank (2–10, J, Q, K, A)
- Declares the round winner: "Player", "Computer", or "It's a draw!"

## 🛠️ Tech Stack
- HTML
- CSS
- JavaScript - handles API calls, game logic, and DOM updates
- [Deck of Cards API](https://deckofcardsapi.com/#draw-card) - external API used to draw and display real cards

### 🎓A project from my education at [Scrimba platform](https://scrimba.com/home)