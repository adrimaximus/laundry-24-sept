"use client";

import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Bell, MapPin, Truck, WashingMachine, Users, Info, ChevronLeft } from 'lucide-react'; // Import ikon yang diperlukan, termasuk ChevronLeft
import { Button } from '@/components/ui/button'; // Import Button

const settingsOptions = [
  {
    title: "Pengaturan Lokasi",
    description: "Kelola informasi lokasi bisnis Anda.",
    icon: MapPin,
    path: "/settings/location",
  },
  {
    title: "Pengaturan Notifikasi",
    description: "Kelola preferensi notifikasi Anda.",
    icon: Bell,
    path: "/settings/notifications",
  },
  {
    title: "Pengaturan Antar-Jemput",
    description: "Konfigurasi layanan penjemputan dan pengiriman.",
    icon: Truck,
    path: "/settings/pickup-delivery",
  },
  {
    title: "Pengaturan Layanan",
    description: "Kelola jenis layanan laundry yang tersedia.",
    icon: WashingMachine,
    path: "/settings/services",
  },
  {
    title: "Pengaturan Pelanggan",
    description: "Kelola preferensi terkait pelanggan.",
    icon: Users,
    path: "/settings/customers",
  },
  {
    title: "Tentang Kami",
    description: "Informasi tentang aplikasi atau bisnis Anda.",
    icon: Info,
    path: "/settings/about",
  },
];

const SettingsPage = () => {
  const navigate = useNavigate(); // Inisialisasi useNavigate

  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8"
            onClick={() => navigate(-1)} // Tombol kembali
          >
            <ChevronLeft className="h-4 w-4" />
            <span className="sr-only">Kembali</span>
          </Button>
          <h1 className="text-2xl font-semibold">Pengaturan</h1>
        </header>
        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
          <div className="flex flex-col gap-4 max-w-2xl mx-auto w-full">
            {settingsOptions.map((option) => {
              const IconComponent = option.icon;
              return (
                <Link to={option.path} key={option.path}>
                  <Card className="hover:bg-accent transition-colors cursor-pointer">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-lg font-medium">{option.title}</CardTitle>
                      <IconComponent className="h-6 w-6 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{option.description}</p>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </main>
      </div>
    </div>
  );
};

export default SettingsPage;