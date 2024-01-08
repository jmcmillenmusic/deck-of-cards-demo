// Establish all cards in a standard deck of playing cards
const deck = [
    ["2", "clubs"],
    ["3", "clubs"],
    ["4", "clubs"],
    ["5", "clubs"],
    ["6", "clubs"],
    ["7", "clubs"],
    ["8", "clubs"],
    ["9", "clubs"],
    ["10", "clubs"],
    ["J", "clubs"],
    ["Q", "clubs"],
    ["K", "clubs"],
    ["A", "clubs"],
    ["2", "diamonds"],
    ["3", "diamonds"],
    ["4", "diamonds"],
    ["5", "diamonds"],
    ["6", "diamonds"],
    ["7", "diamonds"],
    ["8", "diamonds"],
    ["9", "diamonds"],
    ["10", "diamonds"],
    ["J", "diamonds"],
    ["Q", "diamonds"],
    ["K", "diamonds"],
    ["A", "diamonds"],
    ["2", "hearts"],
    ["3", "hearts"],
    ["4", "hearts"],
    ["5", "hearts"],
    ["6", "hearts"],
    ["7", "hearts"],
    ["8", "hearts"],
    ["9", "hearts"],
    ["10", "hearts"],
    ["J", "hearts"],
    ["Q", "hearts"],
    ["K", "hearts"],
    ["A", "hearts"],
    ["2", "spades"],
    ["3", "spades"],
    ["4", "spades"],
    ["5", "spades"],
    ["6", "spades"],
    ["7", "spades"],
    ["8", "spades"],
    ["9", "spades"],
    ["10", "spades"],
    ["J", "spades"],
    ["Q", "spades"],
    ["K", "spades"],
    ["A", "spades"]
];

//Prints the contents of deck to the console
function deckContents() {
    console.log(deck); 
}

//Shuffles the deck using the Fisher-Yates Algorithm and prints to the console
function shuffle(deck) {
    for (let i = deck.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [deck[i], deck[j]] = [deck[j], deck[i]];
    }
    console.log(deck); 
}