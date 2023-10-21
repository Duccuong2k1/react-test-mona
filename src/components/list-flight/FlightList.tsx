"use client";
import React, { useState } from "react";
import { Filter } from "./Filter";
import Image from "next/image";
import { ProgressVertical } from "../shared/common/Progress";
import { TimeInfo } from "../shared/common/TimeInfo";
import { Button } from "../shared/utilis/forms/Button";
import { Tab, Tabs } from "@nextui-org/react";
import { FlightDetailTab } from "./component/FlightDetailTab";
import { FareInfoTab } from "./component/FareInfoTab";

type Props = {};

export function FlightList({}: Props) {
  return (
    <section>
      <Filter />
      <div className="flex flex-col gap-[10px] mt-1">
        {[1, 2, 3, 4].map((item, idx) => (
          <FlightItem key={idx} />
        ))}
      </div>
    </section>
  );
}

function FlightItem() {
  return (
    <div className="rounded-xl bg-white p-[15px]">
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-row items-center gap-3">
          <Image
            src={"/img/icon-flight.png"}
            alt="image flight"
            width={30}
            height={30}
            loading="lazy"
          />
          <div className="font-semibold uppercase text-sm">Bamboo Airways</div>
        </div>
        <TimeInfo time={"  21:40"} content="DAS" />

        <div className="flex flex-col items-center text-center gap-1">
          <div className="text-sm font-light uppercase text-black">1h 30m</div>
          <ProgressVertical />
          <div className="text-sm font-light uppercase text-black">Direct</div>
        </div>
        <TimeInfo time={"23:40"} content="DAS" />
        <div>
          <div className="flex flex-row items-center gap-2 justify-start">
            <Image
              src={"/img/icon-bag.png"}
              width={14}
              height={14}
              alt="icon "
            />{" "}
            Baggage <span className="text-primary font-semibold"> 20kg</span>
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
          <del className="text-black text-opacity-50">123,45,000 vnd</del>
          <div className="font-semibold text-accent">123,000,00 vnd</div>
        </div>
        <Button
          text="Choose"
          className={"text-accent bg-[#feefeb] font-semibold"}
        />
      </div>
      <DetailTabs />
    </div>
  );
}

function DetailTabs() {
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
          <FlightDetailTab />
        ) : tabActive === "FARE" ? (
          <FareInfoTab />
        ) : (
          <></>
        )}
      </>
    </div>
  );
}

const TABS: {
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
