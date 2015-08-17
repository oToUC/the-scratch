import React, {Component, PropTypes} from 'react';

const style = {
  position: 'relative',
  color: 'black'
};

export default class Input extends Component {
  static defaultProps = {
    type: 'text'
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

    this.state = {
      type: props.type
    };
  }

  handleChange() {
    console.log(this.state.value);
  }

  render() {
    return (
      <input
        type={this.state.type}
        style={style}
        onChange={this.handleChange}
        defaultValue="Hello!"
      />
    );
  }
}
