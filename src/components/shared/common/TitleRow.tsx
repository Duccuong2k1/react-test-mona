import React from "react";

export function TitleRow({ title, detail }: { title: string; detail: string }) {
  return (
    <div className="text-sm font-normal text-black mt-1">
      {title} <span className="text-primary font-semibold ml-1">{detail}</span>
    </div>
  );
}
