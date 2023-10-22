"use client";
import { AIRLINE, PRICE_SORT, TRANSIT } from "@/lib/constants/filter-selected";
import { useFlightContext } from "@/lib/providers/flight-provider";
import { Select, SelectItem } from "@nextui-org/react";
import React from "react";

type Props = {};

export function Filter({}: Props) {
  const { filters, setFilters } = useFlightContext();
  console.log("filter", filters);
  return (
    <div className="flex sm:flex-row flex-wrap  items-center justify-end gap-2">
      <div className="text-gray-400 font-semibold uppercase">Filter</div>
      <Select
        aria-labelledby="transit"
        items={TRANSIT}
        className="rounded-xl"
        labelPlacement="outside"
        placeholder="Transit"
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
      <Select
        aria-labelledby="time"
        items={[{ value: "2", label: "2" }]}
        className="rounded-xl"
        labelPlacement="outside"
        placeholder="Time"
        classNames={{
          base: "w-[150px] bg-white rounded-xl shadow-none",
          trigger: "h-10",
          listboxWrapper: "bg-white",
        }}
      >
        {(user) => (
          <SelectItem key={user.value} classNames={{ base: "bg-white" }}>
            {user.label}
          </SelectItem>
        )}
      </Select>
      <Select
        aria-labelledby="Airline"
        items={AIRLINE}
        className="rounded-xl"
        labelPlacement="outside"
        placeholder="Airline"
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
