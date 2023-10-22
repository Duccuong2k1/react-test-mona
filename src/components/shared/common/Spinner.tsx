import React from 'react'
import { FaPersonWalkingLuggage } from 'react-icons/fa6';
import { IoIosAirplane } from "react-icons/io";

type Props = {}

export  function Spinner({}: Props) {
  return (
    <div className='container min-h-screen flex flex-col justify-center  items-center'>
        <i className='text-4xl text-primary loader'><IoIosAirplane/></i>
        <div className='mt-3 font-semibold text-2xl text-accent flex flex-row items-center gap-2'> <i><FaPersonWalkingLuggage/></i> BayCungBan</div>
    </div>
  )
}