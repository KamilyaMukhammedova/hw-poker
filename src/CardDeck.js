const ranksArray = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
const suitsArray = ['diams', 'hearts', 'clubs', 'spades'];

export class CardDeck {
  cardDeck = [];

  constructor() {
    for(let i = 0; i < ranksArray.length; i++) {
      for(let j = 0; j < suitsArray.length; j++) {
        this.cardDeck.push({
          suit: suitsArray[j],
          ranks: ranksArray[i],
        });
      }
    }
  }

  getCard() {
    const randomCard = this.cardDeck[Math.floor(Math.random() * this.cardDeck.length)];
    const indexOfRandomCard = this.cardDeck.indexOf(randomCard);
    this.cardDeck.splice(indexOfRandomCard, 1);
    return randomCard;
  }

  getCards(howMany) {
    const cards = [];
    for(let i = 0; i < howMany; i++) {
      cards.push(this.getCard());
    }
    return cards;
  }
}