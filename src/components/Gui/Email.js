import React, {Component, PropTypes} from 'react';
import GuiInput from './Input';

export default class GuiEmail extends Component {
  static defaultProps = {
    type: 'email'
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
