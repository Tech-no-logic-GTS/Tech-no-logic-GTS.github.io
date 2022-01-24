import React from "react";
import "primereact/resources/themes/lara-dark-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import NavBar from "./components/Navbar.jsx";
import Main from "./components/Main.jsx";
import { HashRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer.jsx";
import Page404 from "./components/Page404.jsx";
import Interact from "./components/Interact/Interact.jsx";
import Stem from "./components/Stem/Stem.jsx";
import Blogs from "./components/Blogs/Blogs.jsx";
import About from "./components/About/About.jsx";

function App() {
    return (
        <HashRouter>
            <NavBar />
            <Routes>
                <Route path="/" exact element={<Main />} />
                <Route path="/Blogs" element={<Blogs />} />
                <Route path="/Interact" element={<Interact />} />
                <Route path="/Stem" element={<Stem />} />
                <Route path="/About-Us" element={<About />} />
                <Route path="*" element={<Page404 />} />
            </Routes>
            <Footer />
        </HashRouter>
    );
}

export default App;
