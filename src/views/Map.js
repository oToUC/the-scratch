import React, {Component} from 'react';

const styles = {
    map: {
        'margin-top': '-20px',
        height: '400px',
        width: '100%'
    }
};

class Map extends Component {
    componentDidMount(rootNode) {
        var mapOptions = {
                center: this.mapCenterLatLng(),
                zoom: this.props.initialZoom
        };

        var map = new google.maps.Map(React.findDOMNode(this.refs.map), mapOptions);
        var marker = new google.maps.Marker({position: this.mapCenterLatLng(), title: 'Hi', map: map});
        this.setState({map: map});
    }

    mapCenterLatLng() {
        var props = this.props;
        return new google.maps.LatLng(props.mapCenterLat, props.mapCenterLng);
    }

    render() {
        return (
            <div>
                <div ref='map' style={styles.map}></div>
            </div>
        );
    }
}

Map.defaultProps = {
    initialZoom: 8,
    mapCenterLat: 43.6425569,
    mapCenterLng: -79.4073126
};

export default Map;