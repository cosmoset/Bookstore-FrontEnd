import UsersTable from '@/components/admin/users-table';

export default function UsersPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Manage Users</h1>
      <UsersTable />
    </div>
  );
} 