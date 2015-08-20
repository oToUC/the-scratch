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

export default class GuiText extends Component {
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
      type: props.type,
      value: null
    };
  }

  handleChange(e) {
    const value = e.target.value;
    this.state.value = value;
    this.setState(this.state);

    console.log(value);
  }

  render() {
    return (
      <div>
        <span style={style.span}><label style={style.label}>{this.props.title}</label></span>
        <div style={style.field}>
          <input
            type={this.state.type}
            style={style.input}
            defaultValue='42'
            onChange={this.handleChange.bind(this)}
          />
        </div>
      </div>
    );
  }
}
