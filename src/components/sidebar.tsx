"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  LayoutGrid,
  ChefHat,
  ShoppingBag,
  Settings,
  BarChart3,
  Users,
} from "lucide-react";

const routes = [
  {
    label: "Dashboard",
    icon: LayoutGrid,
    href: "/dashboard",
  },
  {
    label: "Orders",
    icon: ShoppingBag,
    href: "/orders",
  },
  {
    label: "Kitchen",
    icon: ChefHat,
    href: "/kitchen",
  },
  {
    label: "Analytics",
    icon: BarChart3,
    href: "/analytics",
  },
  {
    label: "Customers",
    icon: Users,
    href: "/customers",
  },
  {
    label: "Settings",
    icon: Settings,
    href: "/settings",
  },
];

export function Sidebar({ className }: { className?: string }) {
  const pathname = usePathname();

  return (
    <div className={cn("flex h-full w-[200px] flex-col bg-card border-r", className)}>
      <div className="p-6">
        <h1 className="text-xl font-bold">Restaurant POS</h1>
      </div>
      <div className="flex flex-col flex-1 p-4">
        {routes.map((route) => (
          <Link
            key={route.href}
            href={route.href}
            className={cn(
              "flex items-center gap-x-2 text-muted-foreground text-sm font-medium px-3 py-2 rounded-lg hover:bg-accent hover:text-accent-foreground transition-colors",
              pathname === route.href && "bg-accent text-accent-foreground"
            )}
          >
            <route.icon className="h-5 w-5" />
            {route.label}
          </Link>
        ))}
      </div>
    </div>
  );
}