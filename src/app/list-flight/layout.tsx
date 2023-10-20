import { NavHeader } from "@/components/header/NavHeader";
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
      <div className="min-h-screen">{children}</div>
    </>
  );
}
