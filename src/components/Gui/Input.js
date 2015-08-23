import React, {Component, PropTypes} from 'react';

const style = {
  field: {
    float: 'left',
    width: '60%'
  },

  input: {
    position: 'relative',
    color: 'black',
    width: '100%'
  },

  span: {
    cursor: 'default',
    float: 'left',
    clear: 'left',
    width: '40%',
    fontFamily: "'Lucida Grande', sans-serif",
    fontSize: '11px'
  },

  label: {
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  }
};

export default class GuiInput extends Component {
  static defaultProps = {
    type: 'text'
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
      <div>
        <span style={style.span}>
          <label style={style.label}>{this.props.title}</label>
        </span>
        <div style={style.field}>
          <input
            {...this.props}
            style={style.input}
          />
        </div>
      </div>
    );
  }
}
