"use client";

import { NavHeader } from "@/components/header/NavHeader";
import React from "react";
import { HomeFilter } from "./HomeFilter";

type Props = {};

export function HomeHeader({}: Props) {
  const bgHeader = {
    backgroundImage: `url("/img/banner.jpg")`,
  };

  return (
    <div
      className="bg-cover bg-no-repeat  min-h-[900px] py-4 relative"
      style={bgHeader}
    >
      <NavHeader />
      <div className="flex flex-col justify-center container text-4xl lg:text-7xl lg:pt-[200px]">
        <span className="font-light">Hello!</span>
        <span className="font-light">where are</span>
        <span className="font-light">
          you <span className="text-primary font-semibold">Flying</span> to ...
        </span>
      </div>
     <HomeFilter/>
    </div>
  );
}
