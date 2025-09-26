"use client";

import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const CustomerSettings: React.FC = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Pengaturan Pelanggan</CardTitle>
        <CardDescription>Kelola preferensi terkait pelanggan.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid gap-2">
          <Label htmlFor="loyalty-program">Program Loyalitas</Label>
          <Input id="loyalty-program" placeholder="Nama Program Loyalitas (opsional)" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="default-discount">Diskon Pelanggan Baru (%)</Label>
          <Input id="default-discount" type="number" defaultValue="0" />
        </div>
        <Button className="w-full">Simpan Perubahan</Button>
      </CardContent>
    </Card>
  );
};

export default CustomerSettings;