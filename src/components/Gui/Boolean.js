import React, {Component, PropTypes} from 'react';
import GuiInput from './Input';

export default class GuiBoolean extends Component {
  static listItemClassName = 'field toggle';

  static defaultProps = {
    type: 'checkbox'
  };

  static propTypes = {
    defaultValue: React.PropTypes.bool
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
