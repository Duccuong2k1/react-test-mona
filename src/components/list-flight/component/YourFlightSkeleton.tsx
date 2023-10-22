"use client";
import { Card, Skeleton } from "@nextui-org/react";
import React from "react";

type Props = {};

export function YourFlightSkeleton({}: Props) {
  return (
    <Card className="w-full space-y-5 rounded-lg p-4 bg-gray-50" radius="lg">
      <Skeleton className="rounded-lg bg-gray-300">
        <div className="h-14 rounded-lg"></div>
      </Skeleton>
      <div className="space-y-3">
        <Skeleton className="rounded-lg bg-gray-300">
          <div className="h-6 rounded-lg"></div>
        </Skeleton>
        <Skeleton className="rounded-lg bg-gray-300">
          <div className="h-6 rounded-lg"></div>
        </Skeleton>
        <Skeleton className="rounded-lg bg-gray-300">
          <div className="h-6 rounded-lg"></div>
        </Skeleton>
      </div>
    </Card>
  );
}
