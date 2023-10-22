"use client"
import React from "react";
import { Filter } from "./Filter";
import { Button } from "../shared/utilis/forms/Button";
import { useFlightContext } from "@/lib/providers/flight-provider";
import { FlightItemSkeleton } from "./component/FlightItemSkeleton";
import { FlightItem } from "./component/FlightItem";

type Props = {};

export function FlightList({}: Props) {
  const { flights, loadMore } = useFlightContext();

  return (
    <section>
      <Filter />
      {flights === null || flights === undefined ? (
        <div className="flex flex-col gap-[10px] mt-1">
          {[1, 2, 3, 4].map((item, idx) => (
            <FlightItemSkeleton key={idx} />
          ))}
        </div>
      ) : flights.length === 0 ? (
        <div className="text-center text-xl text-black font-semibold">
          Không có chuyến bay nào!
        </div>
      ) : (
        <div className="flex flex-col gap-[10px] mt-1">
          <>
            {flights?.map((item: any, idx: number) => (
              <FlightItem key={idx} flight={item} />
            ))}
            <Button
              text="Xem thêm"
              className={"justify-center !text-accent hover:underline"}
              onClick={loadMore}
            />
          </>
        </div>
      )}
    </section>
  );
}

export const TABS: {
  label: string;
  value: string;
}[] = [
  {
    label: "Flight detail",
    value: "DETAIL",
  },
  {
    label: "fare info",
    value: "FARE",
  },
];
