import { featuredProducts } from '@/data'
import Image from 'next/image'
import React from 'react'

const Featured = () => {

    return (
        <div className='w-screen overflow-x-scroll text-[#D49A89]'>
            {/* wrapper */}
            <div className='w-max flex'>
                {/* single items */}
                {featuredProducts.map((item) => (
                    <div key={item.id} className='w-screen h-[60vh] flex flex-col items-center justify-around p-4 hover:bg-[#F4F4F4] transition-all duration-300 xl:w-[33vw] md:w-[50vw] xl:h-[90vh]'>

                        {/* image container */}
                        {item.img &&
                            <div className='relative w-full flex-1 hover:rotate-60 transition-all duration-500'>
                                <Image
                                    src={item.img} alt='' fill className='object-contain'
                                />
                            </div>}

                        {/* text container */}
                        <div className='flex-1 flex flex-col items-center justify-center gap-4'>
                            <h1 className='text-lg xl:text-2xl font-bold uppercase'>
                                {item.title}
                            </h1>
                            <p className='p-4 xl:p-8 text-center'>
                                {item.desc}
                            </p>
                            <span className='text-lg font-bold'>
                                ₹{item.price}
                            </span>
                            <button className='bg-[#557571] p-2 rounded-md text-white'>
                                Add to Cart
                            </button>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    )
}

export default Featured
