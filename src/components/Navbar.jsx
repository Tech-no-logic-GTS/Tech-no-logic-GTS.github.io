import { useState } from "react";
import { Card } from "primereact/card";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
// import useWindowSize from "../hooks/windowSize";

const NavBarCommonContent = () => {
    return (
        <Link to="/">
            <div className="flex align-items-center">
                <div className="border-2 w-3rem h-3rem bg-white border-round" />
                <h1 className="px-2 my-2 shine-text font-bold">
                    Tech-No-Logic
                </h1>
            </div>
        </Link>
    );
};

const NavBar = () => {
    // const width = useWindowSize().width;
    const [showMenu, setShowMenu] = useState(false);

    return (
        <div
            className="flex flex-column align-items-center fixed width-full"
            style={{ zIndex: 10 }}
        >
            {/* {width >= 930 ? (
                <Card className="navbar mx-2 border-change m-2 shadow-5 shine-border w-10">
                    <div className="flex align-items-center px-4">
                        <NavBarCommonContent />
                        <div
                            className="flex w-30rem justify-content-between ml-auto font-bold text-2xl shine-text"
                            id="links"
                        >
                            <div>
                                <Link to="Interact">
                                    <i className="pi pi-link text-2xl font-bold px-2" />
                                    Interact
                                </Link>
                            </div>
                            <div>
                                <Link to="Blogs">
                                    <i className="pi pi-link text-2xl font-bold px-2" />
                                    Blogs
                                </Link>
                            </div>
                            <div>
                                <Link to="WeEvolve">
                                    <i className="pi pi-link text-2xl font-bold px-2" />
                                    WeEvolve
                                </Link>
                            </div>
                            <div>
                                <Link to="WeEvolve">
                                    <div className="py-2 w-full">
                                        <i className="pi pi-link text-2xl font-bold px-2" />
                                        WeEvolve
                                    </div>
                                </Link>
                            </div>
                            <div>
                                <Link to="Stem">
                                    <div className="py-2 w-full">
                                        <i className="pi pi-link text-2xl font-bold px-2" />
                                        Stem
                                    </div>
                                </Link>
                            </div>
                            <div>
                                <Link to="AboutUs">
                                    <div className="py-2 w-full">
                                        <i className="pi pi-link text-2xl font-bold px-2" />
                                        About Us
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </Card>
            ) : (
                <> */}
            <Card className="navbar mx-2 border-change m-2 width-full shadow-5 shine-border">
                <div className="flex flex-column">
                    <div className="flex align-items-center py-2 px-4">
                        <NavBarCommonContent />
                        <i
                            className="pi pi-bars text-3xl ml-auto text-white font-bold"
                            onClick={() => {
                                setShowMenu(!showMenu);
                            }}
                        />
                    </div>
                </div>
            </Card>
            <AnimatePresence initial={false}>
                {showMenu && (
                    <motion.div
                        className="flex justify-content-center w-10"
                        style={{ zIndex: 1 }}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                        transition={{ type: "spring" }}
                    >
                        <Card className="navbar mx-2 border-change m-2 shadow-5 shine-border w-full">
                            <div
                                className="flex flex-column pl-5 py-2 ml-auto font-bold text-2xl shine-text"
                                id="links"
                            >
                                <Link
                                    className="link"
                                    to="Interact"
                                    onClick={() => setShowMenu(false)}
                                >
                                    <div className="py-2 w-full">
                                        <i className="pi pi-link link text-2xl font-bold px-2 tranlate-icn" />
                                        Interact
                                    </div>
                                </Link>
                                <a
                                    className="link"
                                    href="https://gurukulblog.wixsite.com/website"
                                    rel="noreferrer"
                                    target="_blank"
                                    onClick={() => setShowMenu(false)}
                                >
                                    <div className="py-2 w-full">
                                        <i className="pi pi-external-link text-2xl font-bold px-2 translate-icn" />
                                        Blogs
                                        {/* <i className="pi pi-external-link blur text-2xl" /> */}
                                    </div>
                                </a>
                                <Link
                                    className="link"
                                    to="WeEvolve"
                                    onClick={() => setShowMenu(false)}
                                >
                                    <div className="py-2 w-full">
                                        <i className="pi pi-link text-2xl font-bold px-2 tranlate-icn" />
                                        WeEvolve
                                    </div>
                                </Link>
                                <Link
                                    className="link"
                                    to="Stem"
                                    onClick={() => setShowMenu(false)}
                                >
                                    <div className="py-2 w-full">
                                        <i className="pi pi-link text-2xl font-bold px-2 tranlate-icn" />
                                        Stem
                                    </div>
                                </Link>
                                <Link
                                    className="link"
                                    to="About-Us"
                                    onClick={() => setShowMenu(false)}
                                >
                                    <div className="py-2 w-full">
                                        <i className="pi pi-link text-2xl font-bold px-2 tranlate-icn" />
                                        About Us
                                    </div>
                                </Link>
                            </div>
                        </Card>
                    </motion.div>
                )}
            </AnimatePresence>
            {/* </>
            )} */}
        </div>
    );
};

export default NavBar;
