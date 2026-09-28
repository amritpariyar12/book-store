import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, Search, ShoppingBag, BookOpen } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();

    const handleSearch = (e) => {
        if (e.key === 'Enter' && searchQuery.trim()) {
            navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
            setIsOpen(false); // Close mobile menu if open
        }
    };

    return (
        <nav className="bg-white shadow-sm sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">

                    {/* Section 1: Logo (Left Aligned) */}
                    <div className="flex-1 flex items-center justify-start">
                        <Link to="/" className="flex-shrink-0 flex items-center gap-2">
                            <BookOpen className="h-8 w-8 text-indigo-600" />
                            <span className="font-bold text-xl text-gray-800">BookStore</span>
                        </Link>
                    </div>

                    {/* Section 2: Menu (Centered) */}
                    <div className="hidden md:flex flex-1 items-center justify-center space-x-8">
                        <Link to="/" className="text-gray-600 hover:text-indigo-600 text-sm font-bold transition-colors">HOME</Link>
                        <Link to="/publications" className="text-gray-600 hover:text-indigo-600 text-sm font-bold transition-colors">PUBLICATION</Link>
                        <Link to="/about" className="text-gray-600 hover:text-indigo-600 text-sm font-bold transition-colors">ABOUT</Link>
                        <Link to="/contact" className="text-gray-600 hover:text-indigo-600 text-sm font-bold transition-colors">CONTACT</Link>
                    </div>

                    {/* Section 3: Search & Cart (Right Aligned) */}
                    <div className="hidden md:flex flex-1 items-center justify-end space-x-4">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search books..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                onKeyDown={handleSearch}
                                className="pl-10 pr-4 py-1.5 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm w-48 lg:w-64 transition-all"
                            />
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 cursor-pointer" onClick={() => handleSearch({ key: 'Enter' })} />
                        </div>
                        <button className="p-2 text-gray-600 hover:text-indigo-600 transition-colors">
                            <ShoppingBag className="h-6 w-6" />
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="flex items-center md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                        >
                            {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <div className="md:hidden bg-white border-t border-gray-100">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50" onClick={() => setIsOpen(false)}>Home</Link>
                        <Link to="/publications" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50" onClick={() => setIsOpen(false)}>Publications</Link>
                        <Link to="/about" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50" onClick={() => setIsOpen(false)}>About</Link>
                        <Link to="/contact" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50" onClick={() => setIsOpen(false)}>Contact</Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
