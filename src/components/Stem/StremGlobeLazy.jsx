import React, { useState, useEffect, Suspense, lazy } from "react";
const StemGlobe = lazy(() => import("./StemGlobe"));

const StemGlobeLazy = () => {
    const [isMounted, setIsMounted] = useState(false);
    useEffect(() => {
        setIsMounted(true);
    }, []);
    return (
        <>
            {!isMounted ? null : (
                <Suspense fallback={null}>
                    <StemGlobe />
                </Suspense>
            )}
        </>
    );
};
export default StemGlobeLazy;
