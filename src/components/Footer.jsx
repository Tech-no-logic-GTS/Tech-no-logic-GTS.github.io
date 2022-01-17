import { Link } from "react-router-dom";
import useWindowSize from "../hooks/windowSize";

const Footer = () => {
    const width = useWindowSize().width;
    const date = new Date();

    return (
        <div className="flex justify-content-center">
            <div
                className={`flex p-4 blur ${width <= 750 ? "w-full" : "w-11"}`}
            >
                <div className="flex flex-column w-full">
                    <Link to="/">
                        <div className="inline-flex align-items-center">
                            <div className="border-2 w-3rem h-3rem bg-white border-round mr-2" />
                            <h1 className="shine-text font-bold">
                                Tech-No-Logic
                            </h1>
                        </div>
                    </Link>
                    <span style={{ fontSize: "1.25rem" }}>
                        © {date.getFullYear()} All rights reserved
                    </span>
                    <span style={{ fontSize: "1.25rem" }}>
                        Made with{" "}
                        <i
                            className="pi pi-heart-fill"
                            style={{ color: "red" }}
                        />{" "}
                        in India by{" "}
                        <a
                            className="underline"
                            href="https://github.com/Suryansh-23"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Suryansh Chauhan
                        </a>
                    </span>
                </div>
                <div
                    className={`flex ${
                        width <= 750 && "flex-column"
                    } ml-auto align-items-center`}
                >
                    <i
                        className={`text-2xl pi pi-twitter px-3 ${
                            width <= 750 && "pb-5"
                        }`}
                    />
                    <i
                        className={`text-2xl pi pi-github px-3 ${
                            width <= 750 && "pb-5"
                        }`}
                    />
                    <i
                        className={`text-2xl pi pi-instagram px-3 ${
                            width <= 750 && "pb-5"
                        }`}
                    />
                </div>
            </div>
        </div>
    );
};

export default Footer;
