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
        // Creates images, appends them to the cardsInHand section, and sets their sources
        var div = document.getElementById('cardsInHand');
        var img = document.createElement('img');
        div.appendChild(img);
        for (i = 0; i < hand.length; i++) {
            var card = hand[i];
            switch (true) {
                case (card.Value === "2" && card.Suit === "clubs"):
                    img.src = "./cardPhotos/Club_2.png";
                    break;
                case (card.Value === "3" && card.Suit === "clubs"):
                    img.src = "./cardPhotos/Club_3.png";
                    break;
                case (card.Value === "4" && card.Suit === "clubs"):
                    img.src = "./cardPhotos/Club_4.png";
                    break;
                case (card.Value === "5" && card.Suit === "clubs"):
                    img.src = "./cardPhotos/Club_5.png";
                    break;
                case (card.Value === "6" && card.Suit === "clubs"):
                    img.src = "./cardPhotos/Club_6.png";
                    break;
                case (card.Value === "7" && card.Suit === "clubs"):
                    img.src = "./cardPhotos/Club_7.png";
                    break;
                case (card.Value === "8" && card.Suit === "clubs"):
                    img.src = "./cardPhotos/Club_8.png";
                    break;
                case (card.Value === "9" && card.Suit === "clubs"):
                    img.src = "./cardPhotos/Club_9.png";
                    break;
                case (card.Value === "10" && card.Suit === "clubs"):
                    img.src = "./cardPhotos/Club_10.png";
                    break;
                case (card.Value === "J" && card.Suit === "clubs"):
                    img.src = "./cardPhotos/Club_J.png";
                    break;
                case (card.Value === "Q" && card.Suit === "clubs"):
                    img.src = "./cardPhotos/Club_Q.png";
                    break;
                case (card.Value === "K" && card.Suit === "clubs"):
                    img.src = "./cardPhotos/Club_K.png";
                    break;
                case (card.Value === "A" && card.Suit === "clubs"):
                    img.src = "./cardPhotos/Club_A.png";
                    break;
                case (card.Value === "2" && card.Suit === "diamonds"):
                    img.src = "./cardPhotos/Diamond_2.png";
                    break;
                case (card.Value === "3" && card.Suit === "diamonds"):
                    img.src = "./cardPhotos/Diamond_3.png";
                    break;
                case (card.Value === "4" && card.Suit === "diamonds"):
                    img.src = "./cardPhotos/Diamond_4.png";
                    break;
                case (card.Value === "5" && card.Suit === "diamonds"):
                    img.src = "./cardPhotos/Diamond_5.png";
                    break;
                case (card.Value === "6" && card.Suit === "diamonds"):
                    img.src = "./cardPhotos/Diamond_6.png";
                    break;
                case (card.Value === "7" && card.Suit === "diamonds"):
                    img.src = "./cardPhotos/Diamond_7.png";
                    break;
                case (card.Value === "8" && card.Suit === "diamonds"):
                    img.src = "./cardPhotos/Diamond_8.png";
                    break;
                case (card.Value === "9" && card.Suit === "diamonds"):
                    img.src = "./cardPhotos/Diamond_9.png";
                    break;
                case (card.Value === "10" && card.Suit === "diamonds"):
                    img.src = "./cardPhotos/Diamond_10.png";
                    break;
                case (card.Value === "J" && card.Suit === "diamonds"):
                    img.src = "./cardPhotos/Diamond_J.png";
                    break;
                case (card.Value === "Q" && card.Suit === "diamonds"):
                    img.src = "./cardPhotos/Diamond_Q.png";
                    break;
                case (card.Value === "K" && card.Suit === "diamonds"):
                    img.src = "./cardPhotos/Diamond_K.png";
                    break;
                case (card.Value === "A" && card.Suit === "diamonds"):
                    img.src = "./cardPhotos/Diamond_A.png";
                    break;
                case (card.Value === "2" && card.Suit === "hearts"):
                    img.src = "./cardPhotos/Heart_2.png";
                    break;
                case (card.Value === "3" && card.Suit === "hearts"):
                    img.src = "./cardPhotos/Heart_3.png";
                    break;
                case (card.Value === "4" && card.Suit === "hearts"):
                    img.src = "./cardPhotos/Heart_4.png";
                    break;
                case (card.Value === "5" && card.Suit === "hearts"):
                    img.src = "./cardPhotos/Heart_5.png";
                    break;
                case (card.Value === "6" && card.Suit === "hearts"):
                    img.src = "./cardPhotos/Heart_6.png";
                    break;
                case (card.Value === "7" && card.Suit === "hearts"):
                    img.src = "./cardPhotos/Heart_7.png";
                    break;
                case (card.Value === "8" && card.Suit === "hearts"):
                    img.src = "./cardPhotos/Heart_8.png";
                    break;
                case (card.Value === "9" && card.Suit === "hearts"):
                    img.src = "./cardPhotos/Heart_9.png";
                    break;
                case (card.Value === "10" && card.Suit === "hearts"):
                    img.src = "./cardPhotos/Heart_10.png";
                    break;
                case (card.Value === "J" && card.Suit === "hearts"):
                    img.src = "./cardPhotos/Heart_J.png";
                    break;
                case (card.Value === "Q" && card.Suit === "hearts"):
                    img.src = "./cardPhotos/Heart_Q.png";
                    break;
                case (card.Value === "K" && card.Suit === "hearts"):
                    img.src = "./cardPhotos/Heart_K.png";
                    break;
                case (card.Value === "A" && card.Suit === "hearts"):
                    img.src = "./cardPhotos/Heart_A.png";
                    break;
                case (card.Value === "2" && card.Suit === "spades"):
                    img.src = "./cardPhotos/Spade_2.png";
                    break;
                case (card.Value === "3" && card.Suit === "spades"):
                    img.src = "./cardPhotos/Spade_3.png";
                    break;
                case (card.Value === "4" && card.Suit === "spades"):
                    img.src = "./cardPhotos/Spade_4.png";
                    break;
                case (card.Value === "5" && card.Suit === "spades"):
                    img.src = "./cardPhotos/Spade_5.png";
                    break;
                case (card.Value === "6" && card.Suit === "spades"):
                    img.src = "./cardPhotos/Spade_6.png";
                    break;
                case (card.Value === "7" && card.Suit === "spades"):
                    img.src = "./cardPhotos/Spade_7.png";
                    break;
                case (card.Value === "8" && card.Suit === "spades"):
                    img.src = "./cardPhotos/Spade_8.png";
                    break;
                case (card.Value === "9" && card.Suit === "spades"):
                    img.src = "./cardPhotos/Spade_9.png";
                    break;
                case (card.Value === "10" && card.Suit === "spades"):
                    img.src = "./cardPhotos/Spade_10.png";
                    break;
                case (card.Value === "J" && card.Suit === "spades"):
                    img.src = "./cardPhotos/Spade_J.png";
                    break;
                case (card.Value === "Q" && card.Suit === "spades"):
                    img.src = "./cardPhotos/Spade_Q.png";
                    break;
                case (card.Value === "K" && card.Suit === "spades"):
                    img.src = "./cardPhotos/Spade_K.png";
                    break;
                case (card.Value === "A" && card.Suit === "spades"):
                    img.src = "./cardPhotos/Spade_A.png";
                    break;
                default:
                    img.src = "./cardPhotos/MTG_Card_Back.jpg";
                    break;
            }
        }
    }
    // Clears all options from the dropdown menu
    // list.remove(list.selectedIndex);
    for (var i = 0; i < hand.length; i++) {
        var listOption = document.createElement("option");
        list.remove(listOption);
    }
    // Repopulates the dropdown menu with an option for each card in your hand
    for (var i = 0; i < hand.length; i++) {
        var optn = hand[i];
        var listOption = document.createElement("option");
        listOption.textContent = `${optn.Value} of ${optn.Suit}`;
        listOption.value = `${optn.Value} of ${optn.Suit}`;
        list.add(listOption);
    }
}