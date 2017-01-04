import React, { Component } from 'react';
import AjaxFunctions from '../../helpers/AjaxFunctions';
import './Option.css';

export default class Option extends Component {
  render() {
    return (
      <div className="option-item">
        <input
          type="search"
          placeholder="option"
          onChange={(e) => this.props.handleOptionUpdate(e)}
        />
        <button
          onClick={(e) => this.props.handleRemoveOption(this.props.index)}
        >
          <img src={require('../../../assets/x.svg')}/>
        </button>
      </div>
    );
  }
}
