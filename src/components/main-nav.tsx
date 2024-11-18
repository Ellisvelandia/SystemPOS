"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Menu } from "lucide-react";
import { categories } from "@/lib/data";

export function MainNav() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  return (
    <div className="border-b">
      <div className="flex h-16 items-center px-4">
        <Button variant="ghost" size="icon" className="mr-4">
          <Menu className="h-6 w-6" />
        </Button>
        <div className="flex items-center space-x-4 flex-1">
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search products..."
              className="pl-8"
            />
          </div>
          <div className="flex space-x-2">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "ghost"}
                onClick={() => setSelectedCategory(category.id)}
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}