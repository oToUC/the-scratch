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
    
    this.state = {
      collapsed: false
    };
  }

  render() {
    const style = require('./Folder.scss');

    const styleCollapsed = this.state.collapsed ? ' ' + style.collapsed : '';
    
    let header = null;
    if (this.props.header) {
      header = (<div className={style.li} onClick={this.onHeaderClick.bind(this)}>
        <span className={style.header + styleCollapsed}>{this.props.header}</span>
      </div>);
    }

    return (
      <div className={style.root}>
        {header}
        <ul>
          {React.Children.map(this.props.children, (itemText, index) => {
            const className = style[itemText.type.listItemClassName] || itemText.type.listItemClassName;
            return <li className={className + styleCollapsed} key={index + itemText}>{itemText}</li>;
          })}
        </ul>
      </div>
    );
  }

  onHeaderClick(e) 
  {
    const state = this.state;
    state.collapsed = !state.collapsed;
    this.setState(state);
  }
  
  static listItemClassName = 'folder';
}
