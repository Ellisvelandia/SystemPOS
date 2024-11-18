"use client";

import { Card } from "@/components/ui/card";
import Image from "next/image";
import { products } from "@/lib/data";

export function MostOrdered() {
  const topProducts = products.slice(0, 3);

  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold">Most Ordered</h3>
        <select className="text-sm bg-transparent border-none">
          <option>Today</option>
          <option>This Week</option>
          <option>This Month</option>
        </select>
      </div>
      <div className="space-y-4">
        {topProducts.map((product) => (
          <div key={product.id} className="flex items-center gap-4">
            <div className="relative h-12 w-12">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="rounded-full object-cover"
              />
            </div>
            <div className="flex-1">
              <h4 className="text-sm font-medium">{product.name}</h4>
              <p className="text-sm text-muted-foreground">200 dishes ordered</p>
            </div>
          </div>
        ))}
      </div>
      <button className="w-full mt-4 text-sm text-primary">View All</button>
    </Card>
  );
}