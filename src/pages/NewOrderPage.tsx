"use client";

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon, ChevronLeft } from "lucide-react";
import { format } from "date-fns";

const NewOrderPage: React.FC = () => {
  const navigate = useNavigate();
  const [customerName, setCustomerName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [pickupDate, setPickupDate] = useState<Date | undefined>(undefined);
  const [notes, setNotes] = useState("");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For now just log the values; integrate with your backend later
    console.log({ customerName, phone, service, pickupDate, notes });
    // Navigate to orders list or show a toast here
    navigate("/orders");
  };

  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
          <Button variant="outline" size="icon" className="h-8 w-8" onClick={() => navigate(-1)}>
            <ChevronLeft className="h-4 w-4" />
            <span className="sr-only">Kembali</span>
          </Button>
          <h1 className="text-2xl font-semibold">Buat Pesanan Baru</h1>
        </header>

        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
          <Card className="max-w-2xl mx-auto w-full">
            <CardHeader>
              <CardTitle>Detail Pesanan</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-6" onSubmit={onSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="customerName">Nama Pelanggan</Label>
                    <Input
                      id="customerName"
                      placeholder="Masukkan nama pelanggan"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">No. Telepon</Label>
                    <Input
                      id="phone"
                      placeholder="08xxxxxxxxxx"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Jenis Layanan</Label>
                    <Select value={service} onValueChange={setService}>
                      <SelectTrigger>
                        <SelectValue placeholder="Pilih layanan" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="cuci-kering">Cuci + Kering</SelectItem>
                        <SelectItem value="cuci-setrika">Cuci + Setrika</SelectItem>
                        <SelectItem value="setrika">Setrika Saja</SelectItem>
                        <SelectItem value="dry-clean">Dry Clean</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Tanggal Penjemputan</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          type="button"
                          variant="outline"
                          className="w-full justify-start text-left font-normal"
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {pickupDate ? format(pickupDate, "PPP") : <span>Pilih tanggal</span>}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={pickupDate}
                          onSelect={setPickupDate}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="notes">Catatan</Label>
                  <Textarea id="notes" placeholder="Catatan tambahan" value={notes} onChange={(e) => setNotes(e.target.value)} />
                </div>

                <div className="flex justify-end gap-2">
                  <Button type="button" variant="outline" onClick={() => navigate(-1)}>
                    Batal
                  </Button>
                  <Button type="submit" className="bg-yellow-500 hover:bg-yellow-600 text-white">
                    Simpan Pesanan
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
};

export default NewOrderPage;
