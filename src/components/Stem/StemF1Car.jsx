import React from "react";
import { useGLTF, Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
// const deg2rad = (theta) => (theta * Math.PI) / 180;

const StemF1Car = () => {
    const f1 = useGLTF("./ferrari_f10_2010/scene.gltf");
    return (
        <Canvas
            camera={{
                fov: 75,
                near: 0.1,
                far: 1000,
                zoom: 1.5,
                position: [0, 1, -4.5],
                rotation: [0, Math.PI, 0],
            }}
        >
            <React.Suspense fallback={null}>
                <mesh scale={[1, 1, 1]} position={[0, 1, 0]}>
                    <primitive object={f1.scene} />
                </mesh>
            </React.Suspense>
            <Environment background={false} preset="city" />
            <ambientLight intensity={0.5} />
            <spotLight
                intensity={0.1}
                lookAt={[0, 0, 0]}
                position={[0, 15, 15]}
                penumbra={1}
            />
            {/* <camera
                    fov={75}
                    near={1}
                    far={1000}
                    zoom={1}
                    position={[0, 0, 0]}
                    rotation={[0, 2 * Math.PI, 0]}
                /> */}
            <OrbitControls />
        </Canvas>
    );
};

export default StemF1Car;
