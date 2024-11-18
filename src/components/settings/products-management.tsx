"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PlusCircle, Edit } from "lucide-react";
import Image from "next/image";
import { products, categories } from "@/lib/data";

export function ProductsManagement() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div className="space-x-2">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant="outline"
              size="sm"
            >
              {category.name}
            </Button>
          ))}
        </div>
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" />
          Add new dish
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <Card key={product.id} className="p-4">
            <div className="flex gap-4">
              <div className="relative h-20 w-20">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="rounded-lg object-cover"
                />
              </div>
              <div className="flex-1">
                <div className="flex justify-between">
                  <h3 className="font-semibold">{product.name}</h3>
                  <Button variant="ghost" size="icon">
                    <Edit className="h-4 w-4" />
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground">${product.price}</p>
                <p className="text-sm text-muted-foreground mt-1">
                  {product.available ? "In Stock" : "Out of Stock"}
                </p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}