// Initializes the deck as an empty array
const deck = [];

// Initializes your hand, which has no cards in it at the beginning
const hand = [];

// Establishes suits and values of cards in a standard 52-card deck
const suits = ["clubs", "diamonds", "hearts", "spades"];
const values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];

// References the dropdown menu listing all cards in your hand
const list = document.getElementById("dropdown");

// Creates and shuffles the deck using the Fisher-Yates Algorithm and prints to the console
function shuffle() {
    // Deck creation
    for (let i = 0; i < suits.length; i++) {
        for (let j = 0; j < values.length; j++) {
            let card = {Value: values[j], Suit: suits[i]};
            deck.push(card);
        }
    }
    // Deck shuffling
    for (let i = deck.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [deck[i], deck[j]] = [deck[j], deck[i]];
    }
    console.log(deck); 
}

function draw() {
    // Adds the first card of the deck to your hand and removes it from the deck
    if (deck.length >= 1) {
        hand.push(deck[0]);
        deck.shift(deck[0]);
        console.log(deck);
        console.log(hand);
    }
    // Clears all options from the dropdown menu, then repopulates it
    // list.remove(list.selectedIndex);
    for (var i = 0; i < hand.length; i++) {
        var el = document.createElement("option");
        list.remove(el);
    }
    for (var i = 0; i < hand.length; i++) {
        var optn = hand[i];
        var el = document.createElement("option");
        el.textContent = `${optn.Value} of ${optn.Suit}`;
        el.value = `${optn.Value} of ${optn.Suit}`;
        list.add(el);
    }
}