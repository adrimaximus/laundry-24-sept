"use client";
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ClipboardList, DollarSign, Package, Ruler } from "lucide-react";

type DailySummaryCardProps = {
  totalRevenue: number;
  totalOrders: number;
  totalWeight: number;
  totalPcs: number;
  totalMeters: number;
};

const DailySummaryCard: React.FC<DailySummaryCardProps> = ({
  totalRevenue,
  totalOrders,
  totalWeight,
  totalPcs,
  totalMeters,
}) => {
  return (
    <Card className="bg-yellow-400 text-black shadow-md border border-black rounded-xl"> {/* Menambahkan rounded-xl */}
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <div className="flex items-center gap-2">
          <ClipboardList className="h-4 w-4" />
          <CardTitle className="text-sm font-medium">Ringkasan Harian</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center gap-2">
            <DollarSign className="h-4 w-4 text-muted-foreground" />
            <div className="text-2xl font-bold">Rp {totalRevenue.toLocaleString("id-ID")}</div>
          </div>
          <div className="flex items-center gap-2">
            <ClipboardList className="h-4 w-4 text-muted-foreground" />
            <div className="text-2xl font-bold">{totalOrders} Pesanan</div>
          </div>
          <div className="flex items-center gap-2">
            <Package className="h-4 w-4 text-muted-foreground" />
            <div className="text-2xl font-bold">{totalWeight} Kg</div>
          </div>
          <div className="flex items-center gap-2">
            <Package className="h-4 w-4 text-muted-foreground" />
            <div className="text-2xl font-bold">{totalPcs} Pcs</div>
          </div>
          {/* <div className="flex items-center gap-2">
            <Ruler className="h-4 w-4 text-muted-foreground" />
            <div className="text-2xl font-bold">{totalMeters} Meter</div>
          </div> */}
        </div>
      </CardContent>
    </Card>
  );
};

export default DailySummaryCard;