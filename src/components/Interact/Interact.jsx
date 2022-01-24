import "./interact.css";
import { motion } from "framer-motion";
import { Button } from "primereact/button";
import InteractMain from "./InteractMain";

const InteractTitle = () => {
    return (
        <div className="flex flex-column text-center justify-content-center z-1">
            <motion.div
                className="font-bold"
                animate={{
                    "--text-color-1": ["#fff", "#00C9FF", "#fff"],
                    "--text-color-2": ["#fff", "#92FE9D", "#fff"],
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    repeatType: "mirror",
                    repeatDelay: 8,
                    ease: "easeInOut",
                }}
            >
                {/* background: linear-gradient(90deg, #00C9FF 0%, #92FE9D 100%); */}
                <motion.div
                    className="my-0 hero-gradient-text"
                    style={{
                        background:
                            "linear-gradient(90deg, var(--text-color-1) 0%, var(--text-color-2) 100%)",
                    }}
                >
                    Serve To
                </motion.div>
            </motion.div>
            <motion.div
                className="font-bold -my-5"
                animate={{
                    "--text-color-1": ["#fff", "#FC466B", "#fff"],
                    "--text-color-2": ["#fff", "#3F5EFB", "#fff"],
                }}
                transition={{
                    delay: 4,
                    duration: 4,
                    repeat: Infinity,
                    repeatType: "mirror",
                    repeatDelay: 8,
                }}
            >
                {/* background: linear-gradient(90deg, #FC466B 0%, #3F5EFB 100%); */}
                <motion.div
                    className="my-0 hero-gradient-text"
                    style={{
                        background:
                            "linear-gradient(90deg, var(--text-color-1) 0%, var(--text-color-2) 100%)",
                    }}
                >
                    Change
                </motion.div>
            </motion.div>
            <motion.div
                className="font-bold"
                animate={{
                    "--text-color-1": ["#fff", "#d53369", "#fff"],
                    "--text-color-2": ["#fff", "#daae51", "#fff"],
                }}
                transition={{
                    delay: 8,
                    duration: 4,
                    repeat: Infinity,
                    repeatType: "mirror",
                    repeatDelay: 8,
                }}
            >
                {/* background: linear-gradient(90deg, #d53369 0%, #daae51 100%); */}
                <motion.div
                    className="my-0 hero-gradient-text"
                    style={{
                        background:
                            "linear-gradient(90deg, var(--text-color-1) 0%, var(--text-color-2) 100%)",
                    }}
                >
                    Lives
                </motion.div>
            </motion.div>
        </div>
    );
};

const Interact = () => {
    return (
        <div id="Interact-Page" className="flex flex-column">
            <div
                className="flex flex-column justify-content-center align-items-center h-screen relative"
                style={{
                    background:
                        "linear-gradient(180deg, #000 0%, #171941 100%)",
                }}
            >
                <InteractTitle />
                <Button
                    icon="pi pi-arrow-down hero-text"
                    className="bg-white p-button-rounded
                p-button-secondary"
                    onClick={() =>
                        document
                            .getElementById("Interact-Main")
                            .scrollIntoView()
                    }
                />
            </div>
            <InteractMain />
        </div>
    );
};

export default Interact;
