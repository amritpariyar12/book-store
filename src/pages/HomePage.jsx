import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Book, Clock } from 'lucide-react';
import { publishers, books, flashSaleBooks } from '../data/mockData';
import BookCard from '../components/BookCard';

const HomePage = () => {
    // Featured publishers (first 3)
    const featuredPublishers = publishers.slice(0, 3);
    // Latest books (first 4)
    const latestBooks = books.slice(0, 4);

    // Countdown Timer Logic (Static end time for demo)
    const [timeLeft, setTimeLeft] = useState({ hours: 12, minutes: 45, seconds: 30 });

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(prev => {
                if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
                if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
                if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
                return { hours: 0, minutes: 0, seconds: 0 }; // Ended
            });
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const formatTime = (val) => val.toString().padStart(2, '0');

    return (
        <div className="space-y-16 pb-16">
            {/* Hero Section */}
            <section className="relative bg-indigo-900 text-white overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1507842217121-9e9628d009ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center opacity-20"></div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
                    <div className="lg:w-2/3">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                            Discover Your Next <span className="text-indigo-400">Favorite Book</span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl">
                            Browse through thousands of books from top publishers.
                            From academic textbooks to literary masterpieces, find everything you need in one place.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link to="/publications" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-indigo-900 bg-white hover:bg-gray-100 transition-colors">
                                Browse Publications
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                            <Link to="/about" className="inline-flex items-center px-6 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-white/10 transition-colors">
                                Learn More
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Publications */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-end mb-8">
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900">Featured Publishers</h2>
                        <p className="mt-2 text-gray-600">Top publishing houses we work with</p>
                    </div>
                    <Link to="/publications" className="hidden sm:flex items-center text-indigo-600 hover:text-indigo-700 font-medium">
                        View all <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {featuredPublishers.map((pub) => (
                        <Link key={pub.id} to={`/publications/${pub.id}`} className="group block bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6 border border-gray-100 text-center">
                            <div className="h-24 w-24 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center overflow-hidden">
                                <span className="text-2xl font-bold text-gray-400">{pub.name.charAt(0)}</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">{pub.name}</h3>
                            <p className="mt-2 text-sm text-gray-500 line-clamp-2">{pub.description}</p>
                        </Link>
                    ))}
                </div>
                <div className="mt-8 sm:hidden text-center">
                    <Link to="/publications" className="inline-flex items-center text-indigo-600 font-medium">
                        View all <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                </div>
            </section>

            {/* Latest Books */}
            <section className="bg-gray-50 py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">Latest Arrivals</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                        {latestBooks.map((book) => (
                            <BookCard key={book.id} book={book} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Flash Sale / Special Offers Section - NEW */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-orange-50 border border-orange-100 rounded-2xl p-6 sm:p-10">
                    <div className="flex flex-col md:flex-row justify-between items-end md:items-center mb-8 gap-4">
                        <div>
                            <div className="flex items-center gap-2 mb-2">
                                <span className="bg-red-600 text-white text-xs font-bold px-2 py-0.5 rounded uppercase tracking-wider animate-pulse">Limited Time</span>
                                <span className="text-orange-600 font-medium text-sm">Don't miss out!</span>
                            </div>
                            <h2 className="text-3xl font-bold text-gray-900">Flash Sale</h2>
                            <p className="text-gray-600 mt-1">Huge discounts on selected bestsellers.</p>
                        </div>

                        {/* Countdown Timer */}
                        <div className="flex items-center gap-4 bg-white px-6 py-3 rounded-lg shadow-sm border border-orange-100">
                            <Clock className="h-5 w-5 text-red-500" />
                            <div className="flex gap-1 text-gray-900 font-mono font-bold text-xl">
                                <span>{formatTime(timeLeft.hours)}</span>
                                <span className="text-gray-400">:</span>
                                <span>{formatTime(timeLeft.minutes)}</span>
                                <span className="text-gray-400">:</span>
                                <span className="text-red-500">{formatTime(timeLeft.seconds)}</span>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {flashSaleBooks.map(book => (
                            <BookCard key={book.id} book={book} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomePage;
