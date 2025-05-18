'use client';

import { useState } from 'react';

interface Book {
  id: string;
  title: string;
  author: string;
  price: number;
  stock: number;
}

export default function BooksTable() {
  const [books, setBooks] = useState<Book[]>([
    { id: '1', title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', price: 10.99, stock: 50 },
    { id: '2', title: 'To Kill a Mockingbird', author: 'Harper Lee', price: 12.99, stock: 30 },
    { id: '3', title: '1984', author: 'George Orwell', price: 9.99, stock: 45 },
    { id: '4', title: 'Pride and Prejudice', author: 'Jane Austen', price: 8.99, stock: 60 },
    { id: '5', title: 'The Hobbit', author: 'J.R.R. Tolkien', price: 14.99, stock: 35 },
    { id: '6', title: 'The Catcher in the Rye', author: 'J.D. Salinger', price: 11.99, stock: 25 },
    { id: '7', title: 'Lord of the Flies', author: 'William Golding', price: 10.99, stock: 40 },
    { id: '8', title: 'The Alchemist', author: 'Paulo Coelho', price: 12.99, stock: 55 },
    { id: '9', title: 'Brave New World', author: 'Aldous Huxley', price: 9.99, stock: 30 },
    { id: '10', title: 'The Little Prince', author: 'Antoine de Saint-Exupéry', price: 7.99, stock: 65 },
  ]);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const totalPages = Math.ceil(books.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentBooks = books.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md overflow-x-auto">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4 sm:gap-0 w-full">
        <input
          type="text"
          placeholder="Search books..."
          className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black bg-white text-gray-700 w-full sm:max-w-md"
        />
        <button
          onClick={() => {/* TODO: Implement add book */}}
          className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition-colors w-full sm:w-auto"
        >
          Add Book
        </button>
      </div>

      <table className="w-full min-w-[600px]">
        <thead>
          <tr className="bg-gray-50">
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">Title</th>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">Author</th>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">Price</th>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">Stock</th>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentBooks.map((book) => (
            <tr key={book.id} className="border-b hover:bg-gray-50 transition-colors">
              <td className="px-4 py-2 text-sm text-gray-700">{book.title}</td>
              <td className="px-4 py-2 text-sm text-gray-700">{book.author}</td>
              <td className="px-4 py-2 text-sm text-gray-700">${book.price.toFixed(2)}</td>
              <td className="px-4 py-2 text-sm text-gray-700">{book.stock}</td>
              <td className="px-4 py-2">
                <button className="text-black hover:text-gray-800 mr-2 text-sm">Edit</button>
                <button className="text-red-600 hover:text-red-800 text-sm">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex flex-col sm:flex-row justify-between items-center mt-6 gap-4 sm:gap-0 w-full">
        <p className="text-sm text-gray-600">
          Showing {startIndex + 1} to {Math.min(endIndex, books.length)} of {books.length} entries
        </p>
        <div className="flex items-center space-x-2">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Previous
          </button>
          <div className="flex items-center space-x-1">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`px-3 py-1 rounded-md ${
                  currentPage === page
                    ? 'bg-black text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {page}
              </button>
            ))}
          </div>
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
} 