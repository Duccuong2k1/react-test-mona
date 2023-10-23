"use client";
import { ProgressVertical } from "@/components/shared/common/Progress";
import { TimeInfo } from "@/components/shared/common/TimeInfo";
import { Button } from "@/components/shared/utilis/forms/Button";
import { convertToHoursMinute } from "@/lib/helpers/convert-time";
import { formatDate, parseNumber } from "@/lib/helpers/parser";
import { useFlightContext } from "@/lib/providers/flight-provider";
import Image from "next/image";
import { useState } from "react";
import { TABS } from "../FlightList";
import { FlightDetailTab } from "./FlightDetailTab";
import { FareInfoTab } from "./FareInfoTab";
import { toast } from "react-toastify";
import { Flight } from "@/lib/types/Flight";

export function FlightItem({ flight }: { flight: Flight }) {
  const { setFlightSelected } = useFlightContext();

  return (
    <div className="rounded-xl bg-white p-[15px]">
      <div className="flex flex-row flex-wrap items-center justify-around gap-5 md:justify-between">
        <div className="flex flex-row items-center gap-3">
          <Image
            src={"/img/icon-flight.png"}
            alt="image flight"
            width={30}
            height={30}
            loading="lazy"
          />
          <div className="font-semibold uppercase text-sm">
            {flight?.AirlineCode}
          </div>
        </div>
        <TimeInfo
          time={formatDate(flight?.StartDate as string, "HH:mm")}
          content="DAS"
        />

        <div className="flex flex-col items-center text-center gap-1">
          <div className="text-sm font-light text-black">
            {convertToHoursMinute(flight?.Duration as number)}
          </div>
          <ProgressVertical />
          <div className="text-sm font-light text-black">Direct</div>
        </div>
        <TimeInfo
          time={formatDate(flight?.EndDate as string, "HH:mm")}
          content="DAS"
        />
        <div>
          <div className="flex flex-row items-center gap-2 justify-start">
            <Image
              src={"/img/icon-bag.png"}
              width={14}
              height={14}
              alt="icon "
            />{" "}
            Baggage{" "}
            <span className="text-primary font-semibold">
              {" "}
              {flight?.Carryon}
            </span>
          </div>
          <div className="flex flex-row items-center gap-2 justify-start">
            <Image
              src={"/img/icon-cutlery.png"}
              width={14}
              height={14}
              alt="icon "
            />{" "}
            In-flight <span className="text-primary font-semibold">Meal</span>
          </div>
        </div>
        <div>
          <del className="text-black text-opacity-50">
            {parseNumber(flight?.PriceAdult)}
          </del>
          <div className="font-semibold text-accent">
            {parseNumber(flight?.PriceAdult)}
          </div>
        </div>
        <Button
          text="Choose"
          className={
            "!text-accent bg-[#feefeb] font-semibold hover:bg-[#ffcfc2]"
          }
          onClick={() => {
            setFlightSelected?.(flight);
            toast.success("Chọn chuyến bay thành công!");
          }}
        />
      </div>
      <DetailTabs flight={flight} />
    </div>
  );
}

function DetailTabs({ flight }: { flight: Flight }) {
  const [tabs, setTabs] = useState(TABS);
  const [tabActive, setTabActive] = useState<string>("");
  return (
    <div className="pt-4">
      <div className="flex flex-row items-center justify-start gap-7">
        {tabs.map((tab, idx) => (
          <div
            className={`${
              tab.value === tabActive
                ? "text-primary border-b border-primary"
                : "text-black text-opacity-40"
            } uppercase text-xs font-semibold  cursor-pointer py-1`}
            key={tab.value}
            onClick={() => {
              setTabActive(tab.value);
            }}
          >
            {tab.label}
          </div>
        ))}
        <div className="flex-1 h-[1px] bg-gray-200 w-full"></div>
      </div>
      <>
        {tabActive === "DETAIL" ? (
          <FlightDetailTab detailFlight={flight} />
        ) : tabActive === "FARE" ? (
          <FareInfoTab fareFlight={flight} />
        ) : (
          <></>
        )}
      </>
    </div>
  );
}
