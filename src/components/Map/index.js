import React from "react";

//Services
import { clientAPICovid } from '../../services/api'

//Dependencies
import { VectorMap } from "react-jvectormap";

const handleClick = (e, stateCode) => {
    clientAPICovid.get(`/brazil/uf/${stateCode}`)
        .then(res => {
            console.log(res.data);
        })
        .catch(err => console.log(err.message));
};

const Map = () => {
    return (
        <div>
            <VectorMap
                map={"brazil"}
                backgroundColor="transparent" //ocean blue: #0077be
                zoomOnScroll={true}
                containerStyle={{
                    width: "inherit",
                    height: "400px"
                }}
                onRegionClick={handleClick}
                regionStyle={{
                    initial: {
                        fill: "#50d890",
                        "fill-opacity": 0.9,
                    },
                    hover: {
                        "fill-opacity": 0.8,
                    },
                    selected: {
                        fill: "#48B97D",
                        "fill-opacity": 0.9
                    }
                }}
                regionsSelectable
                regionsSelectableOne
            />
        </div>
    );
};

export default Map;
