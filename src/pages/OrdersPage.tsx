"use client";

import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
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
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

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

const OrdersPage = () => {
  const [orders, setOrders] = useState<Order[]>(initialOrders);
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
        <div className="max-w-4xl mx-auto w-full px-4 sm:px-6 py-4">
          <Button
            variant="outline"
            onClick={() => navigate(-1)}
            className="mb-4 flex items-center gap-2"
          >
            <ArrowLeft className="h-4 w-4" /> Kembali ke Dashboard
          </Button>

          <Card>
            <CardHeader className="px-7">
              <CardTitle>Daftar Pesanan</CardTitle>
              <CardDescription>
                Semua pesanan laundry yang tercatat.
              </CardDescription>
            </CardHeader>
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
                {orders.map((order) => (
                  <TableRow key={order.id}>
                    <TableCell className="font-medium">{order.id}</TableCell>
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
                    <TableCell className="text-right">{order.date}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default OrdersPage;