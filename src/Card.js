import React, { Component } from 'react';

import './Card.css';

export default class Card extends Component {
  render () {
    const { label } = this.props;
    return (
      <div
        className="Card"
      >
        {label}
      </div>
    );
  }
}
