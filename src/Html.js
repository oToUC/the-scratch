import React, {Component, PropTypes} from 'react';
import serialize from 'serialize-javascript';
import DocumentMeta from 'react-document-meta';
const cdn = '//cdnjs.cloudflare.com/ajax/libs/';

/**
 * Wrapper component containing HTML metadata and boilerplate tags.
 * Used in server-side code only to wrap the string output of the
 * rendered route component.
 *
 * The only thing this component doesn't (and can't) include is the
 * HTML doctype declaration, which is added to the rendered output
 * by the server.js file.
 */
export default class Html extends Component {
  static propTypes = {
    assets: PropTypes.object,
    component: PropTypes.object,
    store: PropTypes.object
  }

  render() {
    const {assets, component, store} = this.props;
    const content = React.renderToString(component);
    return (
      <html lang="en-us">
        <head>
          <meta charSet="utf-8"/>
          {DocumentMeta.renderAsReact()}

          <link rel="shortcut icon" href="/favicon.ico" />
          <link type="text/plain" rel="author" href="/humans.txt" />
          <link href={cdn + 'twitter-bootstrap/3.3.5/css/bootstrap.css'}
                media="screen, projection" rel="stylesheet" type="text/css" />
          <link href={cdn + 'font-awesome/4.3.0/css/font-awesome.min.css'}
                media="screen, projection" rel="stylesheet" type="text/css" />

          {/* styles (will be present only in production with webpack extract text plugin) */}
          {Object.keys(assets.styles).map((style, i) =>
            <link href={assets.styles[style]} key={i} media="screen, projection"
                  rel="stylesheet" type="text/css"/>
          )}


          <script src="https://maps.googleapis.com/maps/api/js"></script>
          <script src="/components/dat.gui/dat.gui.min.js"></script>
          <script src="/components/dat.gui/dat.color.min.js"></script>
          <script src="/components/three.js/three.min.js"></script>
          <script src="/components/google-maps-api-threejs-layer/threejs-layer.js"></script>
          <script src="/components/stats.js/build/stats.min.js"></script>
        </head>
        <body>
          <div id="content" dangerouslySetInnerHTML={{__html: content}}/>
          <script dangerouslySetInnerHTML={{__html: `window.__data=${serialize(store.getState())};`}} />
          <script src={assets.javascript.main}/>
        </body>
      </html>
    );
  }
}
