import React, {Component} from 'react';
import Immutable from 'immutable';

export default class GuiInput extends Component {
  static propTypes = {
    children: React.PropTypes.oneOfType([
      React.PropTypes.arrayOf(React.PropTypes.node),
      React.PropTypes.node
    ]),
    defaultValue: React.PropTypes.oneOfType([
      React.PropTypes.array,
      React.PropTypes.bool,
      React.PropTypes.number,
      React.PropTypes.string,
    ]),
    element: React.PropTypes.string,
    title: React.PropTypes.string,
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

  static defaultProps = {
    element: 'input',
    type: 'text'
  };

  constructor(props) {
    super(props);
  }

  static listItemClassName = 'field input';

  state = {
    value: this.props.defaultValue
  };

  render() {
    const style = require('./Input.scss');
    const { title, ...other } = this.props;

    const element = React.createFactory(this.props.element);

    const props = Immutable.fromJS(other).toJS();

    const reactElement = element(props, this.props.children);

    return (
      <div className={style.input}>
        <span>
          <label>{title}</label>
        </span>
        <div className={style.field}>
          {reactElement}
        </div>
      </div>
    );
  }
}
