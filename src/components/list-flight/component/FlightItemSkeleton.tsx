"use client";
import { Card, Skeleton } from "@nextui-org/react";
import React from "react";

type Props = {};

export function FlightItemSkeleton({}: Props) {
  return (
    <Card className="w-full space-y-5 rounded-lg p-4 bg-gray-50" radius="lg">
      <Skeleton className="rounded-lg bg-gray-300">
        <div className="h-14 rounded-lg"></div>
      </Skeleton>
      <div className="space-y-3">
       
        <div className="grid grid-cols-4 gap-3">
          <Skeleton className="rounded-lg bg-gray-300">
            <div className="h-4 rounded-lg"></div>
          </Skeleton>
          <Skeleton className="rounded-lg bg-gray-300">
            <div className="h-4 rounded-lg"></div>
          </Skeleton>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <Skeleton className="rounded-lg bg-gray-300">
            <div className="h-20 rounded-lg"></div>
          </Skeleton>
          <Skeleton className="rounded-lg bg-gray-300">
            <div className="h-20 rounded-lg"></div>
          </Skeleton>
        </div>
        
      </div>
    </Card>
  );
}
