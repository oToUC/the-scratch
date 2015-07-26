import path from 'path';
import React, {Component} from 'react';
import CounterButton from '../components/CounterButton';

const styles = (function getStyle() {
  const stats = require('../../webpack-stats.json');
  if (__CLIENT__) {
    return require('./Home.scss');
  }
  return stats.css.modules[path.join(__dirname, './Home.scss')];
})();

export default class Home extends Component {
  render() {
    return (
      <div>
        <div className="jumbotron">
          <h1>React Redux Example</h1>

          <p>
            by <a href="https://twitter.com/erikras" target="_blank">@erikras</a>
            <a className={styles.github} href="https://github.com/erikras/react-redux-universal-hot-example" target="_blank">
              <i className="fa fa-github"/> View on Github
            </a>
          </p>
          <iframe
              src="https://ghbtns.com/github-btn.html?user=erikras&repo=react-redux-universal-hot-example&type=star&count=true&size=large"
              frameBorder="0" allowTransparency="true" scrolling="0" width="160px" height="30px"></iframe>
          <iframe
              src="https://ghbtns.com/github-btn.html?user=erikras&amp;repo=react-redux-universal-hot-example&amp;type=fork&amp;count=true&size=large"
              allowTransparency="true" frameBorder="0" scrolling="0" width="160px" height="30px"></iframe>
        </div>

        <div>
          <CounterButton/>
        </div>
      </div>
    );
  }
}
