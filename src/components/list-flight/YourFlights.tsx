"use client";
import React, { useEffect, useState } from "react";
import { TimeInfo } from "../shared/common/TimeInfo";
import { ProgressVertical } from "../shared/common/Progress";
import Image from "next/image";
import { Button } from "../shared/utilis/forms/Button";
import { YourFlightSkeleton } from "./component/YourFlightSkeleton";
import { useFlightContext } from "@/lib/providers/flight-provider";
import { FaPersonWalkingLuggage } from "react-icons/fa6";
import { convertToHoursMinute } from "@/lib/helpers/convert-time";
import { formatDate, parseNumber } from "@/lib/helpers/parser";
import { formatFullDate } from "@/lib/helpers/formatDateMonth";

type Props = {};

export function YourFlights({}: Props) {
  const { flightSelected } = useFlightContext();
  const [isFlightActive, setIsFlightActive] = useState(false);

  useEffect(() => {
    if (flightSelected) {
      setIsFlightActive(true);
      const downTime = setTimeout(() => {
        setIsFlightActive(false);
      }, 200);
      return () => {
        clearTimeout(downTime);
      };
    }
 
  }, [flightSelected]);
  

  return (
    <div className="bg-white rounded-xl">
      <div className="p-[15px] uppercase text-sm font-semibold">
        your flights
      </div>
      <hr className="w-full bg-gray-300" />
      {isFlightActive ? (
        <YourFlightSkeleton />
      ) : !flightSelected  ? (
      <div className=" p-[15px] text-black font-semibold flex flex-col items-center gap-2 text-center ">
        <i className="text-2xl"><FaPersonWalkingLuggage/></i> 
        <span>Chưa có chuyến bay nào được chọn!</span>
      </div>
      ) :  (
        <>
          <div className="p-[15px]">
            <div className="flex flex-row items-center justify-start gap-3">
              <span className="py-2 px-3 rounded-full bg-gray-400 text-white">
                01
              </span>
              <div>
                <div className="text-sm text-black font-normal">
                  {formatFullDate(flightSelected?.StartDate)}
           
                </div>
                <div className="text-sm text-black font-semibold ">
                 {flightSelected?.StartPoint} - {flightSelected?.EndPoint}
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center justify-start gap-2 my-4">
              <Image
                src={"/img/icon-flight.png"}
                alt=""
                width={30}
                height={30}
                className="object-cover"
                loading="lazy"
              />
              <div>
                <div className="font-semibold text-sm uppercase">
                {flightSelected?.AirlineCode}
                </div>
                <div className="font-semibold  text-xs underline text-primary ">
                  Detail
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center justify-between">
              <TimeInfo time={formatDate(flightSelected?.StartDate, "HH:mm")} content="DAS" />

              <div className="flex flex-col items-center text-center gap-1">
                <div className="text-sm font-light uppercase text-black">
                {convertToHoursMinute(flightSelected?.Duration)}
                </div>
                <ProgressVertical />
                <div className="text-xs font-light text-black">
                  Direct
                </div>
              </div>
              <TimeInfo time={formatDate(flightSelected?.EndDate, "HH:mm")} content="DAS" />
            </div>
            <Button
              text="Change departure flight"
              className={
                " font-semibold !text-primary bg-[#edecff] justify-center w-full my-4"
              }
            />
          </div>
          <div className="bg-[#F8F8F8] rounded-b-xl br-xl p-[15px]">
            <div className="font-normal text-sm text-black">Subtotal</div>
            <div className="font-semibold text-sm text-accent">
              {parseNumber(flightSelected?.PriceAdult)}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
