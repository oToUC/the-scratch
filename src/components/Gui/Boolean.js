import React, {Component} from 'react';
import GuiInput from './Input';

export default class GuiBoolean extends Component {
  static propTypes = {
    defaultValue: React.PropTypes.bool
  };

  static defaultProps = {
    type: 'checkbox'
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <GuiInput {...this.props} />
    );
  }

  static listItemClassName = 'field toggle';
}
