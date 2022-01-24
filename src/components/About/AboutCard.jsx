import React from "react";
import "./about.css";
import { motion } from "framer-motion";
import { Avatar } from "primereact/avatar";
import { isMobile } from "react-device-detect";

const AboutCard = ({ imgURL, Name, Role }) => {
    return (
        <div className="relative flex flex-column shadow-8">
            <motion.div
                className="absolute p-3 flex flex-column justify-content-end text-center"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                whileTap={isMobile && { opacity: 1 }}
                style={{
                    width: "15rem",
                    height: "15rem",
                    background: "rgba(0,0,0,0.4)",
                }}
            >
                <span className="text-4xl text-white">{Name}</span>
                <span className="text-1xl mt-2">{Role}</span>
            </motion.div>
            <div className="border-round w-min">
                {imgURL ? (
                    <Avatar image={imgURL} size="xlarge" />
                ) : (
                    <Avatar
                        className="border-round"
                        shape="square"
                        size="xlarge"
                        icon="pi pi-user text-8xl"
                    />
                )}
            </div>
        </div>
    );
};

export default AboutCard;
