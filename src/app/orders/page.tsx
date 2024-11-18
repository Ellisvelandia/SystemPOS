import { DataTable } from "@/components/data-table";
import { columns } from "./columns";
import { orders } from "@/lib/data";
import { Order } from "./columns";

export default function OrdersPage() {
  // Create a mutable copy of the orders array
  const mutableOrders: Order[] = [...orders];

  return (
    <div className="h-full flex flex-col">
      <div className="flex items-center justify-between p-6 border-b">
        <h1 className="text-2xl font-bold">Orders</h1>
      </div>
      <div className="p-6 flex-1">
        <DataTable columns={columns} data={mutableOrders} />
      </div>
    </div>
  );
}