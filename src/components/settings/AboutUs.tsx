"use client";

import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const AboutUs: React.FC = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Tentang Kami</CardTitle>
        <CardDescription>Informasi tentang aplikasi atau bisnis Anda.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid gap-2">
          <Label htmlFor="app-name">Nama Aplikasi</Label>
          <Input id="app-name" defaultValue="BetterLaundry App" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="app-version">Versi Aplikasi</Label>
          <Input id="app-version" defaultValue="1.0.0" readOnly />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="description">Deskripsi</Label>
          <Textarea
            id="description"
            defaultValue="BetterLaundry adalah aplikasi manajemen laundry yang dirancang untuk memudahkan pemilik bisnis laundry dalam mengelola pesanan, pelanggan, dan operasional sehari-hari."
            rows={5}
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="contact-email">Email Kontak</Label>
          <Input id="contact-email" defaultValue="support@betterlaundry.com" />
        </div>
        <Button className="w-full">Simpan Perubahan</Button>
      </CardContent>
    </Card>
  );
};

export default AboutUs;