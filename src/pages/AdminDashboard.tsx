"use client";

import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import OrderTable from "@/components/OrderTable";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { ChevronLeft, History, PlusCircle, Settings } from "lucide-react";

// Definisi tipe untuk pesanan (konsisten dengan OrderTable)
type Order = {
  id: string;
  customer: string;
  service: string;
  status: "Pending" | "In Progress" | "Completed";
  weight: number;
  price: number;
  date: string;
  paymentMethod: string;
  orderType: "Pickup" | "Delivery";
  location?: string;
  clothingType?: string;
};

// Contoh data pesanan awal (sama dengan LaundryDashboard untuk konsistensi)
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
    id: "ORD005",
    customer: "Andi Pratama",
    service: "Cuci Setrika",
    status: "Completed",
    weight: 6,
    price: 35000,
    date: "2023-10-24",
    paymentMethod: "Tunai",
    orderType: "Delivery",
    location: undefined,
    clothingType: undefined,
  },
  {
    id: "ORD006",
    customer: "Rina Wijaya",
    service: "Cuci Kering",
    status: "Completed",
    weight: 2.5,
    price: 12500,
    date: "2023-10-23",
    paymentMethod: "QRIS",
    orderType: "Pickup",
    location: "Apartemen Sejahtera Blok B",
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

const AdminDashboard = () => {
  const [orders, setOrders] = useState<Order[]>(initialOrders);
  const navigate = useNavigate();

  const handleUpdateOrderStatus = (orderId: string, newStatus: Order["status"]) => {
    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order.id === orderId ? { ...order, status: newStatus } : order
      )
    );
    toast.success(`Status pesanan ${orderId} berhasil diperbarui menjadi ${newStatus}.`);
  };

  // Calculate summary data
  const totalOrders = orders.length;
  const pendingOrders = orders.filter(
    (order) => order.status === "Pending",
  ).length;
  const inProgressOrders = orders.filter(
    (order) => order.status === "In Progress",
  ).length;
  const completedOrders = orders.filter(
    (order) => order.status === "Completed",
  ).length;
  const totalRevenue = orders.reduce((sum, order) => sum + order.price, 0);

  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8"
            onClick={() => navigate(-1)}
          >
            <ChevronLeft className="h-4 w-4" />
            <span className="sr-only">Kembali</span>
          </Button>
          <h1 className="text-2xl font-semibold">Dashboard Admin</h1>
          <div className="ml-auto flex items-center gap-2">
            <Button size="sm" variant="outline" className="h-8 gap-1" asChild>
              <Link to="/settings"> {/* Mengarahkan ke halaman pengaturan utama */}
                <Settings className="h-3.5 w-3.5" />
                <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                  Pengaturan
                </span>
              </Link>
            </Button>
          </div>
        </header>
        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-3">
          <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-3">
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Total Pesanan
                  </CardTitle>
                  <History className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{totalOrders}</div>
                  <p className="text-xs text-muted-foreground">
                    Jumlah semua pesanan
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Pesanan Pending
                  </CardTitle>
                  <PlusCircle className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{pendingOrders}</div>
                  <p className="text-xs text-muted-foreground">
                    Pesanan menunggu diproses
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Sedang Diproses
                  </CardTitle>
                  <History className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{inProgressOrders}</div>
                  <p className="text-xs text-muted-foreground">
                    Pesanan dalam pengerjaan
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Pendapatan Total
                  </CardTitle>
                  <History className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">
                    Rp{totalRevenue.toLocaleString("id-ID")}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Dari semua pesanan selesai
                  </p>
                </CardContent>
              </Card>
            </div>
            <Card>
              <CardHeader className="px-7">
                <CardTitle>Manajemen Pesanan</CardTitle>
                <CardDescription>
                  Kelola semua pesanan laundry yang masuk dan perbarui statusnya.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <OrderTable orders={orders} onUpdateOrderStatus={handleUpdateOrderStatus} />
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;