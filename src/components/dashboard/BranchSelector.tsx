"use client";
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MapPin } from "lucide-react";

const BranchSelector = () => {
  return (
    <Card className="bg-white shadow-md rounded-xl"> {/* Menghapus border border-black */}
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <div className="flex items-center gap-2">
          <MapPin className="h-4 w-4 text-muted-foreground" />
          <CardTitle className="text-sm font-medium">Pilih Cabang</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <Select defaultValue="pusat">
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Pilih Cabang" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="pusat">Cabang Pusat</SelectItem>
            <SelectItem value="cabang-a">Cabang A</SelectItem>
            <SelectItem value="cabang-b">Cabang B</SelectItem>
          </SelectContent>
        </Select>
      </CardContent>
    </Card>
  );
};

export default BranchSelector;