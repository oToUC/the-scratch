import React, {Component, PropTypes} from 'react';
import Immutable from 'immutable';

const style = {};

export default class GuiFolder extends Component {
  static style = {
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

  static listItemClassName = 'folder';  

  static defaultProps = {};

  state = {
    style: Immutable.fromJS(GuiFolder.style).toJS()
  };

  constructor(props) {
    super(props);
  }

  render() {
    const createItem = (itemText, index) => {
      return <li className={itemText.type.listItemClassName} style={this.state.style.li} key={index + itemText}>{itemText}</li>;
    };

    const children = !!this.props.children ? this.props.children : [];
    const items = children instanceof Array ? children : [children];

    let header = null;
    if (this.props.header) {
      header = <div style={this.state.style.li}>
        <span>{this.props.header}</span>
      </div>
    }

    return (
      <div>
        {header}
        <ul style={this.state.style.ul}>
          {items.map(createItem)}
        </ul>
      </div>
    );
  }
}
