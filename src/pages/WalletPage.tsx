"use client";

import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronLeft, Wallet as WalletIcon } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";

const WalletPage: React.FC = () => {
  const navigate = useNavigate();

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
          <h1 className="text-2xl font-semibold flex items-center gap-2">
            <WalletIcon className="h-6 w-6 text-green-500" />
            Dompet Saya
          </h1>
        </header>
        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Saldo Dompet</CardTitle>
              <CardDescription>Informasi saldo dan transaksi dompet Anda.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-4xl font-bold text-green-600">
                Rp 150.000
              </div>
              <p className="text-muted-foreground">
                Saldo terakhir diperbarui: {new Date().toLocaleDateString("id-ID")}
              </p>
              <Button className="w-full">Isi Saldo</Button>
              <Button variant="outline" className="w-full">Lihat Riwayat Transaksi</Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Promo Tersedia</CardTitle>
              <CardDescription>Gunakan promo untuk menghemat biaya laundry Anda.</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside text-muted-foreground">
                <li>Diskon 10% untuk pembayaran via dompet digital.</li>
                <li>Cashback 5% setiap transaksi di atas Rp 50.000.</li>
              </ul>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
};

export default WalletPage;