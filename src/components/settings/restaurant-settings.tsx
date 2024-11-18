"use client";

import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export function RestaurantSettings() {
  return (
    <Card className="p-6">
      <form className="space-y-6">
        <div className="space-y-2">
          <Label>Restaurant Name</Label>
          <Input placeholder="Enter restaurant name" />
        </div>
        <div className="space-y-2">
          <Label>Address</Label>
          <Textarea placeholder="Enter restaurant address" />
        </div>
        <div className="space-y-2">
          <Label>Contact Number</Label>
          <Input type="tel" placeholder="Enter contact number" />
        </div>
        <div className="space-y-2">
          <Label>Email</Label>
          <Input type="email" placeholder="Enter email address" />
        </div>
        <div className="pt-4 border-t">
          <Button>Save Changes</Button>
        </div>
      </form>
    </Card>
  );
}