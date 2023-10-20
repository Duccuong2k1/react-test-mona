"use client";
import flightApi from "@/api/flinghtApi";
import { NavHeader } from "@/components/header/NavHeader";
import React, { useEffect } from "react";
import { HomeFilter } from "./HomeFilter";

type Props = {};

export const fetchJobs = async () => {
  try {
    const response = await flightApi.getFlights(
      `
        Flights(currentPage: ${1}, pageSize: ${6}) {
            items {
                CompareMode
                DayChange
                Carryon
                FareClass
                FareRule
            }
            pageSize
            total
        }
    `
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
export function HomeHeader({}: Props) {
  const bgHeader = {
    backgroundImage: `url("/img/banner.jpg")`,
  };
  //   useEffect(() => {
  //     const fetchData = async () => {
  //       try {
  //         const jobData = await fetchJobs();
  //         console.log("danh sach",jobData)
  //       } catch (err) {
  //         console.log(err);
  //       }
  //     };

  //     fetchData();
  //   }, []);
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
