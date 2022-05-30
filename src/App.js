import {Component} from "react";
import {nanoid} from "nanoid";
import Card from "./components/Card/Card";
import {CardDeck} from "./CardDeck";
import "./cards.css";
import {PokerHand} from "./PokerHand";

class App extends Component {
  state = {
    cards: [
      {suit: 'diams', ranks: '6'},
      {suit: 'diams', ranks: 'A'},
      {suit: 'diams', ranks: 'J'},
      {suit: 'diams', ranks: '2'},
      {suit: 'diams', ranks: 'K'},
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
      )
    });
    return (
      <div className="container">
        <div className="playingCards fourColours faceImages">
          {cards}
        </div>
        <div>
          <button className="btn" onClick={this.getFiveCards}>Get cards</button>
        </div>
        <p className="result">{new PokerHand(this.state.cards).getOutcome()}</p>
      </div>
    );
  }
}

export default App;

