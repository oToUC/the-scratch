import React, {Component, PropTypes} from 'react';
import GuiInput from './Input';

export default class GuiNumber extends Component {
  static defaultProps = {
    type: 'number'
  };

  static propTypes = {
    defaultValue: React.PropTypes.number
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
