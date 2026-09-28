import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { publishers, books } from '../data/mockData';
import { Book, ChevronRight } from 'lucide-react';
import PublisherCategorySidebar from '../components/PublisherCategorySidebar';
import BookCard from '../components/BookCard';

const PublisherDetailsPage = () => {
    // Handle both ID and Slug, and wildcard category path
    const { publisherId, '*': categoryPathString } = useParams();

    // Find publisher by ID or Slug
    let publisher = null;
    if (publisherId) {
        publisher = publishers.find(p => p.id.toString() === publisherId || p.slug === publisherId);
    }

    const categoryPath = categoryPathString ? categoryPathString.split('/').filter(Boolean) : [];

    if (!publisher) {
        return <div className="text-center py-24">Publisher not found</div>;
    }

    // Filter books by Publisher AND Category Path
    const filteredBooks = books.filter(b => {
        const matchesPublisher = b.publisherId === publisher.id;
        if (!matchesPublisher) return false;

        // If no category selected, show all
        if (categoryPath.length === 0) return true;

        // Check if book matches path
        return categoryPath.every((segment, index) => b.categoryPath && b.categoryPath[index] === segment);
    });

    return (
        <div className="bg-gray-50 min-h-screen pb-12">
            {/* Publisher Header */}
            <div className="bg-white border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="flex flex-col md:flex-row items-center gap-8">
                        <div className="h-32 w-32 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0 border border-gray-200 overflow-hidden">
                            {/* Logo Placeholder */}
                            <span className="text-4xl font-bold text-indigo-600">{publisher.name.charAt(0)}</span>
                        </div>
                        <div className="text-center md:text-left">
                            <h1 className="text-3xl font-bold text-gray-900 mb-2">{publisher.name}</h1>
                            <p className="text-lg text-gray-600 max-w-2xl">{publisher.description}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex flex-col md:flex-row gap-8">
                    {/* Sidebar Area */}
                    <div className="w-full md:w-64 flex-shrink-0 relative">
                        {/* Sticky Sidebar */}
                        <div className="sticky top-24">
                            <Link to={`/publications/${publisher.slug}`} className={`block px-4 py-2 mb-4 text-center rounded-md border border-indigo-600 text-indigo-600 font-bold hover:bg-indigo-50 transition-colors ${categoryPath.length === 0 ? 'bg-indigo-600 text-white hover:bg-indigo-700' : ''}`}>
                                View All Books
                            </Link>

                            {publisher.categories && (
                                <PublisherCategorySidebar
                                    categories={publisher.categories}
                                    publisherSlug={publisher.slug}
                                    currentPath={categoryPath}
                                />
                            )}
                        </div>
                    </div>

                    {/* Books Grid */}
                    <div className="flex-grow">
                        <div className="flex justify-between items-center mb-6">
                            <div className="flex items-center gap-2">
                                <h2 className="text-xl font-bold text-gray-900">
                                    Books
                                </h2>
                                <span className="text-gray-500 text-sm">({filteredBooks.length})</span>
                            </div>

                            {/* Breadcrumb inline */}
                            {categoryPath.length > 0 && (
                                <div className="hidden sm:flex items-center text-sm text-gray-500">
                                    {categoryPath.map((seg, i) => (
                                        <span key={i} className="flex items-center">
                                            <ChevronRight className="h-4 w-4 mx-1" />
                                            <span className="capitalize">{seg.replace(/-/g, ' ')}</span>
                                        </span>
                                    ))}
                                </div>
                            )}
                        </div>

                        {filteredBooks.length > 0 ? (
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                                {filteredBooks.map(book => (
                                    <BookCard key={book.id} book={book} />
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-12 bg-white rounded-lg border border-gray-100">
                                <p className="text-gray-500">No books found in this category.</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PublisherDetailsPage;
