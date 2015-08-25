import React, {Component, PropTypes} from 'react';
import Immutable from 'immutable';

export default class GuiInput extends Component {
  static listItemClassName = 'field input';

  static defaultProps = {
    type: 'text',
    style: require('./Input.scss')
  };

  state = {
    value: this.props.defaultValue
  };

  static propTypes = {
    type: React.PropTypes.oneOf([
      'button',
      'checkbox',
      'color',
      'date',
      'datetime',
      'datetime-local',
      'email',
      'month',
      'number',
      'radio',
      'range',
      'search',
      'submit',
      'tel',
      'text',
      'time',
      'url',
      'week'
    ])
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={this.props.style.guiInput}>
        <span className={this.props.style.span}>
          <label className={this.props.style.label}>{this.props.title}</label>
        </span>
        <div className={this.props.style.field}>
          <input
            {...this.props}
            className={this.props.style.input}
          />
        </div>
      </div>
    );
  }
}
