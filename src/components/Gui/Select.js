import React, {Component, PropTypes} from 'react';
import GuiInput from './Input';

export default class GuiSelect extends Component {
  static listItemClassName = 'field list';

  static defaultProps = {
    type: 'radio'
  };

  static propTypes = {
    defaultValue: React.PropTypes.string
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <GuiInput element='select' {...this.props} />
    );
  }
}
