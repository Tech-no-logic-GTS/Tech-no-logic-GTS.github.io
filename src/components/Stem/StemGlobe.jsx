import { useState, useRef, useEffect, useCallback } from "react";
import Globe from "react-globe.gl";
import useWindowSize from "../../hooks/windowSize";

const StemGlobe = () => {
    const size = useWindowSize();
    const [hexData, setHexData] = useState({
        features: [],
    });
    const globeEl = useRef();

    useEffect(() => {
        fetch(
            "https://raw.githubusercontent.com/vasturiano/react-globe.gl/master/example/datasets/ne_110m_admin_0_countries.geojson"
        )
            .then((res) => res.json())
            .then(setHexData);
    }, [setHexData]);

    useEffect(() => {
        globeEl.current.controls().autoRotate = true;
        if (size.width <= 425) {
            globeEl.current.camera().zoom = 0.6;
        } else {
            globeEl.current.camera().zoom = 1;
        }
        // globeEl.current.controls().autoRotateSpeed = 0.2;
        // console.log(globeEl.current.camera().zoom);

        const MAP_CENTER = {
            lat: 0,
            lng: 0,
            altitude: 1.5,
        };
        globeEl.current.pointOfView(MAP_CENTER, 0);
    }, [globeEl, size]);

    return (
        <>
            <Globe
                ref={globeEl}
                width={size.width}
                waitForGlobeReady={false}
                enablePointerInteraction={false}
                atmosphereColor="#2196f3"
                backgroundColor="rgba(0,0,0,0)"
                hexPolygonsData={hexData.features}
                hexPolygonResolution={3} //values higher than 3 makes it buggy
                hexPolygonMargin={0.62}
                hexPolygonColor={useCallback(() => "#4d8ff0", [])}
                onGlobeReady={() => {
                    console.log("Ready");
                }}
            />
        </>
    );
};

export default StemGlobe;
