// import { MainNav } from "@/components/main-nav";
import { DashboardStats } from "@/components/dashboard/stats";
import { OrderReport } from "@/components/dashboard/order-report";
import { MostOrdered } from "@/components/dashboard/most-ordered";
import { OrderTypeChart } from "@/components/dashboard/order-type-chart";

export default function DashboardPage() {
  return (
    <div className="min-h-full pb-8">
      <div className="px-4 sm:px-6 pt-6">
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">Dashboard Overview</h1>
        <p className="text-sm sm:text-base text-muted-foreground">Monitor your business performance and insights.</p>
      </div>
      
      <div className="px-4 sm:px-6 py-6 sm:py-8">
        <DashboardStats />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 px-4 sm:px-6">
        <div className="flex flex-col space-y-4 sm:space-y-6">
          <OrderTypeChart />
          <OrderReport />
        </div>
        <div className="flex flex-col space-y-4 sm:space-y-6">
          <MostOrdered />
        </div>
      </div>
    </div>
  );
}