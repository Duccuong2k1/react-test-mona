import { ProgressHorizontal } from "@/components/shared/common/Progress";
import { TimeDateInfo } from "@/components/shared/common/TimeInfo";
import { TitleRow } from "@/components/shared/common/TitleRow";
import Image from "next/image";
import React from "react";
import { BsDot } from "react-icons/bs";
import { BoxFlightName } from "./BoxFlightName";
import { convertToHoursMinute } from "@/lib/helpers/convert-time";
import { formatDate } from "@/lib/helpers/parser";
import { formatDateMonth } from "@/lib/helpers/formatDateMonth";

interface FlightDetailTabProps {
  detailFlight: any;
}

export function FlightDetailTab({ detailFlight }: FlightDetailTabProps) {
  return (
    <>
      {detailFlight?.RelatedFlights.map((plane: any, idx: number) => (
        <div
          className="py-4 flex md:flex-row flex-col justify-start gap-4 md:gap-24 "
          key={idx}
        >
          <div className="flex flex-row justify-between gap-5 w-1/4  ">
            <div className="flex flex-col justify-between gap-5">
              <TimeDateInfo
                time={formatDate(plane?.StartTime, "HH:mm")}
                date={formatDateMonth(plane?.StartTime)}
              />
              <div className="font-normal text-sm">
                {convertToHoursMinute(plane?.Duration)}
              </div>
              <TimeDateInfo
                time={formatDate(plane?.EndTime, "HH:mm")}
                date={formatDateMonth(plane?.EndTime)}
              />
            </div>
            <ProgressHorizontal />
            <div className="flex flex-col justify-between">
              <div>
                <div className="font-semibold text-sm text-black">
                  {plane?.StartPoint}
                </div>
                <div className="text-xs text-black font-normal">
                  {plane?.StartPoint} Airport
                </div>
              </div>
              <div>
                <div className="font-semibold text-sm text-black">
                  {plane?.EndPoint}
                </div>
                <div className="text-xs text-black font-normal">
                  {plane?.EndPoint} Intl
                </div>
              </div>
            </div>
          </div>
          <div>
            <BoxFlightName
              flightName={plane?.AirlineCode}
              flightNumber={plane?.FlightNumber}
              plane={plane?.Plane}
            />
            <div className="p-[15px] rounded-xl grid grid-cols-2 gap-3 bg-[#F4F2F9] mt-[10px]">
              <div>
                <TitleRow title="Baggage" detail={plane?.Freebag} />
                <TitleRow title="In-flight  " detail="Meal" />
                <TitleRow title="In-flight  " detail="Entertainment" />
              </div>
              <div>
                <TitleRow title="Aircraft " detail="Airbus A321" />
                <TitleRow title="Seat " detail={plane?.SeatClass} />
                <TitleRow title="Seat pitch " detail="29 inches (standard)" />
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
