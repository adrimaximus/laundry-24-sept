"use client";
import React from "react";
// import AccountInfoCard from "@/components/dashboard/AccountInfoCard"; // Menghapus import AccountInfoCard
import BranchSelector from "@/components/dashboard/BranchSelector";
import ActionButtonsGrid from "@/components/dashboard/ActionButtonsGrid";
import SalesOverviewCard from "@/components/dashboard/SalesOverviewCard";
import RecentOrdersCard from "@/components/dashboard/RecentOrdersCard";
import TopSellingProductsCard from "@/components/dashboard/TopSellingProductsCard";

const IndexPage = () => {
  const handleAddOrderClick = () => {
    // Logika untuk menambah pesanan
    console.log("Tambah Pesanan clicked!");
  };

  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {/* <AccountInfoCard /> */} {/* Menghapus AccountInfoCard dari JSX */}
        <BranchSelector />
        <SalesOverviewCard />
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <ActionButtonsGrid onAddOrderClick={handleAddOrderClick} />
        <RecentOrdersCard />
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <TopSellingProductsCard />
      </div>
    </div>
  );
};

export default IndexPage;