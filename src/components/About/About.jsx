import React, { useState, useEffect, useRef } from "react";
import RINGS from "vanta/dist/vanta.rings.min";
import useWindowSize from "../../hooks/windowSize";
import AboutCard from "./AboutCard";

const About = () => {
    const width = useWindowSize().width;
    const [vantaEffect, setVantaEffect] = useState(0);
    const bgRef = useRef(null);
    useEffect(() => {
        if (!vantaEffect) {
            setVantaEffect(
                RINGS({
                    el: bgRef.current,
                    mouseControls: true,
                    touchControls: true,
                    gyroControls: false,
                    minHeight: 200.0,
                    minWidth: 200.0,
                    scale: 1.0,
                    scaleMobile: 1.0,
                    color: "#1d8cf8",
                })
            );
        }
        return () => {
            if (vantaEffect) vantaEffect.destroy();
        };
    }, [vantaEffect]);
    return (
        <>
            <div
                className="relative w-screen h-screen flex flex-column justify-content-center hero"
                ref={bgRef}
            >
                <div className="flex flex-column ml-4 blur2 border-change w-min">
                    <div
                        className={`text-white ${
                            width > 768 ? "hero-heading" : "text-8xl"
                        } text-left`}
                    >
                        About
                        <br /> Us
                    </div>
                </div>
            </div>
            <div className="w-screen h-min flex flex-column align-items-center mt-4 mb-6">
                <span className="text-8xl text-white text-center">
                    Meet the People
                </span>
                <span className="text-4xl mb-6 mt-2 text-center">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit
                </span>
                <div className="flex flex-wrap justify-content-center">
                    <div className="m-2">
                        <AboutCard Name="John Doe" Role="XYZ" />
                    </div>
                    <div className="m-2">
                        <AboutCard Name="John Doe" Role="XYZ" />
                    </div>
                    <div className="m-2">
                        <AboutCard Name="John Doe" Role="XYZ" />
                    </div>
                    <div className="m-2">
                        <AboutCard Name="John Doe" Role="XYZ" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;
