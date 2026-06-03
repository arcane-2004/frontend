"use client"
import React from 'react'
import Countdown from 'react-countdown'

const CountDown = () => {

    const endingDate = new Date("2026-6-4")

  return (
    <div>
        <Countdown className='font-bold text-5xl text-[#F7D1BA]' date={endingDate}/>
    </div>
  )

}

export default CountDown

