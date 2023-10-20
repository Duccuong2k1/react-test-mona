"use client";
import { Select, SelectItem } from "@nextui-org/react";
import React from "react";

type Props = {};

export function Filter({}: Props) {
  return (
    <div className="flex flex-row items-center justify-end gap-2">
      <div className="text-gray-400 font-semibold uppercase">Filter</div>
      <Select
        items={animals}
        className="rounded-xl"
        labelPlacement="outside"
         placeholder="Transit"
        classNames={{
          base: "w-[150px] bg-white rounded-xl shadow-none",
          trigger: "h-10",
          listboxWrapper:"bg-white"
        }}
      >
        {(user) => (
          <SelectItem key={user.value} classNames={{ base: "bg-white" }}>
            {user.label}
          </SelectItem>
        )}
      </Select>
      <Select
        items={animals}
        className="rounded-xl"
        labelPlacement="outside"
         placeholder="Time"
        classNames={{
            base: "w-[150px] bg-white rounded-xl shadow-none",
            trigger: "h-10",
            listboxWrapper:"bg-white"
          }}
      >
        {(user) => (
          <SelectItem key={user.value} classNames={{ base: "bg-white" }}>
            {user.label}
          </SelectItem>
        )}
      </Select>
        <Select
            items={animals}
            className="rounded-xl"
            labelPlacement="outside"
             placeholder="Airline"
            classNames={{
                base: "w-[150px] bg-white rounded-xl shadow-none",
                trigger: "h-10",
                listboxWrapper:"bg-white"
              }}
        >
            {(user) => (
            <SelectItem key={user.value} classNames={{ base: "bg-white" }}>
                {user.label}
            </SelectItem>
            )}
        </Select>
        <Select
            items={animals}
            className="rounded-xl"
            labelPlacement="outside"
             placeholder="Low Price"
            classNames={{
                base: "w-[150px] bg-white rounded-xl shadow-none",
                trigger: "h-10",
                listboxWrapper:"bg-white"
              }}
        >
            {(user) => (
            <SelectItem key={user.value} classNames={{ base: "bg-white" }}>
                {user.label}
            </SelectItem>
            )}
        </Select>
    </div>
  );
}

const animals = [
  { label: "Cat", value: "cat" },
  { label: "dog", value: "dog" },
  { label: "pig", value: "pig" },
  { label: "tiger", value: "tiger" },
];
