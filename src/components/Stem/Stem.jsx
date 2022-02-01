import React from "react";
import "./stem.css";
import StemHero from "./StemHero";
import StemMain from "./StemMain";

const Stem = () => {
    return (
        <>
            <div className="relative w-screen">
                <StemHero />
                <React.Suspense fallback={null}>
                    <StemMain />
                </React.Suspense>
            </div>
        </>
    );
};

export default Stem;
