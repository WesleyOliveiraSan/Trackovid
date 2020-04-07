import React from "react";
import { VectorMap } from "react-jvectormap";

const handleClick = (e, stateCode) => {
    console.log(stateCode);
};

const Map = () => {
    return (
        <div>
            <VectorMap
                map={"brazil"}
                backgroundColor="transparent" //ocean blue: #0077be
                zoomOnScroll={true}
                containerStyle={{
                    width: "400px",
                    height: "400px"
                }}
                onRegionClick={handleClick}
                regionStyle={{
                    initial: {
                        fill: "#000",
                        "fill-opacity": 0.9,
                    },
                    hover: {
                        "fill-opacity": 0.8,
                    },
                    selected: {
                        fill: "#2938bc"
                    }
                }}
                regionsSelectable
                regionsSelectableOne
            />
        </div>
    );
};

export default Map;
