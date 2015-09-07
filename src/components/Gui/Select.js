import React, {Component} from 'react';
import GuiInput from './Input';

export default class GuiSelect extends Component {
  static propTypes = {
    defaultValue: React.PropTypes.string
  };

  static defaultProps = {
    type: 'select'
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <GuiInput {...this.props} />
    );
  }

  static listItemClassName = 'field list';
}
