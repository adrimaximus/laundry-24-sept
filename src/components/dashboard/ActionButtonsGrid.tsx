"use client";

import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Plus, History, Settings, BarChart } from "lucide-react";

interface ActionButtonsGridProps {
  onAddOrderClick: () => void;
}

const ActionButtonsGrid: React.FC<ActionButtonsGridProps> = ({ onAddOrderClick }) => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <Button asChild className="w-full h-24 flex flex-col items-center justify-center text-lg font-semibold bg-yellow-500 text-white hover:bg-yellow-600">
        <Link to="/orders/new" onClick={onAddOrderClick}>
          <Plus className="h-6 w-6 mb-1" />
          Tambah Pesanan
        </Link>
      </Button>
      <Button asChild className="w-full h-24 flex flex-col items-center justify-center text-lg font-semibold bg-white border border-gray-300 text-gray-800 hover:bg-gray-50">
        <Link to="/history">
          <History className="h-6 w-6 mb-1" />
          Riwayat Pesanan
        </Link>
      </Button>
      <Button asChild className="w-full h-24 flex flex-col items-center justify-center text-lg font-semibold bg-green-500 text-white hover:bg-green-600">
        <Link to="/reports">
          <BarChart className="h-6 w-6 mb-1" />
          Laporan
        </Link>
      </Button>
      <Button asChild className="w-full h-24 flex flex-col items-center justify-center text-lg font-semibold bg-white border border-gray-300 text-gray-800 hover:bg-gray-50">
        <Link to="/settings">
          <Settings className="h-6 w-6 mb-1" />
          Pengaturan
        </Link>
      </Button>
    </div>
  );
};

export default ActionButtonsGrid;