import { DataTable } from "@/components/customers/data-table";
import { columns } from "./columns";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";

const customers = [
  {
    id: "1",
    name: "John Doe",
    email: "john@example.com",
    phone: "+1 234 567 890",
    orders: 15,
    totalSpent: 458.99,
    lastOrder: new Date("2024-03-01"),
  },
  {
    id: "2",
    name: "Jane Smith",
    email: "jane@example.com",
    phone: "+1 234 567 891",
    orders: 8,
    totalSpent: 234.50,
    lastOrder: new Date("2024-03-05"),
  },
];

export default function CustomersPage() {
  return (
    <div className="h-full flex flex-col">
      <div className="flex items-center justify-between p-6 border-b">
        <h1 className="text-2xl font-bold">Customers</h1>
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" />
          Add Customer
        </Button>
      </div>
      <div className="p-6 flex-1">
        <DataTable columns={columns} data={customers} />
      </div>
    </div>
  );
}