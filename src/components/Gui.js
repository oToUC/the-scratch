import React, {Component, PropTypes} from 'react';
import Immutable from 'immutable';

export default class Gui extends Component {
  static style = {
    dragger: {
      width: '6px',
      marginRight: '-3px',
      cursor: 'ew-resize',
      position: 'absolute',
      right: 0,
      backgroundColor: 'red',
      top: 0,
      bottom: 0
    },

    gui: {
      position: 'relative',
      backgroundColor: 'black',
      color: 'white',
      width: '215px',
      // resize: 'both',
      overflowX: 'hidden',
      overflowY: 'auto',
      float: 'left',
      clear: 'both',
      paddingRight: '3px',
      marginBottom: '10px'
    },

    guiLeft: {

    },

    holder: {
      width: '6px',
      right: '10px',
      // height: '420px',
      cursor: 'ew-resize',
      position: 'absolute'
    },

    li: {
      paddingTop: 0,
      paddingRight: '4px',
      paddingBottom: 0,
      paddingLeft: '5px',
      overflow: 'hidden',
      lineHeight: '27px',
      height: '27px'
    },

    ul: {
      margin: 0,
      padding: 0,
      clear: 'both',
      listStyle: 'none',
      width: '100%'
    }
  };

  state = {
    style: Immutable.fromJS(Gui.style).toJS()
  };

  constructor(props) {
    super(props);
  }

  onDragStart(e) {
    e.preventDefault();

    this.dragStartX = e.clientX;

    this.onDragStopFunc = this.onDragStop.bind(this);
    this.onDragFunc = this.onDrag.bind(this);

    window.addEventListener('mouseup', this.onDragStopFunc);
    window.addEventListener('mousemove', this.onDragFunc);
  }

  onDragStop(e) {
    e.preventDefault();

    this.dragStartX = null;

    window.removeEventListener('mouseup', this.onDragStopFunc);
    window.removeEventListener('mousemove', this.onDragFunc);
  }

  onDrag(e) {
    e.preventDefault();

    if(!this.dragStartX) {
      return;
    }

    const diff = e.clientX - this.dragStartX;
    this.dragStartX = e.clientX;

    const state = this.state;
    state.style.gui.width = (parseInt(state.style.gui.width.replace('px', '')) + diff) + "px";
    this.setState(state);
  }

  render() {
    const createItem = (itemText, index) => {
      return <li style={this.state.style.li} key={index + itemText}>{itemText}</li>;
    }

    const items = this.props.children instanceof Array ? this.props.children : [this.props.children];

    return (
      <div style={this.state.style.gui} ref="gui">
        <ul style={this.state.style.ul}>
            {items.map(createItem)}
        </ul>
        <div style={this.state.style.dragger}
             onMouseDown={this.onDragStart.bind(this)}
        />
      </div>
    );
  }
}
