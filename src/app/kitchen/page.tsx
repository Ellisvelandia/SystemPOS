import { orders } from "@/lib/data";

export default function KitchenPage() {
  return (
    <div className="h-full flex flex-col">
      <div className="flex items-center justify-between p-6 border-b">
        <h1 className="text-2xl font-bold">Kitchen Display</h1>
      </div>
      <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {orders.map((order) => (
          <div key={order.id} className="bg-card rounded-lg border p-4">
            <div className="flex justify-between items-center mb-4">
              <div>
                <h3 className="font-semibold">Order #{order.id}</h3>
                <p className="text-sm text-muted-foreground">{order.customer}</p>
              </div>
              <div className={`px-2 py-1 rounded-full text-xs ${
                order.status === "completed"
                  ? "bg-green-100 text-green-600"
                  : order.status === "preparing"
                  ? "bg-yellow-100 text-yellow-600"
                  : "bg-gray-100 text-gray-600"
              }`}>
                {order.status}
              </div>
            </div>
            <div className="space-y-2">
              {/* Placeholder for order items */}
              <div className="text-sm">2x Spicy Chicken Burger</div>
              <div className="text-sm">1x Classic Pizza</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}