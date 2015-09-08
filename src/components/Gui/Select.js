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

  static listItemClassName = 'field list';

  render() {
    return (
      <GuiInput {...this.props} />
    );
  }
}
