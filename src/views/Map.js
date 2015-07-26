import React, {Component} from 'react';

const styles = {
    map: {
        marginTop: '-20px',
        marginTop: '-20px',
        height: '600px',
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
            <div ref='map' style={styles.map}></div>
        );
    }
}

Map.defaultProps = {
    initialZoom: 8,
    mapCenterLat: 49.191030,
    mapCenterLng: 16.611521
};

export default Map;