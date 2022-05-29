import {Component} from "react";

class Card extends Component {
  getSuit() {
    if(this.props.suit === 'diams') {
      return '♦';
    } else if (this.props.suit === 'hearts') {
      return '♥';
    } else if (this.props.suit === 'clubs') {
      return '♣';
    } else if (this.props.suit === 'spades') {
      return '♠';
    }
    return '';
  }

  render() {
    return (
      <div className={'card rank-' + (this.props.rank).toLowerCase() + ' ' + this.props.suit}>
        <span className="rank">{this.props.rank}</span>
        <span className="suit">{this.getSuit()}</span>
      </div>
    );
  }
}

export default Card;