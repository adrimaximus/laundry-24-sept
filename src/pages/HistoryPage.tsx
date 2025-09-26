"use client";

import React from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, Settings } from "lucide-react";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

// Definisi tipe untuk pesanan (konsisten dengan OrderTable)
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

const HistoryPage = () => {
  const navigate = useNavigate();

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
          <h1 className="text-2xl font-semibold">Riwayat Pesanan</h1>
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
        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
          <Card>
            <CardHeader className="px-7">
              <CardTitle>Riwayat Pesanan Pelanggan</CardTitle>
              <CardDescription>
                Daftar semua pesanan yang telah dibuat. (Dalam implementasi nyata, ini akan difilter per akun pelanggan yang login.)
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID Pesanan</TableHead>
                    <TableHead>Pelanggan</TableHead>
                    <TableHead>Layanan</TableHead>
                    <TableHead>Jenis Pakaian</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Pembayaran</TableHead>
                    <TableHead>Jenis Pesanan</TableHead>
                    <TableHead>Lokasi</TableHead>
                    <TableHead className="text-right">Berat (kg)</TableHead>
                    <TableHead className="text-right">Harga</TableHead>
                    <TableHead className="text-right">Tanggal</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {initialOrders.map((order) => (
                    <TableRow key={order.id}>
                      <TableCell className="font-medium">
                        {order.id}
                      </TableCell>
                      <TableCell>{order.customer}</TableCell>
                      <TableCell>{order.service}</TableCell>
                      <TableCell>{order.clothingType || "-"}</TableCell>
                      <TableCell>
                        <Badge variant={getStatusVariant(order.status)}>
                          {order.status}
                        </Badge>
                      </TableCell>
                      <TableCell>{order.paymentMethod}</TableCell>
                      <TableCell>{order.orderType}</TableCell>
                      <TableCell>
                        {order.orderType === "Pickup" && order.location
                          ? "Tersamar"
                          : order.location || "-"}
                      </TableCell>
                      <TableCell className="text-right">
                        {order.weight}
                      </TableCell>
                      <TableCell className="text-right">
                        Rp{order.price.toLocaleString("id-ID")}
                      </TableCell>
                      <TableCell className="text-right">
                        {order.date}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
};

export default HistoryPage;