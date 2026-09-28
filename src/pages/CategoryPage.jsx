import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { books } from '../data/mockData';
import { Book, ChevronRight } from 'lucide-react';
import BookCard from '../components/BookCard';

const CategoryPage = () => {
    const params = useParams();
    const categoryPathString = params['*'] || '';
    const categoryPath = categoryPathString.split('/').filter(Boolean);

    // Filter books that match the category path
    // A book matches if its categoryPath starts with the URL categoryPath
    const filteredBooks = books.filter(book => {
        if (!book.categoryPath) return false;
        // Check if book.categoryPath contains all elements of categoryPath in order
        // Actually, we usually want exact match or child match.
        // Let's say searching for "school-books" should show "school-books/class-10" books.

        if (categoryPath.length === 0) return true;

        // Check if the current URL path is a prefix of the book's path
        return categoryPath.every((segment, index) => book.categoryPath[index] === segment);
    });

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            {/* Breadcrumb */}
            <div className="flex items-center text-sm text-gray-500 mb-8">
                <Link to="/" className="hover:text-indigo-600">Home</Link>
                {categoryPath.map((segment, index) => (
                    <React.Fragment key={index}>
                        <ChevronRight className="h-4 w-4 mx-2" />
                        <span className="capitalize">{segment.replace(/-/g, ' ')}</span>
                    </React.Fragment>
                ))}
            </div>

            <h1 className="text-3xl font-bold text-gray-900 mb-8 capitalize">
                {categoryPath.length > 0 ? categoryPath[categoryPath.length - 1].replace(/-/g, ' ') : 'All Categories'}
            </h1>

            {filteredBooks.length > 0 ? (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                    {filteredBooks.map(book => (
                        <BookCard key={book.id} book={book} />
                    ))}
                </div>
            ) : (
                <div className="text-center py-24 bg-gray-50 rounded-lg">
                    <p className="text-gray-500 text-lg">No books found in this category.</p>
                </div>
            )}
        </div>
    );
};

export default CategoryPage;
