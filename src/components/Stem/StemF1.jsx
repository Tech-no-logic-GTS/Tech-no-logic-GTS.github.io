import React from "react";
import useWindowSize from "../../hooks/windowSize";
import { useGLTF, Environment } from "@react-three/drei";
import {
    motion as motion3d,
    MotionCanvas,
    LayoutCamera,
} from "framer-motion-3d";
import { useViewportScroll, useTransform } from "framer-motion";

// const deg2rad = (theta) => (theta * Math.PI) / 180;

const StemF1 = () => {
    const f1 = useGLTF("./f1_diorama/scene.gltf");
    const { scrollYProgress } = useViewportScroll();
    const width = useWindowSize().width;

    return (
        <>
            <MotionCanvas>
                <React.Suspense fallback={null}>
                    <motion3d.mesh
                        rotateY={useTransform(
                            scrollYProgress,
                            (value) => value * 2 * Math.PI
                        )}
                        scale={[0.005, 0.005, 0.005]}
                        initial={{
                            x: 0,
                            y: -1,
                            z: 5,
                        }}
                        animate={{ z: 0 }}
                    >
                        <motion3d.primitive object={f1.scene} />
                    </motion3d.mesh>
                </React.Suspense>
                <Environment background={false} preset="city" />
                <motion3d.ambientLight intensity={0.5} />
                <motion3d.spotLight
                    intensity={0.1}
                    lookAt={[0, 0, 0]}
                    position={[0, 15, 15]}
                    penumbra={1}
                />
                <LayoutCamera
                    fov={75}
                    near={1}
                    far={1000}
                    zoom={0.8}
                    position={width < 900 ? [0, 0.15, -3.15] : [0, 0, -2.75]}
                    // rotation={[deg2rad(5), deg2rad(180), 0]}
                    rotation={[0, Math.PI, 0]}
                />
                {/* <OrbitControls /> */}
            </MotionCanvas>
        </>
    );
};

export default StemF1;
