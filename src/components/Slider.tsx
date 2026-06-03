"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const Slider = () => {

    const data = [
        {
            id: 1,
            title: "always fresh & always crips & always hot",
            image: "/slide1.jpg"
        },

        {
            id: 2,
            title: "we deliver your order whenever you are in Bhopal",
            image: "/slide2.jpg"
        },

        {
            id: 3,
            title: "the best food to share with your family",
            image: "/slide3.jpg"
        }

    ]


    const [currentSlide, setCurrentSlide] = useState(0)
    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setCurrentSlide((prev) => (prev == data.length - 1 ? 0 : prev+1))
    //     }, 4000);
    //     return () => clearInterval(interval)
    // }, [])
 
  return (
    <div className='h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] lg:flex'>
      {/* text container */}
      <div className='h-1/2 flex flex-col items-center justify-center font-bold gap-8 text-       [#D49A89] lg:h-full lg:w-1/2 bg-[#F4F4F4]'>
        <h1 className='text-5xl text-center uppercase p-4 md:p-10 md:text-6xl xl:text-7'>
            {data[currentSlide].title}
        </h1>
        <button className='bg-[#557571] text-white py-4 px-8'>
            Order Now
        </button>
      </div>

      {/* image container */}
      <div className='h-1/2 w-full relative lg:h-full lg:w-1/2'>
        <Image src={data[currentSlide].image} alt='' fill  className='object-cover'/>
      </div>
    </div>
  )
}

export default Slider
