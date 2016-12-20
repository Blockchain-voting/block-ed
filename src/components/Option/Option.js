import React, { Component } from 'react';
import AjaxFunctions from '../../helpers/AjaxFunctions';
import './Option.css';

export default class Option extends Component {
  render() {
    return (
      <div className="option-item">
        <input
          type="search"
          placeholder="options"
          onChange={(e) => this.props.handleOptionUpdate(e)}
        />
        <button
          onClick={() => this.props.handleAddOption()}
        >Add Option</button>
        <button
          onClick={() => this.props.handleRemoveOption()}
        >Remove Option</button>
      </div>
    );
  }
}
