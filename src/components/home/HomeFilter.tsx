"use client";
import { Radio, RadioGroup, Select, SelectItem } from "@nextui-org/react";
import React, { useState } from "react";
import { AiOutlineCaretDown } from "react-icons/ai";
type Props = {};
import DatePicker from "react-datepicker";

import { CgCalendarDates } from "react-icons/cg";
import { Button } from "../shared/utilis/forms/Button";
import { BsArrowRight } from "react-icons/bs";
import { FaArrowRightArrowLeft } from "react-icons/fa6";

export function HomeFilter({}: Props) {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [changePlace, setChangePlace] = useState({
    from: "Da Nang",
    to: " Ho Chi Minh",
  });
  // Vi chưa co thông tin để hiển thi thay đổi nên chỉ viết cố định như trên 
  const toggleChangePlace = () => {
    setChangePlace((prevChangePlace) => {
      if (
        prevChangePlace.from === "Da Nang" &&
        prevChangePlace.to === "Ho Chi Minh"
      ) {
        return { from: "Ho Chi Minh", to: "Da Nang" };
      } else {
        return { from: "Da Nang", to: "Ho Chi Minh" };
      }
    });
  };
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
          placeholder="Please choose quantity"
          aria-label=""
          labelPlacement="outside"
          disableSelectorIconRotation
          defaultSelectedKeys={["1"]}
          className=" max-w-[220px] shadow-none text-sm"
          selectorIcon={<AiOutlineCaretDown className="bg-primary " />}
          classNames={{
            listboxWrapper: "bg-white",
            trigger: "h-10",
          }}
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
          placeholder="Please choose class"
          defaultSelectedKeys={["Business"]}
          labelPlacement="outside"
          selectorIcon={<AiOutlineCaretDown className="text-primary" />}
          disableSelectorIconRotation
          className=" max-w-[220px] shadow-none text-sm"
          classNames={{
            listboxWrapper: "bg-white",
            trigger: "h-10",
          }}
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
      <div className="my-5 grid md:grid-cols-2 grid-cols-1 xl:grid-cols-4 gap-4">
        <div className="border bg-white border-gray-100 rounded-xl py-[15px] px-5 box-place-from ">
          <div className="uppercase text-xs text-black opacity-50">From</div>
          <div className="text-[27px] font-semibold text-primary">
            {changePlace?.from}
          </div>
          <div className="text-sm text-black font-semibold">
            Quang Nam, Viet Nam
          </div>
          <span
            className="bg-white rounded-full p-3 flex  absolute -right-[30px] top-9 cursor-pointer"
            onClick={toggleChangePlace}
          >
            <i>
              <FaArrowRightArrowLeft />
            </i>
          </span>
        </div>
        <div className="border bg-white border-gray-100 rounded-xl py-[15px] pl-10 pr-5 box-place-to">
          <div className="uppercase text-xs text-black opacity-50">To</div>
          <div className="text-[27px] font-semibold text-primary">
            {changePlace?.to}
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
          className="text-2xl text-primary font-semibold w-[230px] focus-within:border-none focus:border-none border-none"
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
