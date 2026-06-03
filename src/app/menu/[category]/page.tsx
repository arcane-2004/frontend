import { pizzas } from '@/data'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const page = () => {

  return (
    <div className='flex flex-wrap text-[#D49A89]'> 
        {pizzas.map(item => (
            <Link key={item.id} href={`/product/${item.id}`}
            className='w-full h-[60vh] border-r-2 border-b-2 border-[#F7D1BA] sm:w-1/2 lg:w-1/3 p-4 flex flex-col justify-between group even:bg-[#F4F4F4]'>

                {/* iamge container */}
                {item.img && 
                <div className='relative h-[80%]'>
                    <Image src={item.img} alt='' fill className='object-contain'/>
                </div>}

                {/* text container */}
                <div className='flex items-center justify-between font-bold  '>
                    <h1 className='text-2xl uppercase p-2 '>{item.title}</h1>
                    <h2 className='group-hover:hidden text-xl'>₹{item.price}</h2>
                    <button className='group-hover:block hidden uppercase bg-[#557571] text-white p-2 rounded-md hover:cursor-pointer '>Add to Cart</button>
                </div>
            </Link>
        ))}
      
    </div>
  )
}

export default page
