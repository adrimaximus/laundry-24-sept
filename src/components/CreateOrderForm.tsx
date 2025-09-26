"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";

const formSchema = z.object({
  customerName: z.string().min(2, {
    message: "Nama pelanggan harus minimal 2 karakter.",
  }),
  serviceType: z.enum(["Cuci Kering", "Cuci Setrika", "Setrika Saja", "Cuci Satuan"], { // Menambahkan 'Cuci Satuan'
    required_error: "Pilih jenis layanan.",
  }),
  weight: z.coerce.number().min(0.1, {
    message: "Berat harus lebih dari 0 kg.",
  }),
  price: z.coerce.number().min(1000, {
    message: "Harga harus minimal Rp 1.000.",
  }),
  orderType: z.enum(["Pickup", "Delivery"], {
    required_error: "Pilih jenis pesanan.",
  }),
  location: z.string().optional(),
  clothingType: z.string().optional(), // Menambahkan bidang jenis pakaian
}).superRefine((data, ctx) => {
  if (data.orderType === "Pickup" && (!data.location || data.location.trim() === "")) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: "Lokasi penjemputan wajib diisi untuk pesanan Pickup.",
      path: ["location"],
    });
  }
  // Validasi kondisional: jika serviceType adalah "Cuci Satuan", maka clothingType wajib diisi
  if (data.serviceType === "Cuci Satuan" && (!data.clothingType || data.clothingType.trim() === "")) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: "Jenis pakaian wajib diisi untuk layanan Cuci Satuan.",
      path: ["clothingType"],
    });
  }
});

type CreateOrderFormProps = {
  onOrderCreated: (newOrder: {
    id: string;
    customer: string;
    service: string;
    status: string;
    weight: number;
    price: number;
    date: string;
    orderType: "Pickup" | "Delivery";
    location?: string;
    clothingType?: string; // Menambahkan clothingType sebagai opsional
  }) => void;
  onClose: () => void;
};

const CreateOrderForm: React.FC<CreateOrderFormProps> = ({
  onOrderCreated,
  onClose,
}) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      customerName: "",
      serviceType: "Cuci Kering",
      weight: 0,
      price: 0,
      orderType: "Pickup",
      location: "",
      clothingType: "", // Default value for new field
    },
  });

  const orderType = form.watch("orderType");
  const serviceType = form.watch("serviceType"); // Memantau perubahan pada serviceType

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    const newOrder = {
      id: `ORD${Math.floor(Math.random() * 10000)
        .toString()
        .padStart(3, "0")}`,
      customer: values.customerName,
      service: values.serviceType,
      status: "Pending",
      weight: values.weight,
      price: values.price,
      date: new Date().toISOString().split("T")[0],
      orderType: values.orderType,
      location: values.orderType === "Pickup" ? values.location : undefined,
      clothingType: values.serviceType === "Cuci Satuan" ? values.clothingType : undefined, // Hanya sertakan jenis pakaian jika Cuci Satuan
    };
    onOrderCreated(newOrder);
    toast.success("Pesanan baru berhasil ditambahkan!");
    onClose();
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="customerName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nama Pelanggan</FormLabel>
              <FormControl>
                <Input placeholder="Masukkan nama pelanggan" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="serviceType"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Jenis Layanan</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Pilih jenis layanan" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="Cuci Kering">Cuci Kering</SelectItem>
                  <SelectItem value="Cuci Setrika">Cuci Setrika</SelectItem>
                  <SelectItem value="Setrika Saja">Setrika Saja</SelectItem>
                  <SelectItem value="Cuci Satuan">Cuci Satuan</SelectItem> {/* Opsi baru */}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        {serviceType === "Cuci Satuan" && ( // Bidang kondisional untuk jenis pakaian
          <FormField
            control={form.control}
            name="clothingType"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Jenis Pakaian</FormLabel>
                <FormControl>
                  <Input placeholder="Contoh: Gaun Pesta, Jas, Selimut" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        )}
        <FormField
          control={form.control}
          name="weight"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Berat (kg)</FormLabel>
              <FormControl>
                <Input type="number" step="0.1" placeholder="0.0" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="price"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Harga (Rp)</FormLabel>
              <FormControl>
                <Input type="number" placeholder="0" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="orderType"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Jenis Pesanan</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Pilih jenis pesanan" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="Pickup">Pickup</SelectItem>
                  <SelectItem value="Delivery">Delivery</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        {orderType === "Pickup" && (
          <FormField
            control={form.control}
            name="location"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Lokasi Penjemputan</FormLabel>
                <FormControl>
                  <Input placeholder="Masukkan lokasi penjemputan" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        )}
        <Button type="submit" className="w-full">
          Tambah Pesanan
        </Button>
      </form>
    </Form>
  );
};

export default CreateOrderForm;