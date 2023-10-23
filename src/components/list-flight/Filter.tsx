"use client";
import { AIRLINE, PRICE_SORT, TRANSIT } from "@/lib/constants/filter-selected";
import { useFlightContext } from "@/lib/providers/flight-provider";
import { Select, SelectItem } from "@nextui-org/react";
import React from "react";
import DatePicker from "react-datepicker";
import { AiOutlineCaretDown } from "react-icons/ai";

type Props = {};

export function Filter({}: Props) {
  const { filters, setFilters } = useFlightContext();

  return (
    <div className="flex sm:flex-row flex-wrap  items-center justify-end gap-2">
      <div className="text-gray-400 font-semibold uppercase">Filter</div>
      <Select
        aria-labelledby="transit"
        items={TRANSIT}
        className="rounded-xl"
        labelPlacement="outside"
        placeholder="Transit"
        selectorIcon={<AiOutlineCaretDown className="!text-primary !bg-primary " />}
        classNames={{
          base: "w-[150px] bg-white rounded-xl shadow-none",
          trigger: "h-10",
          listboxWrapper: "bg-white",
        }}
        defaultValue={filters?.stops}
        value={filters?.stops}
        onChange={(value) =>
          setFilters?.({ ...filters, stops: value?.target?.value })
        }
      >
        {(item) => (
          <SelectItem key={item.value} classNames={{ base: "bg-white" }}>
            {item.label}
          </SelectItem>
        )}
      </Select>

      <DatePicker
        placeholderText="Start time"
        className="w-[150px] bg-white text-sm rounded-xl  p-2.5 border-none"
        selected={filters?.time?.startTime}
        onChange={(date: Date | null) =>
          setFilters?.({
            ...filters,
            time: { ...filters?.time, startTime: date },
          })
        }
        showTimeSelect
        timeFormat="HH:mm"
        timeIntervals={15}
        dateFormat="HH:mm"
        isClearable
      />

      <DatePicker
        placeholderText="End time"
        className="w-[150px] bg-white text-sm rounded-xl p-2.5 border-none"
        selected={filters?.time?.endTime}
        onChange={(date: Date | null) =>
          setFilters?.({
            ...filters,
            time: { ...filters?.time, endTime: date },
          })
        }
        showTimeSelect
        timeFormat="HH:mm"
        timeIntervals={15}
        dateFormat="HH:mm"
        isClearable
      />
      <Select
        aria-labelledby="Airline"
        items={AIRLINE}
        className="rounded-xl"
        labelPlacement="outside"
        placeholder="Airline"
        selectorIcon={<AiOutlineCaretDown className="bg-primary " />}

        classNames={{
          base: "w-[150px] bg-white rounded-xl shadow-none",
          trigger: "h-10",
          listboxWrapper: "bg-white",
        }}
        defaultValue={filters?.airline}
        value={filters?.airline}
        onChange={(value) =>
          setFilters?.({ ...filters, airline: value?.target?.value })
        }
      >
        {(item) => (
          <SelectItem key={item.value} classNames={{ base: "bg-white" }}>
            {item.label}
          </SelectItem>
        )}
      </Select>
      <Select
        aria-labelledby="Low-price"
        items={PRICE_SORT}
        className="rounded-xl"
        labelPlacement="outside"
        placeholder="Low Price"
        selectorIcon={<AiOutlineCaretDown className="text-primary " />}

        classNames={{
          base: "w-[150px] bg-white rounded-xl shadow-none",
          trigger: "h-10",
          listboxWrapper: "bg-white",
        }}
        defaultValue={filters?.price}
        value={filters?.price}
        onChange={(value) =>
          setFilters?.({ ...filters, price: value?.target?.value })
        }
      >
        {(item) => (
          <SelectItem key={item.value} classNames={{ base: "bg-white" }}>
            {item.label}
          </SelectItem>
        )}
      </Select>
    </div>
  );
}
