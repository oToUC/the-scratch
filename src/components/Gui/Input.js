import React, {Component, PropTypes} from 'react';
import Immutable from 'immutable';

export default class GuiInput extends Component {
  static listItemClassName = 'field input';

  static defaultProps = {
    element: 'input',
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
    const { style, title, ...other } = this.props;

    var element = React.createFactory(this.props.element);

    const props = Immutable.fromJS(other).toJS();
    props.className = style.input;

    console.log(props);

    var reactElement = element(props, this.props.children);

    return (
      <div className={style.guiInput}>
        <span className={style.span}>
          <label className={style.label}>{title}</label>
        </span>
        <div className={style.field}>
          {reactElement}
        </div>
      </div>
    );
  }
}
