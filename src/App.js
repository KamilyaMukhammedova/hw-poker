import {Component} from "react";
import Card from "./components/Card/Card";
import "./cards.css"

class App extends Component {
  state = {
  };



  render() {

    return (
      <div className="playingCards fourColours faceImages">
      <Card rank="7" suit="diams"/>
      </div>
    );
  }
}

export default App;

