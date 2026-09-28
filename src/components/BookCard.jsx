import React from 'react';
import { Link } from 'react-router-dom';
import { Book } from 'lucide-react';

const BookCard = ({ book }) => {
    const hasDiscount = book.discountPrice && book.discountPrice < book.originalPrice;

    return (
        <Link
            to={`/book/${book.id}`}
            className="group block bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100 overflow-hidden flex flex-col h-full"
        >
            {/* Image Aspect Ratio 2:3 */}
            <div className="aspect-[2/3] bg-gray-100 relative overflow-hidden">
                {book.cover && !book.cover.includes('via.placeholder') ? (
                    <img
                        src={book.cover}
                        alt={book.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-gray-400 bg-gray-50">
                        <Book className="h-10 w-10 opacity-50" />
                    </div>
                )}

                {/* Discount Badge */}
                {hasDiscount && (
                    <div className="absolute top-2 left-0 bg-red-600 text-white text-[10px] font-bold px-2 py-0.5 shadow-sm rounded-r-md">
                        {book.discountPercent}% OFF
                    </div>
                )}

                {/* Optional Badge if needed (e.g. from category) */}
                {book.categoryPath && !hasDiscount && (
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-2">
                        <p className="text-[10px] text-white font-medium truncate">
                            {book.categoryPath[book.categoryPath.length - 1].replace(/-/g, ' ')}
                        </p>
                    </div>
                )}
            </div>

            {/* Content - Compact */}
            <div className="p-3 flex flex-col flex-grow">
                <h3 className="font-bold text-gray-900 text-sm leading-tight mb-1 line-clamp-2 min-h-[2.5em]" title={book.title}>
                    {book.title}
                </h3>
                <p className="text-xs text-gray-500 mb-2 truncate">{book.author}</p>

                <div className="mt-auto pt-2 border-t border-gray-50 flex justify-between items-center">
                    <div className="flex flex-col">
                        {hasDiscount ? (
                            <>
                                <span className="text-xs text-gray-400 line-through">Rs. {book.originalPrice}</span>
                                <span className="font-bold text-gray-900 text-sm text-red-600">Rs. {book.discountPrice}</span>
                            </>
                        ) : (
                            <span className="font-bold text-gray-900 text-sm">Rs. {book.price}</span>
                        )}
                    </div>
                    <button className={`text-[10px] font-bold uppercase tracking-wide px-2 py-1 rounded transition-colors ${hasDiscount ? 'bg-red-50 text-red-600 hover:bg-red-100' : 'bg-indigo-50 text-indigo-600 hover:bg-indigo-100'}`}>
                        {hasDiscount ? 'Buy' : 'View'}
                    </button>
                </div>
            </div>
        </Link>
    );
};

export default BookCard;
