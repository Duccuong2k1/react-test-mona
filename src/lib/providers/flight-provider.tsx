"use client";
import flightApi from "@/api/flightApi";
import React, { createContext, useContext, useEffect, useState } from "react";
import { Flight } from "../types/Flight";

export const getAllFlight = async (page: number, pageSize = 6) => {
  try {
    const response = await flightApi.getFlights(
      `
          Flights(currentPage: ${page}, pageSize: ${pageSize}) {
              items {
                AirlineCode
                Carryon
                ChargeAdult
                ChargeChild
                Duration
                EndDate
                EndPoint
                FareBasis
                FareClass
                FareRule
                FareType
                FeeAdult
                FeeChild
                FeeInfant
                FlightId
                FlightNumber
                Freebag
                GroupClass
                HasChangedClass
                NoRefund
                OperatingAirline
                Plane
                PriceAdult
                PriceChild
                PriceInfant
                Promo
                RelatedFlights {
                    AirlineCode
                    Carryon
                    FlightNumber
                    Freebag
                    Plane
                    SeatClass
                    StartPoint
                    StartTime
                    EndPoint
                    EndTime
                    Index
                    Duration
                  }
                
                SessionId
                SeatRemain
                StartPoint
                StartDate
                Stops
               
              }
              pageSize
              total
          }
      `
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const FlightContext = createContext<
  Partial<{
    flights: Flight[];
    loadMore: () => void;
    flightSelected: any;
    setFlightSelected: (selected: any) => any;
    filters: FiltersType;
    setFilters: (filter: any) => any;
    isLoadFlight:boolean;
    setIsLoadFlight:(isLoad:boolean)=>void;
  }>
>({});

interface FiltersType {
  stops?: any;
  time?: { startTime: any; endTime: any };
  airline?: any;
  price?: string;
}

export function FlightProvider({ ...props }: { children: React.ReactNode }) {
  const [flights, setFlight] = useState<Flight[] | any>(undefined);
  const [flightSelected, setFlightSelected] = useState<any>(undefined);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoadFlight, setIsLoadFlight] = useState(false);
  const [filters, setFilters] = useState<FiltersType>({
    stops: null,
    time: { startTime: null, endTime: null },
    airline: null,
    price: "ASC",
  });

  useEffect(() => {
    (async () => {
      setIsLoadFlight(true)
      try {
        const filteredFlights = await fetchAndFilterFlights(
          currentPage,
          filters
        );
        setFlight(filteredFlights);
        setIsLoadFlight(false)
      } catch (err) {
        console.log("Get all flights error", err);
      }
    })();
  }, [filters]);

  const fetchAndFilterFlights = async (
    page: number,
    filters: FiltersType = {}
  ) => {
    try {
      const resData = await getAllFlight(page);
      let filteredFlights = resData?.Flights?.items;

      if (filters.stops) {
        filteredFlights = filteredFlights.filter(
          (flight: any) => flight.Stops === +filters.stops
        );
      }

      if (filters.time?.startTime && filters.time?.endTime) {
        filteredFlights = filteredFlights.filter((flight: any) => {
          const StartDate = new Date(flight.StartDate);
          const EndDate = new Date(flight.EndDate);
          return (
            StartDate >= filters.time?.startTime &&
            EndDate <= filters.time?.endTime
          );
        });
      }

      if (filters.airline) {
        filteredFlights = filteredFlights.filter(
          (flight: any) => flight.AirlineCode === filters.airline
        );
      }

      if (filters.price === "ASC") {
        filteredFlights.sort((a: any, b: any) => a.PriceAdult - b.PriceAdult);
      } else {
        filteredFlights.sort((a: any, b: any) => b.PriceAdult - a.PriceAdult);
      }

      return filteredFlights;
    } catch (err) {
      console.log("filter get flight err", err);
    }
  };

  const loadMore = async () => {
    try {
      const nextPage = currentPage + 1;
      const resData = await getAllFlight(nextPage);
      const newFlight = resData?.Flights?.items;
      setFlight([...flights, ...newFlight] as any);
      setCurrentPage(nextPage);
    } catch (err) {
      console.log("Get loadmore flights error", err);
    }
  };
  return (
    <FlightContext.Provider
      value={{
        flights,
        loadMore,
        flightSelected,
        setFlightSelected,
        filters,
        setFilters,
        isLoadFlight,
      }}
    >
      {props.children}
    </FlightContext.Provider>
  );
}
export const useFlightContext = () => useContext(FlightContext);
