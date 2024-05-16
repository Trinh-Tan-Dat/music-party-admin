import React from "react";
import Dashboard from "./pages/Dashboard";
import SignIn from "./pages/SignIn";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./App.css";
import { FaMusic } from "react-icons/fa";
import { useState } from "react";
import Pending from "./pages/Pending";
import Header from "./components/Header";
import Home from "./pages/Home";

const App = () => {
    const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
    const [openSidebar, setOpenSidebar] = useState(false);
    const OpenSidebar = () => {
        setOpenSidebarToggle(!openSidebarToggle);
    };

    return (
        <div>
            <div className="grid-container">
                <Router>
                    <Header OpenSidebar={OpenSidebar} />
                    <Navbar
                        openSidebarToggle={openSidebarToggle}
                        OpenSidebar={OpenSidebar}
                    />

                    <Routes>
                        {/* <Route path='/signin' element={<SignIn />}  /> */}
                        {/* <Route path="/" element={<Home />} /> */}
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/pending" element={<Pending />} />
                        <Route path="/signin" element={<SignIn />} />
                    </Routes>
                </Router>
            </div>
        </div>
    );
};

export default App;
