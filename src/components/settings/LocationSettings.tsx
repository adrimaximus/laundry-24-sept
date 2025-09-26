"use client";

import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const LocationSettings: React.FC = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Pengaturan Lokasi</CardTitle>
        <CardDescription>Kelola informasi lokasi bisnis Anda.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid gap-2">
          <Label htmlFor="address">Alamat Utama</Label>
          <Input id="address" defaultValue="Jl. Laundry Bahagia No. 123, Jakarta" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="city">Kota</Label>
          <Input id="city" defaultValue="Jakarta" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="postal-code">Kode Pos</Label>
          <Input id="postal-code" defaultValue="12345" />
        </div>
        <Button className="w-full">Simpan Perubahan</Button>
      </CardContent>
    </Card>
  );
};

export default LocationSettings;