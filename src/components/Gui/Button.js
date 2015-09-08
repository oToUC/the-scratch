import React, {Component} from 'react';
import GuiInput from './Input';

export default class GuiButton extends Component {
  static propTypes = {
    defaultValue: React.PropTypes.string
  };

  static defaultProps = {
    type: 'button'
  };

  constructor(props) {
    super(props);
  }

  static listItemClassName = 'field button';

  render() {
    return (
      <GuiInput {...this.props} />
    );
  }
}
