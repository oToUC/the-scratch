import React, {Component, PropTypes} from 'react';

const style = {
  position: 'relative'
};

export default class ListItem extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <li>
        {this.props.children}
      </li>
    );
  }
}
