import React, {Component} from 'react';

class fact extends Component {
  state = {
    fact: 'Fact incoming....',
  };

  getFact = async () => {
    const fact = await (await fetch(
      'https://cors-anywhere.herokuapp.com/https://uselessfacts.jsph.pl//random.json?language=en'
    )).json();
    const factText = fact.text;
    this.setState(() => ({fact: factText}));
  };

  componentDidMount() {
    this.getFact();
    const interval = setInterval(this.getFact, 120000);
  }

  render() {
    return (
      <div className="fact-text">
        <h1>{this.state.fact}</h1>
      </div>
    );
  }
}

export default fact;
