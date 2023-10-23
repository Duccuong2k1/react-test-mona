import React from "react";
import { BoxFlightName } from "./BoxFlightName";
import { ProgressVertical } from "@/components/shared/common/Progress";
import { TitlePriceRow } from "./TitlePriceRow";
import { parseNumber } from "@/lib/helpers/parser";

interface FareInfoTabProps {
  fareFlight: {
    AirlineCode?:string;
    FlightNumber?:string;
    Plane?:string;
    StartPoint?:string;
    FareClass?:string;
    EndPoint?:string;
    NoRefund?:boolean;
    PriceAdult?:number;
    TaxAdult?:number;
    ChargeAdult?:number;
    Promo?:boolean;
  };
}

export function FareInfoTab({ fareFlight }: FareInfoTabProps) {
  return (
    <div className="flex md:flex-row flex-col justify-start py-4 gap-5 md:gap-28">
      <div>
        <div className="text-sm uppercase font-semibold mb-[15px]">
          Conditions
        </div>
        <BoxFlightName
          flightName={fareFlight?.AirlineCode}
          flightNumber={fareFlight?.FlightNumber}
          plane={fareFlight?.Plane}
        />
        <div className="flex flex-row items-center justify-start gap-3 mt-[10px]">
          <div>
            <div className="text-sm font-normal text-black">
              {" "}
              {fareFlight?.StartPoint}
            </div>
            <div className="text-xs font-normal text-primary">
              {" "}
              {fareFlight?.FareClass}
            </div>
          </div>
          <ProgressVertical />
          <div className="text-sm font-normal text-black">
            {" "}
            {fareFlight?.EndPoint}
          </div>
        </div>
        <div className="text-xs font-normal text-black mt-[15px]">
          {fareFlight?.NoRefund ? "Non - Refundable" : "Refundable"}
        </div>
      </div>
      <div className="lg:w-2/5 w-full">
        <div className="text-sm uppercase font-semibold mb-[15px]">
          price details
        </div>

        <TitlePriceRow
          label="Adult Basic Fare (x1)"
          classValue="font-semibold"
          value={parseNumber(fareFlight?.PriceAdult)}
        />
        <TitlePriceRow label="Tax" value={parseNumber(fareFlight?.TaxAdult)} />
        <TitlePriceRow label="Regular Total Price" value={parseNumber(fareFlight?.ChargeAdult)} />
        <TitlePriceRow
          label="Save"
          classLabel="!text-accent"
          value={fareFlight?.Promo ? "-4,000 vnd" : "0 vnd"}
        />
        <hr className="w-full py-1" />
        <TitlePriceRow
          label="You pay"
          value={parseNumber(fareFlight?.PriceAdult)}
          classValue="font-semibold !text-accent"
        />
      </div>
    </div>
  );
}
