import React, {Component, PropTypes} from 'react';

const style = {
  gui: {
    position: 'relative',
    backgroundColor: 'black',
    color: 'white',
    width: '215px',
    // resize: 'both',
    overflow: 'auto'
  },

  holder: {
    width: '6px',
    right: '10px',
    // height: '420px',
    cursor: 'ew-resize',
    position: 'absolute'
  }
};

export default class Input extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    var createItem = function(itemText, index) {
      return <li key={index + itemText}>{itemText}</li>;
    };

    return (
      <div style={style.gui}>
        {this.props.children}
      </div>
    );
  }
}
