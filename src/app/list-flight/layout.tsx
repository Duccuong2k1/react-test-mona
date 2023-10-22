import { NavHeader } from "@/components/header/NavHeader";
import { FlightProvider } from "@/lib/providers/flight-provider";
import React from "react";

type Props = {};

export default function FlightLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="bg-primary">
        <NavHeader />
      </div>
      <FlightProvider>

      <div className="min-h-screen">{children}</div>
      </FlightProvider>
    </>
  );
}
