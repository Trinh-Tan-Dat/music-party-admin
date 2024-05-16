import React from "react";
import { FaMusic } from "react-icons/fa";
import { FaTable } from "react-icons/fa";
import { FaSpinner } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";
function Navbar({ openSidebarToggle, OpenSidebar }) {
    return (
        <aside
            id="sidebar"
            className={openSidebarToggle ? "sidebar-responsive" : ""}
            style={{ backgroundColor: "#313131" }}
        >
            <div className="sidebar-title" style={{ color: "#1FDF64" }}>
                <div className="sidebar-brand flex gap-2">
                    <FaMusic className="icon_header" /> Music party
                </div>
                <span className="icon close_icon" onClick={OpenSidebar}>
                    X
                </span>
            </div>

            <ul className="sidebar-list">
                <li className="sidebar-list-item">
                    <a href="/dashboard" className="flex items-center mr-2">
                        <FaTable className="icon" /> Dashboard
                    </a>
                </li>
                <li className="sidebar-list-item">
                    <a href="/pending" className="flex items-center mr-2">
                        <FaSpinner className="icon" /> Pending
                    </a>
                </li>
                <li className="sidebar-list-item">
                    <a href="/signin" className="flex items-center mr-2">
                        <FaSignOutAlt className="icon" /> Log out
                    </a>
                </li>
            </ul>
        </aside>
    );
}

export default Navbar;
