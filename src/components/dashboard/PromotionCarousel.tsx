"use client";

import React from "react";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Tag } from "lucide-react";

type Promotion = {
  id: string;
  title: string;
  description: string;
  bgColor: string;
  textColor: string;
};

const promotions: Promotion[] = [
  {
    id: "promo1",
    title: "Diskon 15% untuk Pelanggan Baru!",
    description: "Dapatkan potongan harga spesial untuk pesanan pertama Anda.",
    bgColor: "bg-blue-500",
    textColor: "text-white",
  },
  {
    id: "promo2",
    title: "Gratis Antar-Jemput!",
    description: "Untuk pesanan di atas 5kg, nikmati layanan antar-jemput gratis.",
    bgColor: "bg-green-500",
    textColor: "text-white",
  },
  {
    id: "promo3",
    title: "Cashback 10% dengan Pembayaran QRIS",
    description: "Bayar pakai QRIS dan dapatkan cashback langsung!",
    bgColor: "bg-purple-500",
    textColor: "text-white",
  },
  {
    id: "promo4",
    title: "Promo Cuci Satuan: Beli 2 Gratis 1!",
    description: "Cuci 2 pakaian satuan, gratis 1 pakaian satuan lainnya.",
    bgColor: "bg-red-500",
    textColor: "text-white",
  },
];

const PromotionCarousel: React.FC = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false })
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {promotions.map((promo) => (
          <CarouselItem key={promo.id}>
            <div className="p-1">
              <Card className={`${promo.bgColor} ${promo.textColor} shadow-md rounded-xl`}>
                <CardContent className="flex flex-col items-start justify-center p-4 h-32">
                  <div className="flex items-center gap-2 mb-2">
                    <Tag className="h-5 w-5" />
                    <h3 className="text-lg font-semibold">{promo.title}</h3>
                  </div>
                  <p className="text-sm">{promo.description}</p>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default PromotionCarousel;