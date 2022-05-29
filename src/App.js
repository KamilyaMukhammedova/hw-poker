import {Component} from "react";
import {nanoid} from "nanoid";
import Card from "./components/Card/Card";
import "./cards.css";
import {CardDeck} from "./CardDeck";

class App extends Component {
  state = {
    cards: [
      {suit: 'diams', ranks: '6'},
      {suit: 'hearts', ranks: 'A'},
      {suit: 'clubs', ranks: 'J'},
      {suit: 'spades', ranks: '2'},
      {suit: 'spades', ranks: 'K'},
    ]
  };

  getFiveCards = () => {
    const cardDeck = new CardDeck();
    const cardsArray = cardDeck.getCards(5);

    const cards = this.state.cards.map((card, index) => {
        return {
          ...card,
          suit: cardsArray[index].suit,
          ranks: cardsArray[index].ranks,
        }
    });

    this.setState({cards});
  }

  render() {
    const cards = this.state.cards.map(card => {
      return (
        <Card
          key={nanoid()}
          ranks={card.ranks}
          suit={card.suit}
        />
      );
    });
    return (
      <div className="container">
        <div className="playingCards fourColours faceImages">
          {cards}
        </div>
        <div>
          <button onClick={this.getFiveCards}>Get cards</button>
        </div>
      </div>

    );
  }
}

export default App;

