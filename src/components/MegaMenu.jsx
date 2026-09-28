import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ChevronRight, ChevronDown } from 'lucide-react';

const MegaMenu = ({ items, mobile = false, closeMenu }) => {
    const [openItems, setOpenItems] = useState({});

    const toggleItem = (id, e) => {
        e.preventDefault();
        e.stopPropagation();
        setOpenItems(prev => ({ ...prev, [id]: !prev[id] }));
    };

    // Construct URL path from category path array
    const getUrl = (path) => path ? `/category/${path.join('/')}` : '#';

    if (!items) return null;

    return (
        <ul className={mobile ? 'pl-4 space-y-1' : 'py-1'}>
            {items.map((node) => {
                const hasChildren = node.children && node.children.length > 0;
                const isOpen = openItems[node.id];

                // Mobile View
                if (mobile) {
                    return (
                        <li key={node.id}>
                            {hasChildren ? (
                                <div>
                                    <button
                                        onClick={(e) => toggleItem(node.id, e)}
                                        className="flex w-full items-center justify-between px-3 py-2 text-sm font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50 rounded-md"
                                    >
                                        <span>{node.label}</span>
                                        {isOpen ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
                                    </button>
                                    {isOpen && (
                                        <MegaMenu items={node.children} mobile={true} closeMenu={closeMenu} />
                                    )}
                                </div>
                            ) : (
                                <NavLink
                                    to={getUrl(node.path)}
                                    className={({ isActive }) => `block px-3 py-2 text-sm font-medium rounded-md ${isActive ? 'text-indigo-600 bg-indigo-50' : 'text-gray-600 hover:text-indigo-600 hover:bg-gray-50'}`}
                                    onClick={closeMenu}
                                >
                                    {node.label}
                                </NavLink>
                            )}
                        </li>
                    );
                }

                // Desktop View (Recursive Flyout)
                return (
                    <li key={node.id} className="relative group">
                        {hasChildren ? (
                            <>
                                <button className="flex w-full items-center justify-between px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-indigo-600 text-left">
                                    <span>{node.label}</span>
                                    <ChevronRight className="h-4 w-4 text-gray-400" />
                                </button>
                                {/* Submenu */}
                                <div className="absolute left-full top-0 w-56 hidden group-hover:block pl-1">
                                    <div className="bg-white rounded-md shadow-lg border border-gray-100 py-1">
                                        <MegaMenu items={node.children} mobile={false} />
                                    </div>
                                </div>
                            </>
                        ) : (
                            <NavLink
                                to={getUrl(node.path)}
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-indigo-600"
                            >
                                {node.label}
                            </NavLink>
                        )}
                    </li>
                );
            })}
        </ul>
    );
};

// Top Level Desktop Wrapper
export const MegaMenuDesktop = ({ items }) => {
    return (
        <div className="hidden md:flex space-x-1">
            {items.map(item => (
                <div key={item.id} className="relative group">
                    <button className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:text-indigo-600 rounded-md transition-colors focus:outline-none">
                        {item.label}
                        <ChevronDown className="ml-1 h-4 w-4" />
                    </button>
                    {/* First Dropdown Container */}
                    <div className="absolute left-0 top-full pt-2 w-56 hidden group-hover:block z-50">
                        <div className="bg-white rounded-md shadow-lg border border-gray-100 py-1">
                            <MegaMenu items={item.children} mobile={false} />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default MegaMenu;
