import React from "react";
import { FaFacebookF, FaInstagram, FaPhoneAlt } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
type Props = {};

export function Footer({}: Props) {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between container py-5 gap-5 mb-5 mt-10">
      <div className="flex flex-col lg:flex-row lg:items-center justify-start gap-3">
        <div className="flex flex-row text-sm gap-2 items-center whitespace-nowrap">
          <span className="p-1.5 rounded-full bg-primary text-white">
            <FaPhoneAlt />
          </span>
          Call us: +84 964696070
        </div>
        <div className="flex flex-row text-sm gap-2 items-center whitespace-nowrap">
          <span className="p-1.5 rounded-full bg-primary text-white">
            <HiOutlineMail />
          </span>
          Email: doduccuong2001@gmail.com
        </div>
      </div>
      <div className="flex flex-row items-center justify-start gap-3">
        <span className="text-sm">Follow us</span>
        <span className="w-9 h-[1px] bg-black"></span>
        <span className="p-1 rounded-full bg-primary text-white">
          <FaFacebookF />
        </span>
        <span className="p-1 rounded-full bg-primary text-white">
          <FaInstagram />
        </span>
      </div>
    </div>
  );
}
