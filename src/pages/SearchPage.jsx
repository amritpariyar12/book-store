import React, { useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { books, flashSaleBooks } from '../data/mockData';
import BookCard from '../components/BookCard';
import { Search, Info } from 'lucide-react';

const SearchPage = () => {
    const [searchParams] = useSearchParams();
    const query = searchParams.get('q') || '';

    // Combine all books for searching
    // Ensure uniqueness by ID in case flashSaleBooks duplicates existing IDs (mock data structure)
    // For this implementation, we'll just concat and assume distinct or just filter duplicates if needed.
    // Given the previous setup, flashSaleBooks are distinct IDs (900+).
    // Also need to include the 'books' array content which has IDs 1, 301, etc.
    const allBooks = useMemo(() => {
        return [...books, ...flashSaleBooks];
    }, []);

    const filteredBooks = useMemo(() => {
        if (!query) return [];

        const lowerQuery = query.toLowerCase().trim();

        return allBooks.filter(book => {
            // Safe accessors
            const title = book.title?.toLowerCase() || '';
            const author = book.author?.toLowerCase() || '';
            const subject = book.subject?.toLowerCase() || '';

            // Check Keywords array
            const foundInKeywords = book.keywords?.some(k => k.toLowerCase().includes(lowerQuery));

            return (
                title.includes(lowerQuery) ||
                author.includes(lowerQuery) ||
                subject.includes(lowerQuery) ||
                foundInKeywords
            );
        });
    }, [query, allBooks]);

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="mb-8 border-b border-gray-100 pb-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Search Results</h1>
                <p className="text-gray-600">
                    Showing results for <span className="font-bold text-indigo-600">"{query}"</span>
                </p>
            </div>

            {filteredBooks.length > 0 ? (
                <>
                    <p className="text-sm text-gray-500 mb-6">Found {filteredBooks.length} result{filteredBooks.length !== 1 ? 's' : ''}</p>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                        {filteredBooks.map(book => (
                            <BookCard key={book.id} book={book} />
                        ))}
                    </div>
                </>
            ) : (
                <div className="flex flex-col items-center justify-center py-24 bg-gray-50 rounded-xl border border-gray-100 border-dashed">
                    <div className="bg-gray-100 p-4 rounded-full mb-4">
                        <Search className="h-8 w-8 text-gray-400" />
                    </div>
                    <h2 className="text-xl font-bold text-gray-900 mb-2">No results found</h2>
                    <p className="text-gray-500 max-w-md text-center mb-6">
                        We couldn't find any books matching "{query}". Try checking for typos or using different keywords.
                    </p>
                    <Link to="/" className="text-indigo-600 hover:text-indigo-800 font-medium">
                        Return to Home
                    </Link>
                </div>
            )}
        </div>
    );
};

export default SearchPage;
