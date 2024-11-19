// Navbar.js

import { useState } from "react";
import { IoIosPersonAdd } from "react-icons/io";
import { FaBars } from "react-icons/fa6";



const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav>
            <div className="max-w-7xl mx-auto px-2 sm:px-2 lg:px-2">
                <div className="flex flex-col lg:flex-row justify-between space-y-4 my-2">
                    <div className="flex gap-4 bg-green-500 p-2 rounded-xl sm:hidden">
                        <button
                            type="button"
                            onClick={toggleMenu}
                            className="text-3xl"
                        >
                            <FaBars />
                        </button>
                        <div className="">
                            <a href="/" className="text-3xl font-bold">Recipe Calories</a>
                        </div>
                    </div>
                    <div className="hidden lg:block">
                        <a href="/" className="text-3xl font-bold">Recipe Calories</a>
                    </div>
                    <div className={`${isMenuOpen ? 'block' : 'hidden'} bg-gray-800 md:hidden`}>
                        <div className="px-2 pt-2 pb-3 text-white space-y-1 sm:px-3">
                            <a href="/" className="block px-3 py-2 rounded-md text-lg">Home</a>
                            <a href="/about" className="block px-3 py-2 rounded-md text-lg">Recipe</a>
                            <a href="/services" className="block px-3 py-2 rounded-md text-lg">About</a>
                            <a href="/contact" className="block px-3 py-2 rounded-md text-lg">Search</a>
                        </div>
                    </div>

                    <div className="flex ">
                        <div className="hidden font-semibold md:flex space-x-4">
                            <a href="/" className="px-3 py-2 rounded-md text-lg">Home</a>
                            <a href="/about" className="px-3 py-2 rounded-md text-lg">Recipe</a>
                            <a href="/services" className="px-3 py-2 rounded-md text-lg">About</a>
                            <a href="/contact" className="px-3 py-2 rounded-md text-lg">Search</a>
                        </div>

                    </div>
                    <div>
                        <div className='lg:flex items-center gap-2 text-2xl'>
                            <div className='mb-2'>
                                <input className='bg-slate-200 p-1 rounded-lg' type="text" placeholder='Search' />
                            </div>
                            <div className='bg-green-500 w-1/6 rounded-full items-center p-2'>
                                <IoIosPersonAdd />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;
