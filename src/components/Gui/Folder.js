import React, {Component} from 'react';

export default class GuiFolder extends Component {
  static propTypes = {
    header: React.PropTypes.string
  };

  static defaultProps = {
    header: null
  };

  constructor(props) {
    super(props);
  }

  render() {
    const style = require('./Folder.scss');

    let header = null;
    if (this.props.header) {
      header = (<div className={style.li}>
        <span>{this.props.header}</span>
      </div>);
    }

    return (
      <div className={style.folder}>
        {header}
        <ul className={style.ul}>
          {React.Children.map(this.props.children, (itemText, index) => {
            return <li className={itemText.type.listItemClassName + ' ' + style.li} key={index + itemText}>{itemText}</li>;
          })}
        </ul>
      </div>
    );
  }

  static listItemClassName = 'folder';
}
