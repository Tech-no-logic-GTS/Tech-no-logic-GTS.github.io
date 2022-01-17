import "primereact/resources/themes/lara-dark-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import NavBar from "./components/Navbar.jsx";
import Main from "./components/Main.jsx";
import { HashRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer.jsx";
import Page404 from "./components/Page404.jsx";

function App() {
    return (
        <HashRouter>
            <NavBar />
            <Routes>
                <Route path="/" exact element={<Main />} />
                <Route path="*" element={<Page404 />} />
            </Routes>
            <Footer />
        </HashRouter>
    );
}

export default App;