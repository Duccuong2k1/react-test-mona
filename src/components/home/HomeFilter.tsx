"use client";
import { Radio, RadioGroup, Select, SelectItem } from "@nextui-org/react";
import { addDays } from "date-fns";
import React, { useState } from "react";
import { AiOutlineCaretDown } from "react-icons/ai";
type Props = {};
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { CgCalendarDates } from "react-icons/cg";
import { Button } from "../shared/utilis/forms/Button";
import { BsArrowRight } from "react-icons/bs";
import { FaArrowRightArrowLeft } from "react-icons/fa6";

export function HomeFilter({}: Props) {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(addDays(new Date(), 1));
  return (
    <div
      className="container bg-white rounded-xl p-[30px] absolute -bottom-12 left-1/2 -translate-x-1/2 w-full  right-0 transform"
      style={{ boxShadow: "0px 4px 30px 0px rgba(77, 70, 250, 0.10)" }}
    >
      <div className="flex flex-col lg:flex-row lg:items-center justify-start gap-5">
        <RadioGroup
          size="lg"
          defaultValue={"Round-trip"}
          className="text-sm"
          orientation="horizontal"
        >
          <Radio value="Round-trip">One way / Round-trip</Radio>
          <Radio value="Multi-city">Multi-city</Radio>
        </RadioGroup>
        <Select
          aria-label=""
          labelPlacement="outside"
          disableSelectorIconRotation
          defaultSelectedKeys={["1"]}
          className=" bg-white max-w-[220px] shadow-none text-sm"
          selectorIcon={<AiOutlineCaretDown className="bg-primary " />}
          style={{ background: "#fff" }}
        >
          {[
            { value: "1", label: "02 Adult, 01 children" },
            { value: "2", label: "01 Adult, 01 children" },
          ].map((animal) => (
            <SelectItem
              key={animal.value}
              value={animal.value}
              className="bg-white text-sm"
            >
              {animal.label}
            </SelectItem>
          ))}
        </Select>
        <Select
          aria-label=""
          defaultSelectedKeys={["Business"]}
          labelPlacement="outside"
          selectorIcon={<AiOutlineCaretDown className="text-primary" />}
          disableSelectorIconRotation
          className=" bg-white max-w-[220px] shadow-none text-sm"
        >
          {[
            { value: "Business", label: "Business Class" },
            { value: "Person", label: "Person Class" },
          ].map((animal) => (
            <SelectItem
              key={animal.value}
              value={animal.value}
              className="bg-white text-sm"
            >
              {animal.label}
            </SelectItem>
          ))}
        </Select>
      </div>
      <div className="my-5 grid md:grid-cols-2 grid-cols-1 xl:grid-cols-4 gap-5">
        <div className="border bg-white border-gray-100 rounded-xl py-[15px] px-5 box-place-from ">
          <div className="uppercase text-xs text-black opacity-50">From</div>
          <div className="text-[27px] font-semibold text-primary">Da nang</div>
          <div className="text-sm text-black font-semibold">
            Quang Nam, Viet Nam
          </div>
        <span className="bg-white rounded-full p-3 flex  absolute -right-[30px] z-30 top-9"><i><FaArrowRightArrowLeft/></i></span>
        </div>
        <div className="border bg-white border-gray-100 rounded-xl py-[15px] pl-10 pr-5 box-place-to">
          <div className="uppercase text-xs text-black opacity-50">To</div>
          <div className="text-[27px] font-semibold text-primary">
            Ho Chi Minh
          </div>
          <div className="text-sm text-black font-semibold">Viet Nam</div>
        </div>

        <div className="md:col-span-2 col-span-1 border bg-white border-gray-100 rounded-xl py-[15px] px-5 grid grid-cols-1 md:grid-cols-2 gap-5">
          <BoxSelectedDate
            title="Departure"
            selectedDate={startDate}
            setSelectedDate={(date) => setStartDate(date)}
            activePrev={true}
          />
          <BoxSelectedDate
            title="Return"
            selectedDate={endDate}
            setSelectedDate={(date) => setEndDate(date)}
          />
        </div>
      </div>
      <Button
        text="Search Flights"
        icon={<BsArrowRight />}
        iconClassName={"ml-5"}
        iconPosition="end"
        href="/list-flight"
        className={"bg-primary absolute -bottom-5 right-7 "}
      />
    </div>
  );
}

function BoxSelectedDate({
  title,
  selectedDate,
  setSelectedDate,
  activePrev,
}: {
  title: string;
  selectedDate: Date;
  setSelectedDate: (date: any) => any;
  activePrev?: boolean;
}) {
  return (
    <div>
      <div className="uppercase text-xs text-black opacity-50">{title}</div>
      <div className="flex flex-row items-center justify-between w-full">
        <DatePicker
          selected={selectedDate}
          onChange={(date: any) => setSelectedDate(date)}
          dateFormat="EEE, dd MMM, yyyy"
          className="text-2xl text-primary font-semibold w-[200px]"
        />
        <i className="text-2xl text-primary">
          <CgCalendarDates />
        </i>
      </div>
      <div className="text-sm font-semibold gap-3 flex flex-row items-center ">
        <span
          className={`${
            activePrev ? "border-b border-black" : " opacity-40"
          } text-black cursor-pointer`}
        >
          Prev
        </span>
        <span className="text-black opacity-40 cursor-pointer">Next</span>
      </div>
    </div>
  );
}
