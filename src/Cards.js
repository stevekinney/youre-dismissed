import React, { Component } from 'react';
import Card from './Card';

import './Cards.css';

export default class Cards extends Component {
  state = {
    cards: [
      { id: 1, label: 'Pizza' },
      { id: 2, label: 'Apples' },
      { id: 3, label: 'Wowowow' },
    ],
  };

  removeCard = id => {
    const cards = this.state.cards.filter(card => card.id !== id);
    this.setState({ cards });
  };

  render() {
    const { cards } = this.state;
    return (
      <div className="Cards">
        {cards.map(card => <Card key={card.id} { ...card } />)}
      </div>
    );
  }
}
