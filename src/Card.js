import React, { Component } from 'react';

import './Card.css';

export default class Card extends Component {
  element = null;

  render () {
    const { label } = this.props;
    return (
      <div class="Card" ref={(element) => { this.element = element; }}>
        {label}
      </div>
    );
  }
}
