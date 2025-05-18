import BooksTable from '@/components/admin/books-table';

export default function BooksPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Manage Books</h1>
      <BooksTable />
    </div>
  );
} 