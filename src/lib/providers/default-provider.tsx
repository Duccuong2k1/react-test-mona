"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";

export const DefaultContext = createContext<
  Partial<{
    isLoading: boolean;
    setIsLoading: (value: boolean) => any;
  }>
>({});

export function DefaultProvider({ ...props }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <DefaultContext.Provider
      value={{
        isLoading,
        setIsLoading,
      }}
    >
      {props.children}

      <ToastContainer
        position="bottom-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </DefaultContext.Provider>
  );
}
export const useDefaultContext = () => useContext(DefaultContext);
