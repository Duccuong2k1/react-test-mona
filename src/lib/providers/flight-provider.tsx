"use client";
import flightApi from "@/api/flightApi";
import React, { createContext, useContext, useEffect, useState } from "react";

export const getAllFlight = async (page: number) => {
  try {
    const response = await flightApi.getFlights(
      `
          Flights(currentPage: ${page}, pageSize: ${6}) {
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
  }>
>({});

export function FlightProvider({ ...props }: { children: React.ReactNode }) {
  const [flights, setFlight] = useState<[] | any>(undefined);
  const [flightSelected, setFlightSelected] = useState<any>(undefined);
  const [currentPage, setCurrentPage] = useState(1);


  useEffect(() => {
    (async () => {
      try {
        const resData = await getAllFlight(currentPage);
        setFlight(resData?.Flights?.items);
      } catch (err) {
        console.log("Get all flights error",err);
      }
    })();
  }, []);

  const loadMore = async () => {
    try {
      const nextPage = currentPage + 1;
      const resData = await getAllFlight(nextPage);
      const newFlight = resData?.Flights?.items;
      setFlight([...flights, ...newFlight] as any);
      setCurrentPage(nextPage);
    } catch (err) {
      console.log("Get loadmore flights error",err);
    }
  };
  return (
    <FlightContext.Provider
      value={{
        flights,
        loadMore,
        flightSelected,
        setFlightSelected,
      }}
    >
      {props.children}
    </FlightContext.Provider>
  );
}
export const useFlightContext = () => useContext(FlightContext);
