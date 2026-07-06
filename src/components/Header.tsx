import type {JSX} from 'react';
import {FaUserAlt} from "react-icons/fa";

function Header(): JSX.Element {
    return (
        <div className="flex flex-col gap-1">
            <div className="flex items-center gap-3">
                <FaUserAlt size={20} className="text-blue-700"/>
                <h1 className="text-lg md:text-2xl font-bold">Users List</h1>
            </div>
            <p className="text-xs md:text-sm text-gray-400">Enter your info to save your log.</p>
        </div>
    );
}

export default Header;