"use client";

import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

const NotificationSettings: React.FC = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Pengaturan Notifikasi</CardTitle>
        <CardDescription>Kelola preferensi notifikasi Anda.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <Label htmlFor="order-updates">Pembaruan Pesanan</Label>
          <Switch id="order-updates" defaultChecked />
        </div>
        <div className="flex items-center justify-between">
          <Label htmlFor="promo-offers">Penawaran Promo</Label>
          <Switch id="promo-offers" />
        </div>
        <div className="flex items-center justify-between">
          <Label htmlFor="pickup-reminders">Pengingat Penjemputan</Label>
          <Switch id="pickup-reminders" defaultChecked />
        </div>
      </CardContent>
    </Card>
  );
};

export default NotificationSettings;