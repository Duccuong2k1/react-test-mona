import { FlightList } from "@/components/list-flight/FlightList";
import { InfoFlightFilter } from "@/components/list-flight/InfoFlightFilter";
import { YourFlights } from "@/components/list-flight/YourFlights";

import React from "react";

type Props = {};

export default function ListFlightPage({}: Props) {
  return (
    <div className="">
      <InfoFlightFilter />
      <div className="container grid grid-cols-4 gap-[10px] py-4">
        <div className="col-span-3">
          <FlightList />
        </div>
        <div className="col-span-1">
          <YourFlights />
        </div>
      </div>
    </div>
  );
}
