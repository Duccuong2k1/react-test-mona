import React from "react";
import { BoxFlightName } from "./BoxFlightName";
import { ProgressVertical } from "@/components/shared/common/Progress";
import { TitlePriceRow } from "./TitlePriceRow";

type Props = {};

export function FareInfoTab({}: Props) {
  return (
    <div className="flex flex-row justify-start py-4 gap-28">
      <div>
        <div className="text-sm uppercase font-semibold mb-[15px]">
          Conditions
        </div>
        <BoxFlightName flight={{ name: "Bamboo Airways" }} />
        <div className="flex flex-row items-center justify-start gap-3 mt-[10px]">
          <div>
            <div className="text-sm font-normal text-black">Da Nang</div>
            <div className="text-xs font-normal text-primary">Economy</div>
          </div>
          <ProgressVertical />
          <div className="text-sm font-normal text-black">Ho Chi Minh City</div>
        </div>
        <div className="text-xs font-normal text-black mt-[15px]">
          Non - Refundable
        </div>
      </div>
      <div className="lg:w-2/5 w-full">
        <div className="text-sm uppercase font-semibold mb-[15px]">
          price details
        </div>

        <TitlePriceRow
          label="Adult Basic Fare (x1)"
          classValue="font-semibold"
          value={" 1,326,000 vnd"}
        />
        <TitlePriceRow label="Tax" value={"included"} />
        <TitlePriceRow label="Regular Total Price" value={"1,326,000 vnd"} />
        <TitlePriceRow
          label="Save"
          classLabel="text-accent"
          value={"-4,000 vnd"}
        />
        <hr className="w-full py-1" />
        <TitlePriceRow
          label="You pay"
          value={"1,322,000 vnd"}
          classValue="font-semibold text-accent"
        />
      </div>
    </div>
  );
}
