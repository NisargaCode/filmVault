import React from "react";
import Logo from "../MovieLogo.jpg";
import { Link } from "react-router-dom";
function Navbar() {
    return (
        <div className="flex  items-center space-x-2 shadow-md p-2 bg-white">

            <img src={Logo} className="w-[50px]" alt="Filevault Logo" />
            <Link to='/' className="text-blue-500 text-2xl font-bold">Movies</Link>
            <Link to='/WatchList' className="text-blue-500 text-2xl font-bold">WatchList </Link>
        </div>

    );
}
export default Navbar;