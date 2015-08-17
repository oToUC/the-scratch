import React, {Component, PropTypes} from 'react';

const style = {
  position: 'relative'
};

export default class List extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <label>
        {this.props.children}
      </label>
    );
  }
}
