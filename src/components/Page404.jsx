import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import Typed from "typed.js";

const Page404 = () => {
    const el = useRef(null);
    // Create reference to store the Typed instance itself
    const typed = useRef(null);

    useEffect(() => {
        const options = {
            strings: [
                `$ Oops, ERROR 404 NOT FOUND... ^1000 <br/>You may have
            mistyped the URL.<br />
            Or the page has been removed. <br />
            Actually, there is nothing to see here...<br />
            Click on the link below to do go back,<br />
            Thanks!`,
            ],
            typeSpeed: 50,
            showCursor: false,
        };

        typed.current = new Typed(el.current, options);

        return () => {
            // Make sure to destroy Typed instance during cleanup
            // to prevent memory leaks
            typed.current.destroy();
        };
    }, []);

    return (
        <div className="grain-overlay w-screen h-screen absolute">
            <div className="grain w-screen h-screen absolute" />
            <div className="flex flex-column h-screen w-full justify-content-center text-2xl terminal-text absolute">
                <div className="text-left mx-auto term" ref={el}>
                    {/* {">"} Oops, ERROR 404 NOT FOUND... <br /> You may have
                    mistyped the URL.
                    <br />
                    Or the page has been removed.
                    <br />
                    Actually, there is nothing to see here...
                    <br />
                    Click on the link below to do go back,
                    <br />
                    Thanks!
                    <br /> */}
                </div>
                <div className="text-left mx-auto">
                    <Link to="/">
                        <i className="pi pi-home text-3xl mt-4 terminal-text" />
                        <span className="px-2 text-3xl terminal-text">
                            Home
                        </span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Page404;
