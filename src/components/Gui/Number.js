import React, {Component} from 'react';
import GuiInput from './Input';

export default class GuiNumber extends Component {
  static propTypes = {
    defaultValue: React.PropTypes.number
  };

  static defaultProps = {
    type: 'number'
  };

  constructor(props) {
    super(props);
  }

  static listItemClassName = 'field number';

  render() {
    return (
      <GuiInput {...this.props} />
    );
  }
}
