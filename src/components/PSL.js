import React, {Component} from 'react';
import psllogo from '../psl.gif'

class PSL extends Component {
  state = {
    now: Date.now(),
    deadline: this.props.time,
    remaining: 0,
    interval: 1000,
  };

  minutesAndSeconds = () => {
    const remaining = this.state.deadline - this.state.now;
    const minutes = Math.floor(remaining / 60000);
    const seconds = ((remaining % 60000) / 1000).toFixed(0);
    const remainingDisplay =
      seconds === 60
        ? minutes + 1 + ':00'
        : minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
    this.setState(() => ({remaining: remainingDisplay, now: Date.now()}));
  };



  getFact = async () => {
    // get fact
    const fact = await (await fetch(
      'https://cors-anywhere.herokuapp.com/https://uselessfacts.jsph.pl//random.json?language=en'
    )).json();
    var regex = /`/gi;
    const factText = fact.text.replace(regex, "'");
    this.setState(() => ({fact: factText}));
  };

  componentDidMount() {
    this.minutesAndSeconds();
    const interval = setInterval(this.minutesAndSeconds, this.state.interval);
  }

  render() {
    return (
      <div className="psl-timer__wrapper">
        <img src={psllogo} alt="psl" />
        <h1 className="psl-timer">{this.state.remaining}</h1>
      </div>
    );
  }
}

export default PSL;
