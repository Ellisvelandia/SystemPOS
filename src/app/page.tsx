import { MainNav } from "@/components/main-nav";
import { ProductGrid } from "@/components/product-grid";
import { Cart } from "@/components/cart";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <div className="flex h-screen">
        <div className="flex-1 flex flex-col">
          <MainNav />
          <ProductGrid />
        </div>
        <Cart />
      </div>
    </main>
  );
}