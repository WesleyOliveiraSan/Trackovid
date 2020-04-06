import React, { useState } from 'react';
import ReactMapGL from 'react-map-gl';
import env from '../../env'

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
            mapboxApiAccessToken={env.CLIENT_MAPBOX.ACCESS_TOKEN}
            {...viewport}
            onViewportChange={setViewport}
            mapStyle='mapbox://styles/mapbox/outdoors-v11'
        />
    );
}

export default Map