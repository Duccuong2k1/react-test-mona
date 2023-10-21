import React from 'react'

type Props = {}

export  function ProgressHorizontal({}: Props) {
  return (
    <div className="flex flex-col items-center justify-start ">
    <span className="p-0.5 rounded-full border-primary border-2 bg-white"></span>
    <span className="w-[1px] h-full bg-primary"></span>
    <span className="p-0.5 rounded-full border-primary border-2 bg-primary"></span>
  </div>
  )
}
export  function ProgressVertical({}: Props) {
  return (
    <div className="flex flex-row items-center justify-start ">
    <span className="p-0.5 rounded-full border-primary border-2 bg-white"></span>
    <span className="w-20 h-[2px] bg-primary"></span>
    <span className="p-0.5 rounded-full border-primary border-2 bg-primary"></span>
  </div>
  )
}