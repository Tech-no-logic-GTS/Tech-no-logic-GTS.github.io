import React from "react";
import { useViewportScroll } from "framer-motion";
import { VideoTag } from "react-video-tag";
import StemF1Car from "./StemF1Car";
// import StemMotionCard from "./StemMotionCard";
import useWindowSize from "../../hooks/windowSize";
import stem_img1 from "../../assets/stem_img1.jpg";
import stem_img2 from "../../assets/stem_img2.jpg";
import stem_img3 from "../../assets/stem_img3.jpg";
import stem_vid1 from "../../assets/stem_vid1.mp4";
import move from "../../assets/move.gif";
import blob_1_SVG from "../../assets/blob_1.svg";
import blob_2_SVG from "../../assets/blob_2.svg";

const StemMain = () => {
    const size = useWindowSize();
    const { scrollY } = useViewportScroll();
    console.log(scrollY.get() > 895);

    return (
        <div className="relative w-screen mt-8">
            <div
                className="w-screen text-white text-center text-8xl font-inter"
                style={{ fontWeight: 800 }}
            >
                F1 in Schools
            </div>
            <div className="flex flex-column justify-content-between z-5">
                <div className="flex flex-wrap justify-content-around m-5">
                    <img src={blob_1_SVG} alt="blob" className="bg-blob-1" />
                    {size.width > 1271 ? (
                        <div className="text-3xl text-justify p-3 w-30rem">
                            <span className="text-7xl font-semibold text-white">
                                F1 in Schools
                            </span>
                            <p className="my-1">
                                is the World's Largest STEM Challenge where
                                school students aged between 9-19 years design
                                miniature Formula1 cars using CAD/CAM tools
                                followed by manufacturing their designs on a CNC
                                machine.
                                <br /> The students also develop various life
                                skills like project management, soft skills,
                                problem solving and critical thinking.
                            </p>
                        </div>
                    ) : (
                        <div className="text-2xl text-center width-full p-3">
                            <span className="text-6xl font-semibold text-white">
                                F1 in Schools
                            </span>
                            <p className="my-1">
                                is the World's Largest STEM Challenge where
                                school students aged between 9-19 years design
                                miniature Formula1 cars using CAD/CAM tools
                                followed by manufacturing their designs on a CNC
                                machine.The students also develop various life
                                skills like project management, soft skills,
                                problem solving and critical thinking.
                            </p>
                        </div>
                    )}
                    <div className={`${size.width <= 1271 && "mx-auto"}`}>
                        <div className="m-1">
                            <img
                                src={stem_img2}
                                className={`h-full img-main border-change mt-1  ${
                                    size.width < 520 && "w-25rem"
                                }`}
                                alt="Stem 3D Print"
                            />
                        </div>
                        <div
                            className="mt-1 ml-1 flex justify-content-center relative"
                            style={{
                                zIndex: -1,
                                marginRight: size.width >= 730 && "10rem",
                            }}
                        >
                            <img
                                src={stem_img3}
                                className={`h-full img-main border-change mt-1 ${
                                    size.width >= 730 && "img-shift"
                                } ${size.width < 520 && "w-25rem"}`}
                                alt="Stem 3D Print"
                            />
                        </div>
                    </div>
                    <div className="flex flex-wrap justify-content-around my-8 mx-6 text-3xl text-center font-semibold">
                        <div className="px-3 m-2 pill-S w-fit h-fit">
                            12,00,000+ students
                        </div>
                        <div className="px-3 m-2 pill-T w-fit h-fit">
                            51 countries
                        </div>
                        <div className="px-3 m-2 pill-E w-fit h-fit">
                            Various Life Skills to learn
                        </div>

                        <div className="px-3 m-2 pill-M w-fit h-fit">
                            Training
                        </div>
                        <div className="px-3 m-2 pill-T w-fit h-fit">
                            National & World level Competition
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap justify-content-around m-5">
                    {size.width > 1271 ? (
                        <div className="flex-order-1 text-3xl text-justify p-3 w-30rem">
                            <span className="text-6xl font-semibold text-white">
                                Our Objectives
                            </span>
                            <p className="my-1">
                                ● To make learning fun again using the magnetic
                                appeal of Formula1 <br />● To help cultivate a
                                culture of research and development amongst
                                students in India <br />● To develop soft skills
                                among Indian rest of the world <br /> ● To
                                increase industry-academia collaborations and
                                partnerships
                            </p>
                        </div>
                    ) : (
                        <div className="text-2xl text-center width-full p-3">
                            <span className="text-6xl font-semibold text-white">
                                Our Objectives
                            </span>
                            <p className="my-1">
                                ● To make learning fun again using the magnetic
                                appeal of Formula1 <br />● To help cultivate a
                                culture of research and development amongst
                                students in India <br />● To develop soft skills
                                among Indian rest of the world <br /> ● To
                                increase industry-academia collaborations and
                                partnerships
                            </p>
                        </div>
                    )}
                    <div
                        className={`flex-order-0 ${
                            size.width <= 1271 && "mx-auto"
                        }`}
                    >
                        <div className="m-1">
                            <VideoTag
                                src={stem_vid1}
                                loop
                                muted
                                autoPlay
                                className="h-full w-30rem border-change mt-1"
                            />
                        </div>
                        <div
                            className="mt-1 ml-1 relative"
                            style={{
                                zIndex: -1,
                                marginRight: size.width >= 730 && "15rem",
                            }}
                        >
                            <img
                                src={stem_img1}
                                className={`h-full w-30rem border-change mt-1 ${
                                    size.width >= 730 && "img-shift"
                                } ${size.width < 520 && "w-25rem"}`}
                                alt="Stem 3D Print"
                            />
                        </div>
                    </div>
                    <div className="flex-order-2 flex flex-wrap justify-content-around my-8 mx-6 text-3xl text-center font-semibold">
                        <div className="px-3 m-2 h-fit pill-S w-fit">
                            STEM Learning Programs
                        </div>
                        <div className="px-3 m-2 h-fit pill-T w-fit">
                            STEM Challenges & Competitions
                        </div>
                        <div className="px-3 m-2 h-fit pill-E w-fit">
                            Expert Feedback Sessions
                        </div>

                        <div className="px-3 m-2 h-fit pill-M w-fit">
                            STEM Certified Courses
                        </div>
                        <div className="px-3 m-2 h-fit pill-S w-fit">
                            World's Largest STEM Challenge
                        </div>
                    </div>
                </div>
            </div>
            <img src={blob_2_SVG} alt="blob" className="bg-blob-2" />
            {size.width >= 520 && (
                <>
                    <div
                        className={`w-screen text-white text-center ${
                            size.width > 520 ? "text-8xl" : "text-7xl"
                        } font-inter mb-5 `}
                        style={{ fontWeight: 800 }}
                    >
                        Try{" "}
                        <span
                            className="underline"
                            style={{ color: "#ed7a7f" }}
                        >
                            Looking
                        </span>{" "}
                        Around
                    </div>
                    <div
                        className={`relative ${
                            size.width > 520 ? "mx-6" : "mx-3"
                        } mb-6 border-change border-blue-500 surface-overlay font-bold flex align-items-center justify-content-center`}
                        style={{
                            height: "80vh",
                            borderWidth: "0.4rem",
                            borderStyle: "solid",
                        }}
                    >
                        <React.Suspense
                            fallback={
                                <span className="text-5xl">Loading...</span>
                            }
                        >
                            <StemF1Car />
                        </React.Suspense>
                        <img
                            className="absolute w-5rem bottom-0 right-0 m-3"
                            style={{ borderRadius: "1rem" }}
                            src={move}
                            alt="UserUI"
                        />
                    </div>
                </>
            )}
            {/* <motion.div className="w-6">Hello World</motion.div> */}
            {/* {size.width >= 555 && scrollY.get() > 895 && (
                <div
                    className="fixed h-screen w-screen bottom-0"
                    // style={{ zIndex: -1 }}
                >
                    <div className="relative h-full">
                        <div
                            className="absolute w-screen h-10rem bg-white bottom-0"
                            style={
                                {
                                    // clipPath: "ellipse(70% 80% at 50% 100%)",
                                }
                            }
                        />
                        <div
                            className="absolute h-full w-screen"
                            style={{
                                // width: size.width,
                                // height: size.height,
                                bottom: "-7%",
                                left: size.width <= 1135 ? "25%" : 0,
                            }}
                        >
                            <StemF1Car />
                            <StemF1 />
                        </div>
                    </div>
                </div>
            )} */}
        </div>
    );
};

export default StemMain;
