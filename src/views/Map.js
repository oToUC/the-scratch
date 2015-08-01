import React, {Component} from 'react';

const styles = {
    map: {
        marginTop: '-20px',
        height: '600px',
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
                zoom: this.props.initialZoom
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

    render() {
        return (
            <div>

                <div ref='map' style={styles.map}></div>
                <div ref="stats" style={styles.stats} />
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