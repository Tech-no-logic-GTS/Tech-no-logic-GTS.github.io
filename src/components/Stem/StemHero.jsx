import React from "react";
import StemGlobeLazy from "./StremGlobeLazy";
// const StemGlobe = React.lazy(() => import("./StemGlobe"));

const StemHero = () => {
    return (
        <div className="flex flex-row flex-wrap justify-content-center align-items-center h-screen relative">
            <div className="flex flex-column text-center justify-content-center z-1">
                <div className="hero-title font-bold my-1 blur border-change">
                    <span style={{ color: "#2c90a7" }}>S</span>.
                    <span style={{ color: "#ed7a7f" }}>T</span>.
                    <span style={{ color: "#689c76" }}>E</span>.
                    <span style={{ color: "#e6b75b" }}>M</span>
                </div>
            </div>
            <div id="globe-container" className="absolute pointer-events-none">
                {/* <React.Suspense
                    fallback={
                        <div className="relative w-screen h-screen"></div>
                    }
                ></React.Suspense> */}
                <StemGlobeLazy />
            </div>
        </div>
    );
};

export default StemHero;
