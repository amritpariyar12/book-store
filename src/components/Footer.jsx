import React from 'react';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white pt-12 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    <div>
                        <h3 className="text-xl font-bold mb-4 text-indigo-400">BookStore</h3>
                        <p className="text-gray-400 text-sm leading-relaxed mb-4">
                            Your one-stop destination for books from all major publishers.
                            Find textbooks, reference materials, and literary works at the best prices.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Facebook className="h-5 w-5" /></a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Twitter className="h-5 w-5" /></a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Instagram className="h-5 w-5" /></a>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><a href="/" className="hover:text-indigo-400 transition-colors">Home</a></li>
                            <li><a href="/publications" className="hover:text-indigo-400 transition-colors">Publications</a></li>
                            <li><a href="/about" className="hover:text-indigo-400 transition-colors">About Us</a></li>
                            <li><a href="/contact" className="hover:text-indigo-400 transition-colors">Contact</a></li>
                            <li><a href="#" className="hover:text-indigo-400 transition-colors">Privacy Policy</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-white">Contact Us</h3>
                        <ul className="space-y-3 text-sm text-gray-400">
                            <li className="flex items-start gap-3">
                                <MapPin className="h-5 w-5 text-indigo-400 flex-shrink-0" />
                                <span>Butwal, Nepal</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="h-5 w-5 text-indigo-400 flex-shrink-0" />
                                <span>+977 123456789</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="h-5 w-5 text-indigo-400 flex-shrink-0" />
                                <span>info@bookstore.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
                    <p>&copy; {new Date().getFullYear()} BookStore. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
