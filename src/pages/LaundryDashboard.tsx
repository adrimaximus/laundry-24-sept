"use client";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
}
from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
}
from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { WashingMachine } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
}
from "@/components/ui/dialog";
import CreateOrderForm from "@/components/CreateOrderForm";

// Import komponen dashboard baru
import BranchSelector from "@/components/dashboard/BranchSelector";
import DailySummaryCard from "@/components/dashboard/DailySummaryCard";
import ActionButtonsGrid from "@/components/dashboard/ActionButtonsGrid";
import HelpCard from "@/components/dashboard/HelpCard";
import PromotionCarousel from "@/components/dashboard/PromotionCarousel"; // Import komponen baru

// Definisi tipe untuk pesanan
type Order = {
  id: string;
  customer: string;
  service: string;
  status: "Pending" | "In Progress" | "Completed";
  weight: number;
  price: number;
  date: string;
  paymentMethod: "QRIS" | "Debit" | "Tunai";
  orderType: "Pickup" | "Delivery";
  location?: string;
  clothingType?: string;
};

// Contoh data pesanan awal
const initialOrders: Order[] = [
  {
    id: "ORD001",
    customer: "Budi Santoso",
    service: "Cuci Kering",
    status: "Pending",
    weight: 3,
    price: 15000,
    date: "2023-10-26",
    paymentMethod: "QRIS",
    orderType: "Pickup",
    location: "Jl. Merdeka No. 10",
    clothingType: undefined,
  },
  {
    id: "ORD002",
    customer: "Siti Aminah",
    service: "Cuci Setrika",
    status: "In Progress",
    weight: 5,
    price: 30000,
    date: "2023-10-25",
    paymentMethod: "Debit",
    orderType: "Delivery",
    location: undefined,
    clothingType: undefined,
  },
  {
    id: "ORD003",
    customer: "Joko Susilo",
    service: "Setrika Saja",
    status: "Pending",
    weight: 2,
    price: 10000,
    date: "2023-10-26",
    paymentMethod: "Tunai",
    orderType: "Pickup",
    location: "Perumahan Indah Blok C-5",
    clothingType: undefined,
  },
  {
    id: "ORD004",
    customer: "Dewi Lestari",
    service: "Cuci Kering",
    status: "Completed",
    weight: 4,
    price: 20000,
    date: "2023-10-27",
    paymentMethod: "QRIS",
    orderType: "Delivery",
    location: undefined,
    clothingType: undefined,
  },
  {
    id: "ORD007",
    customer: "Fajar Nugraha",
    service: "Cuci Satuan",
    status: "Pending",
    weight: 0.5,
    price: 25000,
    date: "2023-10-28",
    paymentMethod: "Tunai",
    orderType: "Pickup",
    location: "Jl. Mawar No. 5",
    clothingType: "Gaun Pesta",
  },
];

const LaundryDashboard = () => {
  const [orders, setOrders] = useState<Order[]>(initialOrders);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleOrderCreated = (newOrder: Order) => {
    setOrders((prevOrders) => [...prevOrders, newOrder]);
  };

  const getStatusVariant = (status: string) => {
    switch (status) {
      case "Pending":
        return "destructive";
      case "In Progress":
        return "secondary";
      case "Completed":
        return "default";
      default:
        return "outline";
    }
  };

  // Calculate summary data for DailySummaryCard
  const totalRevenue = orders.reduce((sum, order) => sum + order.price, 0);
  const totalWeight = orders.reduce((sum, order) => sum + order.weight, 0);
  const totalPcs = orders.filter(order => order.service === "Cuci Satuan").length;
  const totalMeters = 0;

  return (
    <div className="relative min-h-screen w-full flex flex-col bg-yellow-50">
      {/* Background accents layer */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <WashingMachine className="absolute top-10 left-1/4 h-24 w-24 text-yellow-400 opacity-40 rotate-12" />
        <WashingMachine className="absolute bottom-20 right-1/3 h-32 w-32 text-yellow-400 opacity-30 -rotate-45" />
        <WashingMachine className="absolute top-1/2 left-10 h-16 w-16 text-yellow-400 opacity-35 rotate-6" />
        <WashingMachine className="absolute bottom-5 left-1/2 h-20 w-20 text-yellow-400 opacity-25 rotate-90" />
        <WashingMachine className="absolute top-1/3 right-20 h-28 w-28 text-yellow-400 opacity-45 -rotate-24" />
        <WashingMachine className="absolute top-3/4 left-1/4 h-20 w-20 text-yellow-400 opacity-30 rotate-30" />
        <WashingMachine className="absolute top-1/4 right-1/4 h-16 w-16 text-yellow-400 opacity-35 -rotate-15" />
      </div>

      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14 relative z-10">
        {/* Wrapper untuk membatasi lebar konten */}
        <div className="max-w-4xl mx-auto w-full">
          <header className="sticky top-0 z-30 flex h-14 items-center justify-center border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
            <h1 className="text-7xl font-bold flex items-center gap-2">
              <WashingMachine className="h-16 w-16 text-yellow-500" />
              BetterLaundry
            </h1>
          </header>

          <div className="px-4 sm:px-6 py-4 space-y-4">
            <PromotionCarousel /> {/* Menambahkan PromotionCarousel di sini */}
            <BranchSelector />
            <DailySummaryCard
              totalRevenue={totalRevenue}
              totalOrders={orders.length}
              totalWeight={totalWeight}
              totalPcs={totalPcs}
              totalMeters={totalMeters}
            />
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <ActionButtonsGrid onAddOrderClick={() => setIsDialogOpen(true)} />
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Buat Pesanan Baru</DialogTitle>
                  <DialogDescription>
                    Isi detail pesanan laundry baru di sini.
                  </DialogDescription>
                </DialogHeader>
                <CreateOrderForm
                  onOrderCreated={handleOrderCreated}
                  onClose={() => setIsDialogOpen(false)}
                />
              </DialogContent>
            </Dialog>
            <HelpCard />
          </div>
        </div>
      </div>
    </div>
  );
};
export default LaundryDashboard;