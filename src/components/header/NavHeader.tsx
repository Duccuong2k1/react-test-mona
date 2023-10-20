"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Button } from "../shared/utilis/forms/Button";
import { usePathname } from "next/navigation";

type Props = {};

export function NavHeader({}: Props) {
  const pathname = usePathname();
  const [isCheckUrlFlight, setCheckUrlFlight] = useState(false);
  useEffect(() => {
    if (pathname === "/list-flight") {
      setCheckUrlFlight(true);
    }
  }, [pathname]);
  return (
    <div className="flex flex-row items-center justify-between py-4 container ">
      <div className="flex flex-row justify-start items-center gap-2">
        <Link
          href={"/"}
          className={`${
            isCheckUrlFlight ? "text-white " : "text-black "
          }text-2xl font-semibold `}
        >
          Baycungban
        </Link>
        <span className="border-2 border-primary rounded-full">
          <Image
            src={"/img/vietnam.png"}
            width={20}
            height={20}
            alt="icon language"
            className="object-cover"
          />
        </span>
        <span>
          <Image
            src={"/img/united.png"}
            width={20}
            height={20}
            alt="icon language"
            className="object-cover"
          />
        </span>
      </div>
      <NavMenu isCheckUrlFlight={isCheckUrlFlight} />
      <Button
        text="Booking now"
        className={`${
          isCheckUrlFlight ? "bg-white !text-primary" : "bg-primary"
        } whitespace-nowrap`}
      />
    </div>
  );
}

function NavMenu({ isCheckUrlFlight }: { isCheckUrlFlight?: boolean }) {
  const [menus, setMenus] = useState(NAV_MENU);

  return (
    <ul className="lg:flex hidden flex-row items-center justify-around gap-[30px]">
      {menus.map((nav, idx) => (
        <li key={idx}>
          <Link
            href={nav.url || "#"}
            className={`${isCheckUrlFlight ? "text-white  " : "text-black "} ${
              isCheckUrlFlight && nav.url === "/list-flight"
                ? "bg-black bg-opacity-10 rounded-full"
                : ""
            }  text-sm  py-[10px] px-[15px]`}
          >
            {nav.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}

const NAV_MENU: {
  title: string;
  url: string;
}[] = [
  {
    title: "Promotion",
    url: "/",
  },
  {
    title: "Flight Schedule",
    url: "/list-flight",
  },
  {
    title: "About us",
    url: "/",
  },
  {
    title: "Payment Guide",
    url: "/",
  },
];
