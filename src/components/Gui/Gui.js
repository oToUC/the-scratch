import React, {Component, PropTypes} from 'react';
import Immutable from 'immutable';

import GuiFolder from './Folder';

export default class Gui extends Component {
  static defaultProps = {
    style: Immutable.fromJS(require('./Gui.scss')).toJS()
  };

  state = {
    width: 200
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
    if(!this.dragStartX) {
      return;
    }

    e.preventDefault();

    const diff = e.clientX - this.dragStartX;
    this.dragStartX = e.clientX;

    const state = this.state;
    state.width += diff;
    this.setState(state);
  }

  render() {
    return (
      <div className={this.props.style.gui + ' menu'} style={{width: this.state.width + 'px'}}ref="gui">
        {/* GUI List items */}
        <GuiFolder header={this.props.header}>
          {this.props.children}
        </GuiFolder>

        {/* Handle for dragging */}
        <div className={this.props.style.dragger}
             onMouseDown={this.onDragStart.bind(this)}
        ></div>
      </div>
    );
  }
}
