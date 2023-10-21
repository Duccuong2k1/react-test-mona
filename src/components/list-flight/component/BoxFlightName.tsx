import Image from "next/image";
import React from "react";
import { BsDot } from "react-icons/bs";

interface BoxFlightNameProps {
  flight: any;
}

export function BoxFlightName({ flight }: BoxFlightNameProps) {
  return (
    <div className="flex flex-row items-center justify-start gap-2">
      <Image
        src={flight?.img || "/img/icon-flight.png"}
        alt=""
        width={30}
        height={30}
        className="object-cover"
        loading="lazy"
      />
      <div>
        <div className="font-semibold text-sm uppercase">{flight?.name}</div>
        <div className="font-light text-xs  flex flex-row items-center justify-start gap-1">
          <span>QH-183</span>
          <i className="text-xl">
            <BsDot />
          </i>{" "}
          <span>Economy</span>
        </div>
      </div>
    </div>
  );
}
