"use client";

import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

const ServiceSettings: React.FC = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Pengaturan Layanan</CardTitle>
        <CardDescription>Kelola jenis layanan laundry yang tersedia.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center space-x-2">
          <Checkbox id="cuci-kering" defaultChecked />
          <Label htmlFor="cuci-kering">Cuci Kering</Label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="cuci-setrika" defaultChecked />
          <Label htmlFor="cuci-setrika">Cuci Setrika</Label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="setrika-saja" defaultChecked />
          <Label htmlFor="setrika-saja">Setrika Saja</Label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="cuci-satuan" defaultChecked />
          <Label htmlFor="cuci-satuan">Cuci Satuan (Extra Handling)</Label>
        </div>
      </CardContent>
    </Card>
  );
};

export default ServiceSettings;