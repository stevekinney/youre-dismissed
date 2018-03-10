import React, { Component } from 'react';
import cn from 'classnames';

import './Card.css';

export default class Card extends Component {
  state = {
    isDragging: false,
    offset: null,
  };

  element = null;
  startingX = null;
  currentX = null;

  onMove(event) {
    this.currentX = event.pageX || event.touches.pageX[0];
  }

  handleMouseDown = (event) => {
    console.log(event.pageX);

    this.startingX = event.pageX;

    this.setState({
      isDragging: true,
    });
  }

  handleMouseMove = (event) => {
    const { isDragging } = this.state;
    if (!isDragging) return;

    const offset = event.pageX - this.startingX;
    this.setState({ offset });
  };

  handleMouseUp = () => {
    this.setState({
      isDragging: false,
      offset: 0,
    });
  };

  render() {
    const { label } = this.props;
    const { isDragging, offset } = this.state;
    return (
      <div
        className={
          cn('Card', {
            'Card--is-dragging': isDragging,
          })
        }
        style={{
          willChange: isDragging ? 'transform' : 'auto',
          transform: `translateX(${offset || 0}px)`,
        }}
        onMouseDown={this.handleMouseDown}
        onMouseMove={this.handleMouseMove}
        onMouseUp={this.handleMouseUp}
      >
        {label}
      </div>
    );
  }
}
