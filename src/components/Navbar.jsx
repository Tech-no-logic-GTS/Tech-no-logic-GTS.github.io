import { useState } from "react";
import { Card } from "primereact/card";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import useWindowSize from "../hooks/windowSize";

const NavBarCommonContent = () => {
    return (
        <Link to="/">
            <div className="flex align-items-center">
                <div className="border-2 w-3rem h-3rem bg-white border-round" />
                <h1 className="px-2 shine-text font-bold">Tech-No-Logic</h1>
            </div>
        </Link>
    );
};

const NavBar = () => {
    const width = useWindowSize().width;
    const [showMenu, setShowMenu] = useState(false);

    return (
        <div className="flex flex-column align-items-center fixed width-full z-5">
            {width >= 930 ? (
                <Card className="navbar mx-2 border-change m-2 shadow-5 shine-border w-10">
                    <div className="flex align-items-center px-4">
                        <NavBarCommonContent />
                        <div
                            className="flex flex-wrap w-30rem justify-content-between ml-auto font-bold text-2xl shine-text"
                            id="links"
                        >
                            <div>
                                <Link to="Nav-1">
                                    <i className="pi pi-link text-2xl font-bold px-2" />
                                    Nav-1
                                </Link>
                            </div>
                            <div>
                                <Link to="Nav-2">
                                    <i className="pi pi-link text-2xl font-bold px-2" />
                                    Nav-2
                                </Link>
                            </div>
                            <div>
                                <Link to="Nav-999">
                                    <i className="pi pi-link text-2xl font-bold px-2" />
                                    Nav-999
                                </Link>
                            </div>
                        </div>
                    </div>
                </Card>
            ) : (
                <>
                    <Card className="navbar mx-2 border-change m-2 width-full shadow-5 shine-border">
                        <div className="flex flex-column">
                            <div className="flex align-items-center p-2 px-4">
                                <NavBarCommonContent />
                                <i
                                    className="pi pi-bars text-3xl ml-auto font-bold"
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
                                className="flex justify-content-center w-9"
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
                                        <Link to="Nav-1">
                                            <div className="py-2 w-full">
                                                <i className="pi pi-link text-2xl font-bold px-2" />
                                                Nav-1
                                            </div>
                                        </Link>
                                        <Link to="Nav-2">
                                            <div className="py-2 w-full">
                                                <i className="pi pi-link text-2xl font-bold px-2" />
                                                Nav-2
                                            </div>
                                        </Link>
                                        <Link to="Nav-999">
                                            <div className="py-2 w-full">
                                                <i className="pi pi-link text-2xl font-bold px-2" />
                                                Nav-999
                                            </div>
                                        </Link>
                                    </div>
                                </Card>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </>
            )}
        </div>
    );
};

export default NavBar;
