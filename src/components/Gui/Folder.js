import React, {Component, PropTypes} from 'react';
import Immutable from 'immutable';

export default class GuiFolder extends Component {
  static listItemClassName = 'folder';

  static defaultProps = {
    style: require('./Folder.scss')
  };

  constructor(props) {
    super(props);
  }

  render() {
    const createItem = (itemText, index) => {
      return <li className={itemText.type.listItemClassName + ' ' + this.props.style.li} key={index + itemText}>{itemText}</li>;
    };

    const children = !!this.props.children ? this.props.children : [];
    const items = children instanceof Array ? children : [children];

    let header = null;
    if (this.props.header) {
      header = <div className={this.props.style.li}>
        <span>{this.props.header}</span>
      </div>
    }

    return (
      <div className={this.props.style.folder}>
        {header}
        <ul className={this.props.style.ul}>
          {items.map(createItem)}
        </ul>
      </div>
    );
  }
}
