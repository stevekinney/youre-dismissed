import React, { Component } from 'react';
import Card from './Card';

import './Cards.css';

export default class Cards extends Component {
  state = {
    cards: [
      { id: 1, label: 'Vegan Spam' },
      { id: 2, label: 'Grass-fed sardines' },
      { id: 3, label: 'Wild-caught beef' },
      { id: 4, label: 'Fat-free mayo' },
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
