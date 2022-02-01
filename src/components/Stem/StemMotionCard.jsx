import { motion } from "framer-motion";

const StemMotionCard = ({ gradient, children, animType }) => {
    const gradients = [
        "linear-gradient(90deg, #00C9FF 0%, #92FE9D 100%)", // Kale Salad
        "linear-gradient(90deg, #FC466B 0%, #3F5EFB 100%)", // Disco Club
        "linear-gradient(90deg, #e3ffe7 0%, #d9e7ff 100%)", // Cucumber Water
        "linear-gradient(90deg, #FDBB2D 0%, #22C1C3 100%)", // Retor Wagon
        "linear-gradient(90deg, #d53369 0%, #daae51 100%)", // Blood Mimosa
        "linear-gradient(90deg, #0700b8 0%, #00ff88 100%)", // Ooey Gooey
        "linear-gradient(90deg, #00d2ff 0%, #3a47d5 100%)", // Aqua Spray
        "linear-gradient(90deg, #f8ff00 0%, #3ad59f 100%)", // Mello Yellow
    ];
    return (
        <>
            {animType === "leftEntry" ? (
                <motion.div
                    className="border-change mt-4 w-min mx-2"
                    initial={{ x: "-100%", opacity: 0.2 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    exit={{ x: "-100%", opacity: 0.2 }}
                >
                    <div
                        className="w-full h-full border-change montserrat"
                        style={{ background: gradients[gradient] }}
                    >
                        {children}
                    </div>
                </motion.div>
            ) : (
                <motion.div
                    className="border-change mt-4 w-min mx-2"
                    initial={{ x: "100%", opacity: 0.2 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    exit={{ x: "100%", opacity: 0.2 }}
                >
                    <div
                        className="w-full h-full border-change montserrat"
                        style={{ background: gradients[gradient] }}
                    >
                        {children}
                    </div>
                </motion.div>
            )}
        </>
    );
};

export default StemMotionCard;
