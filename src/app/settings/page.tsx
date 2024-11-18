import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { ProductsManagement } from "@/components/settings/products-management";
import { AppearanceSettings } from "@/components/settings/appearance-settings";
import { RestaurantSettings } from "@/components/settings/restaurant-settings";

export default function SettingsPage() {
  return (
    <div className="h-full flex flex-col p-6">
      <h1 className="text-2xl font-bold mb-6">Settings</h1>
      <Tabs defaultValue="products" className="flex-1">
        <TabsList>
          <TabsTrigger value="products">Products Management</TabsTrigger>
          <TabsTrigger value="appearance">Appearance</TabsTrigger>
          <TabsTrigger value="restaurant">Restaurant Info</TabsTrigger>
        </TabsList>
        <TabsContent value="products" className="mt-6">
          <ProductsManagement />
        </TabsContent>
        <TabsContent value="appearance" className="mt-6">
          <AppearanceSettings />
        </TabsContent>
        <TabsContent value="restaurant" className="mt-6">
          <RestaurantSettings />
        </TabsContent>
      </Tabs>
    </div>
  );
}