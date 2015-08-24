import React, {Component, PropTypes} from 'react';

export default class GuiInput extends Component {
  static style = {
    field: {
      float: 'left',
      width: '60%'
    },

    input: {
      position: 'relative',
      color: '#1ed36f',
      width: '100%',
      background: '#303030',
      border: 0,
      outline: 'none',
      placeholder: 'white'
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

  static listItemClassName = 'field input';  

  static defaultProps = {
    type: 'text',
    style: GuiInput.style
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
        <span style={GuiInput.style.span}>
          <label style={GuiInput.style.label}>{this.props.title}</label>
        </span>
        <div style={GuiInput.style.field}>
          <input
            {...this.props}
            style={GuiInput.style.input}
          />
        </div>
      </div>
    );
  }
}
