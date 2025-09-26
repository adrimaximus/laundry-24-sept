"use client";

import React from "react";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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

type OrderTableProps = {
  orders: Order[];
  onUpdateOrderStatus: (orderId: string, newStatus: Order["status"]) => void;
};

const OrderTable: React.FC<OrderTableProps> = ({
  orders,
  onUpdateOrderStatus,
}) => {
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
          <TableHead className="text-right">Aksi</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {orders.map((order) => (
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
            <TableCell className="text-right">{order.weight}</TableCell>
            <TableCell className="text-right">
              Rp{order.price.toLocaleString("id-ID")}
            </TableCell>
            <TableCell className="text-right">{order.date}</TableCell>
            <TableCell className="text-right">
              <Select
                value={order.status}
                onValueChange={(newStatus: Order["status"]) =>
                  onUpdateOrderStatus(order.id, newStatus)
                }
              >
                <SelectTrigger className="w-[140px]">
                  <SelectValue placeholder="Ubah Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Pending">Pending</SelectItem>
                  <SelectItem value="In Progress">In Progress</SelectItem>
                  <SelectItem value="Completed">Completed</SelectItem>
                </SelectContent>
              </Select>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default OrderTable;