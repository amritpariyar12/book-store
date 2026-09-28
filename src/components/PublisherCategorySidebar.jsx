import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { ChevronRight, ChevronDown } from 'lucide-react';

const PublisherCategorySidebar = ({ categories, publisherSlug, currentPath = [] }) => {
    const [activeIds, setActiveIds] = useState([]);
    const sidebarRef = useRef(null);


    useEffect(() => {
        // We could map currentPath to IDs if they match, but currentPath is mostly for highlighting.
        // Let's assume the user starts collapsed or we expand based on matching Logic if needed.
        // For now, start valid collapsed or user choice.
        // User Requirement: "Clicking ... toggles".
    }, []);

    // Global Click Listener to close sidebar when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
                setActiveIds([]); // Close all
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleToggle = (id, depth, e) => {
        e.preventDefault();
        e.stopPropagation();

        setActiveIds(prev => {
            const newActive = [...prev];
            // If clicking the one currently open at this depth, close it (toggle off)
            if (newActive[depth] === id) {
                // Slice to depth (effectively removing this and all children)
                return newActive.slice(0, depth);
            }
            // Otherwise, open this one (closing any previous sibling at this depth)
            // and remove any deeper children from the old branch
            const pathWithNew = newActive.slice(0, depth);
            pathWithNew[depth] = id;
            return pathWithNew;
        });
    };

    const handleLinkClick = () => {
        // User Requirement: "Clicking a subcategory... Closes all dropdowns immediately"
        // Also "Filter books" (handled by Router)
        setActiveIds([]);
    };

    const renderTree = (nodes, depth = 0) => {
        return (
            <ul className={`space-y-1 ${depth > 0 ? 'ml-4 border-l border-gray-100 pl-2 mt-1' : ''}`}>
                {nodes.map(node => {
                    const hasChildren = node.children && node.children.length > 0;
                    const isOpen = activeIds[depth] === node.id;

                    const isUrlActive = currentPath && currentPath[depth] === node.path[depth];
                    const isExactUrlActive = currentPath && currentPath.join('/') === node.path.join('/');

                    return (
                        <li key={node.id} className="relative">
                            {hasChildren ? (
                                <div>
                                    <button
                                        onClick={(e) => handleToggle(node.id, depth, e)}
                                        className={`w-full flex items-center justify-between px-3 py-2 cursor-pointer rounded-md transition-colors text-left ${isOpen || isUrlActive ? 'text-indigo-700 bg-indigo-50 font-medium' : 'text-gray-700 hover:bg-gray-50'
                                            }`}
                                    >
                                        <span className={`${isExactUrlActive ? 'font-bold' : ''}`}>{node.label}</span>
                                        {isOpen ? (
                                            <ChevronDown className="h-4 w-4 text-indigo-600" />
                                        ) : (
                                            <ChevronRight className="h-4 w-4 text-gray-400" />
                                        )}
                                    </button>

                                    {/* Render Children if Open */}
                                    {isOpen && (
                                        <div className="animate-in slide-in-from-top-1 duration-200">
                                            {renderTree(node.children, depth + 1)}
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <NavLink
                                    to={`/publications/${publisherSlug}/${node.path.join('/')}`}
                                    className={({ isActive }) => `block px-3 py-2 rounded-md transition-colors text-sm ${isActive ? 'bg-indigo-600 text-white font-medium shadow-sm' : 'text-gray-600 hover:bg-indigo-50 hover:text-indigo-600'}`}
                                    onClick={handleLinkClick}
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

    return (
        <div
            ref={sidebarRef}
            className="w-full bg-white rounded-lg shadow-sm border border-gray-100 p-4 max-h-[80vh] overflow-y-auto"
        >
            <div className="flex items-center justify-between mb-4 px-2">
                <h3 className="font-bold text-gray-900 uppercase text-xs tracking-wider">Categories</h3>
                {activeIds.length > 0 && (
                    <button onClick={() => setActiveIds([])} className="text-xs text-gray-400 hover:text-indigo-600">
                        Collapse All
                    </button>
                )}
            </div>

            {renderTree(categories)}
        </div>
    );
};

export default PublisherCategorySidebar;
