
import Price from '@/components/Price'
import { singleProduct } from '@/data'
import Image from 'next/image'
import React from 'react'

const SingleProductPage = () => {

    return (
        <div className='p-4 lg:px-20 xl:px-40 h-[calc(100vh-6rem)] md:h-[calc(100vh - 9rem)] flex flex-col justify-around text-[#D49A89] md:flex-row md:gap-8 md:items-center'>

            {/* image container */}
            <div className='relative w-full h-1/2 md:h-[70%]'>
                {singleProduct.img && 
                <Image src={singleProduct.img} alt='' fill className='object-contain'
                />}
            </div>

            {/* text container */}
            <div className='h-1/2 flex flex-col gap-4 md:h-[70%] md:justify-center md:gap-6 xl:gap-8'>
                <h1 className='text-3xl font-bold uppercase md:text-5xl '>{singleProduct.title}</h1>
                <p>{singleProduct.desc}</p>
                <Price
                price = {singleProduct.price}
                id = {singleProduct.id}
                options = {singleProduct.options}
                />
            </div>
        </div>
    )
}

export default SingleProductPage
