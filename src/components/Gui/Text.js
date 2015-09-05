import React, {Component} from 'react';
import GuiInput from './Input';

export default class GuiText extends Component {
  static propTypes = {
    defaultValue: React.PropTypes.string
  };

  static defaultProps = {
    type: 'text'
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <GuiInput {...this.props} />
    );
  }

  static listItemClassName = 'field text';
}
