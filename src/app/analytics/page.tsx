import { Card } from "@/components/ui/card";
import { RevenueChart } from "@/components/analytics/revenue-chart";
import { TopProducts } from "@/components/analytics/top-products";
import { CustomerStats } from "@/components/analytics/customer-stats";

export default function AnalyticsPage() {
  return (
    <div className="h-full flex flex-col p-6 space-y-6">
      <h1 className="text-2xl font-bold">Analytics</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="p-6">
          <h2 className="text-lg font-semibold mb-4">Revenue Overview</h2>
          <RevenueChart />
        </Card>
        <Card className="p-6">
          <h2 className="text-lg font-semibold mb-4">Top Products</h2>
          <TopProducts />
        </Card>
      </div>
      <Card className="p-6">
        <h2 className="text-lg font-semibold mb-4">Customer Analytics</h2>
        <CustomerStats />
      </Card>
    </div>
  );
}