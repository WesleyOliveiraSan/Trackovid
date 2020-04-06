import React, { useState } from 'react';
import ReactMapGL from 'react-map-gl';

function Map() {
    const [viewport, setViewport] = useState({
        width: 400,
        height: 400,
        latitude: -14.2400732,
        longitude: -53.1805017,
        zoom: 3
    });

    return (
        <ReactMapGL
            mapboxApiAccessToken={'pk.eyJ1Ijoid2VzeHl6IiwiYSI6ImNrOG5oZ3IwOTB5OXUzb3FvMTViYzExeTYifQ.L7Ov3S4qJhTQApDqtH74ig'}
            {...viewport}
            onViewportChange={setViewport}
            mapStyle='mapbox://styles/mapbox/outdoors-v11'
        />
    );
}

export default Map