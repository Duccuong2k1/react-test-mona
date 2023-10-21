import React from "react";

interface TimeInfoProps {
  time: string | any;
  content: string;
}

export function TimeInfo({ time, content }: TimeInfoProps) {
  return (
    <div className="flex flex-col items-center text-center gap-1">
      <div className="text-sm font-semibold uppercase text-black">{time}</div>
      <span className="uppercase text-[10px] font-semibold px-[5px] text-black py-[3px] bg-[#edecff] rounded-full">
        {content}
      </span>
    </div>
  );
}

export function TimeDateInfo({ time, date }: {time:string,date:string}) {
  return (
    <div className="flex flex-col items-start text-start gap-1">
      <div className="text-sm font-semibold uppercase text-black">{time}</div>
      <span className="text-xs font-light text-black">
        {date}
      </span>
    </div>
  );
}

