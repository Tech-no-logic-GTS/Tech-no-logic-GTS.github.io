import { motion } from "framer-motion";
import useWindowSize from "../hooks/windowSize";
import blobSVG from "../assets/blob_1.svg";

const Hero = () => {
    const width = useWindowSize().width;

    const animateProps = {
        x: ["30px", "-30px", "30px"],
    };
    const animationProps = () => {
        return {
            x: {
                duration: [4, 6, 5, 10, 6, 9, 3][Math.round(Math.random() * 6)],
                repeat: Infinity,
                ease: "easeOut",
            },
        };
    };

    return (
        <div>
            <div className="h-screen relative">
                <motion.span
                    className="square absolute w-20rem h-20rem opacity-50"
                    style={{ top: "-21%", left: "3%" }}
                    initial={{ x: `${Math.round(Math.random() * 20) - 10}px` }}
                    animate={animateProps}
                    transition={animationProps()}
                />

                {width >= 750 && (
                    <motion.span
                        className="square absolute w-25rem h-25rem opacity-40"
                        style={{ top: "-12%", right: "-5%" }}
                        animate={animateProps}
                        transition={animationProps()}
                    />
                )}
                <motion.span
                    className="square absolute w-15rem h-15rem opacity-10"
                    style={{ bottom: "0%", left: "-5%" }}
                    animate={animateProps}
                    transition={animationProps()}
                />
                <motion.span
                    className="square absolute w-5rem h-5rem opacity-90"
                    style={{ top: "70%", right: "27%" }}
                    animate={animateProps}
                    transition={animationProps()}
                />
                {width >= 550 && (
                    <motion.span
                        className="square absolute w-17rem h-17rem opacity-10"
                        style={{
                            bottom: "29%",
                            left: "32%",
                        }}
                        animate={animateProps}
                        transition={animationProps()}
                    />
                )}
                <motion.span
                    className="square absolute w-2rem h-2rem opacity-80"
                    style={{ top: "35%", left: "10%" }}
                    animate={animateProps}
                    transition={animationProps()}
                />
                <motion.span
                    className="square absolute w-23rem h-23rem opacity-10"
                    style={{ bottom: "-7%", right: "-5%" }}
                    animate={animateProps}
                    transition={animationProps()}
                />
                <div className="flex relative w-full h-full justify-content-center align-items-center text-center">
                    <div className="flex flex-column align-items-center w-6 text-white">
                        <span
                            className="font-bold my-1"
                            style={{ fontSize: "5rem" }}
                        >
                            Tech-No-Logic
                        </span>
                        {width >= 740 && (
                            <p className="text-2xl">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Delectus facere sint porro
                                blanditiis totam itaque tempora, ullam,
                                doloremque id saepe eveniet
                            </p>
                        )}
                    </div>
                </div>
            </div>
            <div className="relative h-screen w-screen z-0">
                <img src={blobSVG} alt="blob" className="bg-blob" />
            </div>
        </div>
    );
};

export default Hero;
