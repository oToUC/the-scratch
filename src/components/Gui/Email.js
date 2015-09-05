import React, {Component} from 'react';
import GuiInput from './Input';

export default class GuiEmail extends Component {
  static propTypes = {
    defaultValue: React.PropTypes.string
  };

  static defaultProps = {
    type: 'email'
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <GuiInput {...this.props} />
    );
  }

  static listItemClassName = 'field email';
}
