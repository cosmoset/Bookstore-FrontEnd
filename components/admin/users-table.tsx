'use client';

import { useState } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
  role: 'Admin' | 'User';
}

export default function UsersTable() {
  const [users, setUsers] = useState<User[]>([
    { id: '1', name: 'John Doe', email: 'john@example.com', role: 'Admin' },
    { id: '2', name: 'Jane Smith', email: 'jane@example.com', role: 'User' },
    { id: '3', name: 'Bob Johnson', email: 'bob@example.com', role: 'User' },
    { id: '4', name: 'Alice Brown', email: 'alice@example.com', role: 'Admin' },
    { id: '5', name: 'Charlie Wilson', email: 'charlie@example.com', role: 'User' },
    { id: '6', name: 'Diana Miller', email: 'diana@example.com', role: 'User' },
    { id: '7', name: 'Edward Davis', email: 'edward@example.com', role: 'Admin' },
    { id: '8', name: 'Fiona Taylor', email: 'fiona@example.com', role: 'User' },
    { id: '9', name: 'George White', email: 'george@example.com', role: 'User' },
    { id: '10', name: 'Hannah Clark', email: 'hannah@example.com', role: 'Admin' },
  ]);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const totalPages = Math.ceil(users.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentUsers = users.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md overflow-x-auto">
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search users..."
          className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black bg-white text-gray-700 w-full sm:max-w-lg"
        />
      </div>

      <table className="w-full min-w-[600px]">
        <thead>
          <tr className="bg-gray-50">
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">Name</th>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">Email</th>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">Role</th>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentUsers.map((user) => (
            <tr key={user.id} className="border-b hover:bg-gray-50 transition-colors">
              <td className="px-4 py-2 text-sm text-gray-700">{user.name}</td>
              <td className="px-4 py-2 text-sm text-gray-700">{user.email}</td>
              <td className="px-4 py-2">
                <span
                  className={`px-2 py-1 rounded-full text-xs font-medium ${
                    user.role === 'Admin'
                      ? 'bg-black text-white'
                      : 'bg-green-100 text-green-800'
                  }`}
                >
                  {user.role}
                </span>
              </td>
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
          Showing {startIndex + 1} to {Math.min(endIndex, users.length)} of {users.length} entries
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