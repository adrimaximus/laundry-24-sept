"use client";

import React from "react";
import { Link } from "react-router-dom"; // Import Link
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Settings } from "lucide-react"; // Import Settings icon
import { Button } from "@/components/ui/button"; // Import Button

// Definisi tipe untuk pesanan
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
  clothingType?: string; // Menambahkan clothingType
};

// Contoh data riwayat pesanan
const historicalOrders: Order[] = [
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
    customer: "Bambang",
    service: "Setrika Saja",
    status: "Completed",
    weight: 3,
    price: 15000,
    date: "2023-10-22",
    paymentMethod: "Debit",
    orderType: "Pickup",
    location: "Kantor Pusat",
    clothingType: undefined,
  },
  {
    id: "ORD008",
    customer: "Citra Dewi",
    service: "Cuci Setrika",
    status: "Completed",
    weight: 4,
    price: 25000,
    date: "2023-10-21",
    paymentMethod: "Tunai",
    orderType: "Delivery",
    location: undefined,
    clothingType: undefined,
  },
  {
    id: "ORD009",
    customer: "Eko Prasetyo",
    service: "Cuci Satuan",
    status: "Completed",
    weight: 0.8,
    price: 30000,
    date: "2023-10-20",
    paymentMethod: "QRIS",
    orderType: "Delivery",
    location: undefined,
    clothingType: "Jas Pria",
  },
];

const History = () => {
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
          <h1 className="text-2xl font-semibold">Riwayat Pesanan</h1>
          <div className="ml-auto flex items-center gap-2">
            <Button size="sm" variant="outline" className="h-8 gap-1" asChild>
              <Link to="/admin">
                <Settings className="h-3.5 w-3.5" />
                <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                  Admin
                </span>
              </Link>
            </Button>
          </div>
        </header>
        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
          <Card>
            <CardHeader className="px-7">
              <CardTitle>Daftar Riwayat Pesanan</CardTitle>
              <CardDescription>
                Semua pesanan laundry yang telah selesai atau diarsipkan.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID Pesanan</TableHead>
                    <TableHead>Pelanggan</TableHead>
                    <TableHead>Layanan</TableHead>
                    <TableHead>Jenis Pakaian</TableHead> {/* Kolom baru */}
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
                  {historicalOrders.map((order) => (
                    <TableRow key={order.id}>
                      <TableCell className="font-medium">{order.id}</TableCell>
                      <TableCell>{order.customer}</TableCell>
                      <TableCell>{order.service}</TableCell>
                      <TableCell>{order.clothingType || "-"}</TableCell> {/* Menampilkan jenis pakaian */}
                      <TableCell>
                        <Badge variant={getStatusVariant(order.status)}>
                          {order.status}
                        </Badge>
                      </TableCell>
                      <TableCell>{order.paymentMethod}</TableCell>
                      <TableCell>{order.orderType}</TableCell>
                      <TableCell>{order.location || "-"}</TableCell>
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

export default History;