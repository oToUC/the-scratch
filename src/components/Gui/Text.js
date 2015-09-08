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

  static listItemClassName = 'field text';

  render() {
    return (
      <GuiInput {...this.props} />
    );
  }
}
