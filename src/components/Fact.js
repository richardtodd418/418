import React, {Component} from 'react';
import tsswag from '../data/tsswag';

class fact extends Component {
  state = {
    fact: 'Fact incoming....',
    interval: 600000,
  };

  getFact = async () => {
    const number = Math.random();
    const threshold = 1;
    if (number > threshold) {
      const max = tsswag.length;
      const min = 1;
      const random = Math.floor(Math.random() * (max - min + 1) + min);
      const swag = tsswag[random - 1].text;
      this.setState(() => ({fact: swag}));
    } else {
      // get fact
      const fact = await (await fetch(
        'https://cors-anywhere.herokuapp.com/https://uselessfacts.jsph.pl//random.json?language=en'
      )).json();
      var regex = /`/gi;
      const factText = fact.text.replace(regex, "'");
      this.setState(() => ({fact: factText}));
    }
  };

  componentDidMount() {
    this.getFact();
    const interval = setInterval(this.getFact, this.state.interval);
  }

  render() {
    return (
      <main className="fact-text">
        <h2>{this.state.fact}</h2>
      </main>
    );
  }
}

export default fact;
