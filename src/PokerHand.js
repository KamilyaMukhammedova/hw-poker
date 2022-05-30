export class PokerHand {
  ranks = {
    '2': [],
    '3': [],
    '4': [],
    '5': [],
    '6': [],
    '7': [],
    '8': [],
    '9': [],
    '10': [],
    J: [],
    Q: [],
    K: [],
    A: [],
  };

  suits = {
    diams: [],
    hearts: [],
    clubs: [],
    spades: [],
  };

  twoPairs = 0;

  constructor(cardsArray) {
    this.cardsArray = cardsArray;
  }

  getOutcome() {
    for (let i = 0; i < this.cardsArray.length; i++) {
      switch (this.cardsArray[i].ranks) {
        case '2':
          this.ranks["2"].push(this.cardsArray[i]);
          break;
        case '3':
          this.ranks["3"].push(this.cardsArray[i]);
          break;
        case '4':
          this.ranks["4"].push(this.cardsArray[i]);
          break;
        case '5':
          this.ranks["5"].push(this.cardsArray[i]);
          break;
        case '6':
          this.ranks["6"].push(this.cardsArray[i]);
          break;
        case '7':
          this.ranks["7"].push(this.cardsArray[i]);
          break;
        case '8':
          this.ranks["8"].push(this.cardsArray[i]);
          break;
        case '9':
          this.ranks["9"].push(this.cardsArray[i]);
          break;
        case '10':
          this.ranks["10"].push(this.cardsArray[i]);
          break;
        case 'J':
          this.ranks["J"].push(this.cardsArray[i]);
          break;
        case 'Q':
          this.ranks["Q"].push(this.cardsArray[i]);
          break;
        case 'K':
          this.ranks["K"].push(this.cardsArray[i]);
          break;
        case 'A':
          this.ranks["A"].push(this.cardsArray[i]);
          break;
        default:
          console.log("No ranks");
      }

      switch (this.cardsArray[i].suit) {
        case 'diams':
          this.suits["diams"].push(this.cardsArray[i]);
          break;
        case 'hearts':
          this.suits["hearts"].push(this.cardsArray[i]);
          break;
        case 'clubs':
          this.suits["clubs"].push(this.cardsArray[i]);
          break;
        case 'spades':
          this.suits["spades"].push(this.cardsArray[i]);
          break;
        default:
          console.log("No suit");
      }
    }

    for (let key in this.ranks) {
      if (this.ranks[key].length === 2) {
        this.twoPairs++;
      }
      if (this.ranks[key].length === 3) {
        return 'Three of a kind';
      }
    }

    for (let key in this.suits) {
      if (this.suits[key].length === 5) {
        return 'Flush';
      }
    }

    if (this.twoPairs === 1) {
      return 'One pair';
    }
    if (this.twoPairs === 2) {
      return 'Two pairs';
    }
  }
}