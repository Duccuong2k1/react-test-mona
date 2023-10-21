import { ProgressHorizontal } from "@/components/shared/common/Progress";
import { TimeDateInfo } from "@/components/shared/common/TimeInfo";
import { TitleRow } from "@/components/shared/common/TitleRow";
import Image from "next/image";
import React from "react";
import { BsDot } from "react-icons/bs";
import { BoxFlightName } from "./BoxFlightName";

type Props = {};

export function FlightDetailTab({}: Props) {
  return (
    <div className="py-4 flex flex-row justify-start gap-24 ">
      <div className="flex flex-row justify-between gap-5   ">
        <div className="flex flex-col justify-between">
          <TimeDateInfo time="21:40" date="11 fri" />
          <div className="font-normal text-sm">1h 30m</div>
          <TimeDateInfo time="21:40" date="11 fri" />
        </div>
        <ProgressHorizontal />
        <div className="flex flex-col justify-between">
          <div>
            <div className="font-semibold text-sm text-black">
              Da nang (DAD)
            </div>
            <div className="text-xs text-black font-normal">
              Da Nang Airport
            </div>
          </div>
          <div>
            <div className="font-semibold text-sm text-black">
              Ho Chi Minh City (SGN)
            </div>
            <div className="text-xs text-black font-normal">
              Tansonnhat Intl
            </div>
          </div>
        </div>
      </div>
      <div>
        <BoxFlightName flight={{ name: "Bamboo Airways" }} />
        <div className="p-[15px] rounded-xl grid grid-cols-2 gap-3 bg-[#F4F2F9] mt-[10px]">
          <div>
            <TitleRow title="Baggage" detail="20kg" />
            <TitleRow title="In-flight  " detail="Meal" />
            <TitleRow title="In-flight  " detail="Entertainment" />
          </div>
          <div>
            <TitleRow title="Aircraft " detail="Airbus A321" />
            <TitleRow title="Seat " detail="layout 3-3" />
            <TitleRow title="Seat pitch " detail="29 inches (standard)" />
          </div>
        </div>
      </div>
    </div>
  );
}
