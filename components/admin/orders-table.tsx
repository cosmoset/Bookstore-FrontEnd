'use client';

import { useState } from 'react';

interface Order {
  id: string;
  customer: string;
  amount: string;
  status: 'Completed' | 'Pending' | 'Cancelled';
}

export default function OrdersTable() {
  const [orders, setOrders] = useState<Order[]>([
    { id: '#12345', customer: 'John Doe', amount: '$49.99', status: 'Completed' },
    { id: '#12346', customer: 'Jane Smith', amount: '$99.99', status: 'Pending' },
    { id: '#12347', customer: 'Alice Johnson', amount: '$29.99', status: 'Cancelled' },
    { id: '#12348', customer: 'Bob Brown', amount: '$79.99', status: 'Completed' },
    { id: '#12349', customer: 'Charlie Davis', amount: '$59.99', status: 'Pending' },
    { id: '#12350', customer: 'Eve White', amount: '$39.99', status: 'Cancelled' },
    { id: '#12351', customer: 'Frank Miller', amount: '$89.99', status: 'Completed' },
    { id: '#12352', customer: 'Grace Lee', amount: '$69.99', status: 'Pending' },
    { id: '#12353', customer: 'Henry Wilson', amount: '$49.99', status: 'Completed' },
    { id: '#12354', customer: 'Ivy Taylor', amount: '$29.99', status: 'Cancelled' },
  ]);

  const [filterStatus, setFilterStatus] = useState('All Orders');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const filteredOrders = filterStatus === 'All Orders'
    ? orders
    : orders.filter(order => order.status === filterStatus);

  const totalPages = Math.ceil(filteredOrders.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentOrders = filteredOrders.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md overflow-x-auto">
      <div className="mb-6">
        <label htmlFor="filterStatus" className="block text-sm font-medium text-gray-700 mb-2">
          Filter Orders by Status
        </label>
        <select
          id="filterStatus"
          value={filterStatus}
          onChange={(e) => {
            setFilterStatus(e.target.value);
            setCurrentPage(1); // Reset to first page when filter changes
          }}
          className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black bg-white text-gray-700"
        >
          <option>All Orders</option>
          <option>Completed</option>
          <option>Pending</option>
          <option>Cancelled</option>
        </select>
      </div>

      <table className="w-full min-w-[600px]">
        <thead>
          <tr className="bg-gray-50">
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">Order ID</th>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">Customer</th>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">Amount</th>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">Status</th>
          </tr>
        </thead>
        <tbody>
          {currentOrders.map((order) => (
            <tr key={order.id} className="border-b hover:bg-gray-50 transition-colors">
              <td className="px-4 py-2 text-sm text-gray-700">{order.id}</td>
              <td className="px-4 py-2 text-sm text-gray-700">{order.customer}</td>
              <td className="px-4 py-2 text-sm text-gray-700">{order.amount}</td>
              <td className="px-4 py-2">
                <span
                  className={`px-2 py-1 rounded-full text-xs font-medium ${
                    order.status === 'Completed'
                      ? 'bg-green-100 text-green-800'
                      : order.status === 'Pending'
                      ? 'bg-yellow-100 text-yellow-800'
                      : 'bg-red-100 text-red-800'
                  }`}
                >
                  {order.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex flex-col sm:flex-row justify-between items-center mt-6 gap-4 sm:gap-0 w-full">
        <p className="text-sm text-gray-600">
          Showing {startIndex + 1} to {Math.min(endIndex, filteredOrders.length)} of {filteredOrders.length} entries
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