import Image from "next/image";
import React from "react";
import { BsDot } from "react-icons/bs";

interface BoxFlightNameProps {
  flightName: string;
  flightNumber:string;
  plane:string
}


export function BoxFlightName({ flightName,flightNumber,plane }: BoxFlightNameProps) {
  return (
    <div className="flex flex-row items-center justify-start gap-2">
      <Image
        src={"/img/icon-flight.png"}
        alt=""
        width={30}
        height={30}
        className="object-cover"
        loading="lazy"
      />
      <div>
        <div className="font-semibold text-sm uppercase">{flightName}</div>
        <div className="font-light text-xs  flex flex-row items-center justify-start gap-1">
          <span>{flightNumber}</span>
          <i className="text-xl">
            <BsDot />
          </i>{" "}
          <span>{plane}</span>
        </div>
      </div>
    </div>
  );
}
