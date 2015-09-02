import React, {Component, PropTypes} from 'react';
import GuiInput from './Input';

export default class GuiButton extends Component {
  static listItemClassName = 'field button';

  static defaultProps = {
    type: 'button'
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
