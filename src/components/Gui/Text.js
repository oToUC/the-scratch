import React, {Component, PropTypes} from 'react';
import GuiInput from './Input';

export default class GuiText extends Component {
  static defaultProps = {
    type: 'text'
  };

  static propTypes = {
    defaultValue: React.PropTypes.string
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <GuiInput {...this.props} />
    );
  }
}
