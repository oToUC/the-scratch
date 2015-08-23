import React, {Component, PropTypes} from 'react';

const style = {

};

export default class GuiFolder extends Component {
  static defaultProps = {
  };

  constructor(props) {
    super(props);
  }

  render() {
    const children = !!this.props.children ? this.props.children : [];
    const items = children instanceof Array ? children : [children];

    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}
