import { DataTable } from "@/components/data-table";
import { columns } from "./columns";
import { orders } from "@/lib/data";

export default function OrdersPage() {
  return (
    <div className="h-full flex flex-col">
      <div className="flex items-center justify-between p-6 border-b">
        <h1 className="text-2xl font-bold">Orders</h1>
      </div>
      <div className="p-6 flex-1">
        <DataTable columns={columns} data={orders} />
      </div>
    </div>
  );
}