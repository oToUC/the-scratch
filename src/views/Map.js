import React, {Component} from 'react';

import Gui from '../components/Gui/Gui';
import GuiBoolean from '../components/Gui/Boolean';
import GuiFolder from '../components/Gui/Folder';
import GuiNumber from '../components/Gui/Number';
import GuiText from '../components/Gui/Text';

const styles = {
  map: {
    position: 'absolute',
    height: 'calc(100% - 55px)',
    width: '100%'
  },
  stats: {
    zIndex: 100
  }
};

class Map extends Component {
  constructor(props) {
    super(props);

    this.layer = null;
    this.stats = null;
  }

  componentDidMount(rootNode) {
    var mapOptions = {
      center: this.mapCenterLatLng(),
      zoom: this.props.initialZoom,
      mapTypeControlOptions: {
        mapTypeIds: []
      },
      panControl: false,
      zoomControl: true,
      mapTypeControl: false,
      scaleControl: false,
      streetViewControl: false,
      overviewMapControl: false,
      zoomControlOptions: {
        style: google.maps.ZoomControlStyle.SMALL,
        position: google.maps.ControlPosition.LEFT_BOTTOM
      }
    };

    var map = new google.maps.Map(React.findDOMNode(this.refs.map), mapOptions);
    var marker = new google.maps.Marker({position: this.mapCenterLatLng(), title: 'Hi', map: map});

    this.layer = new ThreejsLayer({map: map}, function (layer) {

    });

    this.setState({map: map});

    var stats = new Stats();
    stats.setMode(0); // 0: fps, 1: ms


    React.findDOMNode(this.refs.stats).appendChild(stats.domElement);

    this.stats = stats;

    // Start ticking
    requestAnimationFrame(this.tick.bind(this));
  }

  mapCenterLatLng() {
    var props = this.props;
    return new google.maps.LatLng(props.mapCenterLat, props.mapCenterLng);
  }

  onChange(e) {
    debug;
  }

  render() {
    const self = this;
    return (
      <div ref='mapContainer'>
        <div ref='map' style={styles.map}></div>
        <div ref="stats" style={styles.stats}/>

        <Gui align="left">
          <GuiText title="Firstname" defaultValue="Little Bobby" onChange={this.onChange.bind(this)} />
          <GuiText title="Lastname" defaultValue="Table" />
          <GuiNumber title="Number" defaultValue={86} />
          <GuiBoolean title="Employed?" defaultValue={true} />
        </Gui>

        <Gui align="right">
          <GuiText title="Street" />
          <GuiText title="City" />
        </Gui>

        <Gui align="left">
          <GuiText title="Job" />
          <GuiText title="Salary" />
        </Gui>
      </div>
    );
  }

  tick() {
    // Begin of stats loop
    this.stats.begin();

    // TODO: Do heavy work here

    // Begin of stats loop
    this.stats.end();

    requestAnimationFrame(this.tick.bind(this));
  }
}

Map.defaultProps = {
  initialZoom: 8,
  mapCenterLat: 49.191030,
  mapCenterLng: 16.611521
};

export default Map;