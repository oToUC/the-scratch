import React, {Component} from 'react';
import GuiFolder from './Folder';

export default class Gui extends Component {
  static propTypes = {
    children: React.PropTypes.oneOfType([
      React.PropTypes.arrayOf(React.PropTypes.node),
      React.PropTypes.node
    ]),
    header: React.PropTypes.string
  };

  static defaultProps = {};

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
    if (!this.dragStartX) {
      return;
    }

    e.preventDefault();

    const diff = e.clientX - this.dragStartX;
    this.dragStartX = e.clientX;

    const state = this.state;
    state.width += diff;
    this.setState(state);
  }

  state = {
    width: 200
  };

  render() {
    const style = require('./Gui.scss');

    return (
      <div className={style.gui + ' menu'} style={{width: this.state.width + 'px'}} ref="gui">
        {/* GUI List items */}
        <GuiFolder header={this.props.header}>
          {this.props.children}
        </GuiFolder>

        {/* Handle for dragging */}
        <div className={style.dragger}
             onMouseDown={this.onDragStart.bind(this)}
        ></div>
      </div>
    );
  }
}
