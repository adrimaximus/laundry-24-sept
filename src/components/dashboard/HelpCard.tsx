"use client";
import React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LifeBuoy } from "lucide-react";

const HelpCard = () => {
  return (
    <Card className="bg-white shadow-md border border-black rounded-xl">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <div className="flex items-center gap-2">
          <LifeBuoy className="h-4 w-4 text-muted-foreground" />
          <CardTitle className="text-sm font-medium">Butuh Bantuan?</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription className="mb-4">
          Hubungi tim dukungan kami jika Anda memiliki pertanyaan atau masalah.
        </CardDescription>
        <Button className="w-full">Hubungi Dukungan</Button>
      </CardContent>
    </Card>
  );
};

export default HelpCard;