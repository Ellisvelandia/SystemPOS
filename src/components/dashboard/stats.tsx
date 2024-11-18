"use client";

import { Card } from "@/components/ui/card";
import { TrendingUp, TrendingDown, Users, ShoppingBag, DollarSign, ArrowUpRight, ArrowDownRight } from "lucide-react";

const stats = [
  {
    title: "Total Revenue",
    value: "$10,243.00",
    change: "+12.40%",
    trend: "up",
    icon: DollarSign,
    description: "vs. last month"
  },
  {
    title: "Total Orders",
    value: "23,456",
    change: "-7.40%",
    trend: "down",
    icon: ShoppingBag,
    description: "vs. last month"
  },
  {
    title: "Total Customers",
    value: "1,234",
    change: "+2.40%",
    trend: "up",
    icon: Users,
    description: "vs. last month"
  },
];

export function DashboardStats() {
  return (
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
      {stats.map((stat) => (
        <Card key={stat.title} className="relative overflow-hidden">
          <div className="p-4 sm:p-6">
            <div className="absolute top-2 right-2">
              <div className={`p-2 rounded-full ${
                stat.trend === 'up' 
                  ? 'bg-green-50 text-green-500 dark:bg-green-900/20' 
                  : 'bg-red-50 text-red-500 dark:bg-red-900/20'
              }`}>
                {stat.trend === 'up' ? <ArrowUpRight className="h-4 w-4" /> : <ArrowDownRight className="h-4 w-4" />}
              </div>
            </div>
            <div className="flex flex-col space-y-1">
              <div className="flex items-center space-x-2">
                <div className="p-2 bg-background/10 rounded-full">
                  <stat.icon className="h-4 w-4 text-muted-foreground" />
                </div>
                <h3 className="text-sm font-medium text-muted-foreground">{stat.title}</h3>
              </div>
              <div className="text-xl sm:text-2xl font-bold">{stat.value}</div>
            </div>
            <div className="mt-4 flex items-center text-xs sm:text-sm">
              <span className={stat.trend === 'up' ? 'text-green-500' : 'text-red-500'}>
                {stat.change}
              </span>
              <span className="ml-2 text-muted-foreground">{stat.description}</span>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}