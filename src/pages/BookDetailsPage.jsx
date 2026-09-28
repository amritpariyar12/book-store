import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { books, publishers } from '../data/mockData';
import { ArrowLeft, ShoppingBag, Book } from 'lucide-react';

const BookDetailsPage = () => {
    const { bookId } = useParams();
    const book = books.find(b => b.id === parseInt(bookId));

    if (!book) return <div className="text-center py-24">Book not found</div>;

    const publisher = publishers.find(p => p.id === book.publisherId);

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <Link to={`/publications/${book.publisherId}`} className="inline-flex items-center text-gray-600 hover:text-indigo-600 mb-8 transition-colors">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to {publisher ? publisher.name : 'Publisher'}
            </Link>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-8">
                    <div className="aspect-[4/3] md:aspect-auto bg-gray-100 flex items-center justify-center p-8">
                        {/* Placeholder for book cover if not available */}
                        <div className="w-64 h-80 bg-white shadow-lg flex items-center justify-center">
                            <Book className="h-24 w-24 text-gray-300" />
                        </div>
                    </div>

                    <div className="p-8 md:p-12 flex flex-col">
                        <div className="flex items-center gap-2 mb-4">
                            <span className="px-3 py-1 bg-indigo-50 text-indigo-700 text-sm font-medium rounded-full">
                                {book.category}
                            </span>
                            {publisher && (
                                <Link to={`/publications/${publisher.id}`} className="text-sm text-gray-500 hover:text-indigo-600 transition-colors">
                                    {publisher.name}
                                </Link>
                            )}
                        </div>

                        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{book.title}</h1>
                        <p className="text-xl text-gray-500 mb-6">by {book.author}</p>

                        <div className="text-4xl font-bold text-indigo-600 mb-8">
                            Rs. {book.price}
                        </div>

                        <div className="prose prose-indigo text-gray-600 mb-8">
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">Description</h3>
                            <p>{book.description}</p>
                        </div>

                        <div className="mt-auto flex gap-4">
                            <button className="flex-1 bg-indigo-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-indigo-200">
                                <ShoppingBag className="h-5 w-5" />
                                Add to Cart
                            </button>
                            {/* <button className="px-6 py-4 rounded-xl border border-gray-200 text-gray-700 font-medium hover:bg-gray-50 transition-colors">
                                Add to Wishlist
                            </button> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetailsPage;
