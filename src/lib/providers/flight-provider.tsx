"use client";
import flightApi from "@/api/flightApi";
import React, { createContext, useContext, useEffect, useState } from "react";

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
    flights: any;
    loadMore: () => void;
    flightSelected: any;
    setFlightSelected: (selected: any) => any;
    filters: FiltersType;
    setFilters: (filter: any) => any;
  }>
>({});

interface FiltersType {
  stops?: any;
  time?: any;
  airline?: any;
  price?: string;
}

export function FlightProvider({ ...props }: { children: React.ReactNode }) {
  const [flights, setFlight] = useState<[] | any>(undefined);
  const [flightSelected, setFlightSelected] = useState<any>(undefined);
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState<FiltersType>({
    stops: null,
    time: null,
    airline: null,
    price: "ASC",
  });

  useEffect(() => {
    (async () => {
      try {
        const filteredFlights = await fetchAndFilterFlights(
          currentPage,
          filters
        );
        setFlight(filteredFlights);
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

      if (filters.time) {
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
      }}
    >
      {props.children}
    </FlightContext.Provider>
  );
}
export const useFlightContext = () => useContext(FlightContext);
