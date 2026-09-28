import React from 'react';
import { Link } from 'react-router-dom';
import { publishers } from '../data/mockData';
import { ArrowRight } from 'lucide-react';

const PublicationsPage = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center mb-16">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Publishers</h1>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                    Explore books from Nepal's most trusted publishing houses.
                    Choose a publisher to view their complete collection.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {publishers.map((publisher) => (
                    <Link
                        key={publisher.id}
                        to={`/publications/${publisher.id}`}
                        className="group flex flex-col bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 overflow-hidden"
                    >
                        <div className="h-48 bg-indigo-50 flex items-center justify-center p-8 group-hover:bg-indigo-100 transition-colors">
                            <div className="h-24 w-24 bg-white rounded-full flex items-center justify-center shadow-sm">
                                <span className="text-3xl font-bold text-indigo-600">{publisher.name.charAt(0)}</span>
                            </div>
                        </div>

                        <div className="p-8 flex flex-col flex-grow">
                            <h2 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">
                                {publisher.name}
                            </h2>
                            <p className="text-gray-600 mb-6 flex-grow">
                                {publisher.description}
                            </p>
                            <div className="flex items-center text-indigo-600 font-medium mt-auto group-hover:translate-x-2 transition-transform">
                                View Books <ArrowRight className="ml-2 h-4 w-4" />
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default PublicationsPage;
