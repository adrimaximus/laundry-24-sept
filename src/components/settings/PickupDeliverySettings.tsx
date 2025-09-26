"use client";

import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const PickupDeliverySettings: React.FC = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Pengaturan Antar-Jemput</CardTitle>
        <CardDescription>Konfigurasi layanan penjemputan dan pengiriman.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <Label htmlFor="enable-pickup">Aktifkan Layanan Penjemputan</Label>
          <Switch id="enable-pickup" defaultChecked />
        </div>
        <div className="flex items-center justify-between">
          <Label htmlFor="enable-delivery">Aktifkan Layanan Pengiriman</Label>
          <Switch id="enable-delivery" defaultChecked />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="delivery-fee">Biaya Pengiriman Default (Rp)</Label>
          <Input id="delivery-fee" type="number" defaultValue="5000" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="min-order-free-delivery">Minimal Pesanan Gratis Pengiriman (kg)</Label>
          <Input id="min-order-free-delivery" type="number" defaultValue="5" />
        </div>
        <Button className="w-full">Simpan Perubahan</Button>
      </CardContent>
    </Card>
  );
};

export default PickupDeliverySettings;