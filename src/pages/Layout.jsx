import React from "react";
import Header from "../components/Header";
import { Outlet, Link } from "react-router-dom";


const Layout = () => {
    return (
        <div className="wrapper">
            <Header />
            
            <Outlet />
        </div>
    );
}

export default Layout;