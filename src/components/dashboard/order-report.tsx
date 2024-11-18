"use client";

import { Card } from "@/components/ui/card";
import { orders } from "@/lib/data";
import { format } from "date-fns";

export function OrderReport() {
  return (
    <Card className="m-6">
      <div className="p-6 border-b">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">Order Report</h3>
          <button className="text-sm text-primary">Filter Order</button>
        </div>
      </div>
      <div className="p-6">
        <table className="w-full">
          <thead>
            <tr className="text-sm text-muted-foreground">
              <th className="text-left font-medium py-2">Customer</th>
              <th className="text-left font-medium py-2">Menu</th>
              <th className="text-left font-medium py-2">Total Payment</th>
              <th className="text-left font-medium py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="border-b last:border-0">
                <td className="py-4">{order.customer}</td>
                <td className="py-4">Various Items</td>
                <td className="py-4">
                  {new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                  }).format(order.total)}
                </td>
                <td className="py-4">
                  <span
                    className={`px-2 py-1 rounded-full text-xs ${
                      order.status === "completed"
                        ? "bg-green-100 text-green-600"
                        : order.status === "preparing"
                        ? "bg-yellow-100 text-yellow-600"
                        : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {order.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
}