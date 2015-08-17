import React, {Component, PropTypes} from 'react';
import ListItem from './ListItem';

const style = {
  position: 'relative'
};

export default class GuiRow extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ListItem>
        <label>Kokot</label>
        <input type="text"></input>
      </ListItem>
    );
  }
}
