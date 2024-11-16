import React from 'react'
import logo from '../assets/logo.webp';
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <nav className="relative w-full h-[180px] p-10 bg-gradient-to-r from-black via-red-900 to-black flex items-center justify-center">
    <div className="container relative z-10 flex flex-wrap flex-col md:flex-row items-center justify-center rounded-lg">
        <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
            <img
                src={logo}
                alt="Media Club Logo"
                data-aos="fade-in-left"
                data-aos-duration="2500"
                className="border-red-900 border-4 h-32 w-32 rounded-full hover:scale-105 hover:shadow-lg transition-transform duration-300 ease-in-out"
            />
            <span className="ml-3 text-white text-3xl font-bold tracking-wide hover:text-red-600 transition-colors duration-300 ease-in-out">
                PESU MEDIA CLUB
            </span>
        </a>
        <nav className="text-xl md:mr-auto md:ml-2 md:py-1 md:pl-2 md:border-l md:border-gray-300 flex flex-wrap items-center justify-center space-x-6">
            <a href='#About'
            className="text-white hover:text-red-600 transition-colors duration-500 ease-in-out cursor-pointer">
                About
            </a>
            <a href='#Team' className="text-white hover:text-red-600 transition-colors duration-500 ease-in-out cursor-pointer">
                Team
            </a>
            <Link to="/Events" className="text-white hover:text-red-600 transition-colors duration-500 ease-in-out cursor-pointer">
                Events
            </Link>
        </nav>
    </div>
</nav>

    );
};

export default Navbar;