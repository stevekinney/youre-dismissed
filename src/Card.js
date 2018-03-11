import React, { Component } from 'react';

import './Card.css';

export default class Card extends Component {
  element = null;
  startingX = null;

  handleMouseEnter = () => {
    this.element.style.willChange = 'transform';
  };

  handleMouseLeave = () => {
    if (this.isDragging) return;
    this.element.style.willChange = '';
  };

  handleStart = (event) => {
    this.startingX = event.pageX || (event.touches && event.touches[0].pageX);
    this.isDragging = true;
    document.addEventListener('mousemove', this.handleMove);
    document.addEventListener('mouseup', this.handleEnd);
  }

  handleMove = (event) => {
    event.preventDefault();
    const currentX = event.pageX || (event.touches && event.touches[0].pageX);
    if (!currentX) return;
    const offset = currentX - this.startingX;
    this.element.style.transform = `translateX(${offset}px)`;
  };

  handleEnd = () => {

    this.isDragging = false;
    this.element.style.transform = 'auto';

    document.removeEventListener('mousemove', this.handleMove);
    document.removeEventListener('mouseup', this.handleMouseUp);

    this.element.addEventListener('transitionend', this.handleTransitionEnd);
    this.element.style.transition = `transform 0.2s`;
    this.element.style.transform = '';

  };

  handleTransitionEnd = () => {
    console.log('transitionend');
    this.element.style.transition = '';
    this.element.style.willChange = '';
    this.element.removeEventListener('transitionend', this.handleTransitionEnd);
  };

  render() {
    const { label } = this.props;
    return (
      <div
        className="Card"
        ref={element => this.element = element}
        onMouseDown={this.handleStart}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        {label}
      </div>
    );
  }
}
