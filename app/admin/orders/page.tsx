import OrdersTable from '@/components/admin/orders-table';

export default function OrdersPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">View Orders</h1>
      <OrdersTable />
    </div>
  );
} 