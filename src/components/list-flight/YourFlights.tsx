import React from "react";
import { TimeInfo } from "../shared/common/TimeInfo";
import { ProgressVertical } from "../shared/common/Progress";
import Image from "next/image";
import { Button } from "../shared/utilis/forms/Button";

type Props = {};

export function YourFlights({}: Props) {
  return (
    <div className="bg-white rounded-xl">
      <div className="p-[15px] uppercase text-sm font-semibold">
        your flights
      </div>
      <hr className="w-full bg-gray-300" />
      <div className="p-[15px]">
        <div className="flex flex-row items-center justify-start gap-3">
          <span className="py-2 px-3 rounded-full bg-gray-400 text-white">
            01
          </span>
          <div>
            <div className="text-sm text-black font-normal">
              Fri, 11 Feb, 2022
            </div>
            <div className="text-sm text-black font-semibold ">
              Da Nang - Ho Chi Minh
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
              Bamboo Airways
            </div>
            <div className="font-semibold  text-xs underline text-primary ">
              Detail
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center justify-between">
          <TimeInfo time={"  21:40"} content="DAS" />

          <div className="flex flex-col items-center text-center gap-1">
            <div className="text-sm font-light uppercase text-black">
              1h 30m
            </div>
            <ProgressVertical />
            <div className="text-xs font-light uppercase text-black">
              Direct
            </div>
          </div>
          <TimeInfo time={"23:40"} content="DAS" />
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
          <div className="font-semibold text-sm text-accent">1,322,000 vnd</div>
      </div>
    </div>
  );
}
