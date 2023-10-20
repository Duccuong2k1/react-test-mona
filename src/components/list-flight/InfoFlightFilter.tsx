import React from "react";
import { Button } from "../shared/utilis/forms/Button";
import { BiSearch } from "react-icons/bi";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
type Props = {};

export function InfoFlightFilter({}: Props) {
  return (
    <section className=" bg-white">
      <div className="flex flex-row items-center justify-between py-[19px] container">
        <div className="flex flex-row  items-center justify-between gap-5">
          <InfoPlaceItem title=" Da Nang (DAD)" date=" Fri, 22 Mar, 2022" />

          <i className="text-gray-300 text-xl">
            <FaArrowRightArrowLeft />
          </i>
          <InfoPlaceItem title=" Ho Chi Minh (SGN)" date=" Fri, 22 Mar, 2022" />
        </div>
        <div className="flex flex-row  items-center justify-between gap-3">
          <div className="text-sm font-semibold">Round-trip</div>
          <span className="h-5 w-[1px] bg-gray-300"></span>
          <div className="flex flex-row items-center justify-around text-sm font-semibold">
            <span className="text-primary">02 </span>Adult,{" "}
            <span className="text-primary">01</span> children
          </div>
          <span className="h-5 w-[1px] bg-gray-300"></span>

          <div className="text-sm font-semibold">Business Class</div>
        </div>
        <Button
          text="Change Flight"
          icon={<BiSearch />}
          iconPosition="end"
          className={"bg-accent text-white"}
        />
      </div>
    </section>
  );
}

function InfoPlaceItem({ title, date }: { title: string; date: string }) {
  return (
    <div>
      <div className="font-semibold text-base text-primary">{title}</div>
      <div className="text-xs text-black font-normal">{date}</div>
    </div>
  );
}
