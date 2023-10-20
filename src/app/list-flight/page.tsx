import { InfoFlightFilter } from '@/components/list-flight/InfoFlightFilter'
import { Button } from '@nextui-org/react'
import React from 'react'

type Props = {}

export default function ListFlightPage({}: Props) {
  return (
    <div className=''>
        <InfoFlightFilter/>
    </div>
  )
}