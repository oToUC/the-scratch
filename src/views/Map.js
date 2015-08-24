import React, {Component} from 'react';

import Gui from '../components/Gui/Gui';
import GuiBoolean from '../components/Gui/Boolean';
import GuiEmail from '../components/Gui/Email';
import GuiFolder from '../components/Gui/Folder';
import GuiNumber from '../components/Gui/Number';
import GuiText from '../components/Gui/Text';

class Map extends Component {
  static styles = {
    map: {
      position: 'absolute',
      height: 'calc(100% - 55px)',
      width: '100%'
    },
    stats: {
      zIndex: 100
    }
  };

  static defaultProps = {
    initialZoom: 8,
    mapCenterLat: 49.191030,
    mapCenterLng: 16.611521
  };

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
    // debug;
  }

  render() {
    const self = this;
    return (
      <div ref='mapContainer'>
        <div ref='map' style={Map.styles.map}></div>
        <div ref="stats" style={Map.styles.stats}/>

        <Gui align="left" header="Person">
          <GuiFolder>
            <GuiText
              title="Firstname"
              defaultValue="Little Bobby"
              onChange={this.onChange.bind(this)}
            />

            <GuiText
              title="Lastname"
              defaultValue="Table"
            />
          </GuiFolder>

          <GuiEmail
            title="Email"
            defaultValue="bobby@exmaple.com"
          />

          <GuiNumber
            title="Age"
            defaultValue={45}
            min={0}
            max={200}
            step={1}
          />

          <GuiNumber
            title="Hapiness"
            defaultValue={0.5}
            min={0}
            max={1}
            step={0.01}
          />

          <GuiBoolean
            title="Employed?"
            defaultChecked={true}
            onChange={this.onChange.bind(this)}
          />

          <GuiText
            title="Info"
            value="read only value"
            disabled
          />
        </Gui>

        <Gui align="right" header="Address">
          <GuiText
            title="Street"
            placeholder="Street name"
          />

          <GuiText
            title="City"
            placeholder="City name"
          />
        </Gui>

        <Gui align="left" header="Employment">
          <GuiText
            title="Job"
            placeholder="Job Title"
          />

          <GuiNumber
            title="Salary"
            placeholder="Annual salary in $"
          />
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

export default Map;