import Image from 'next/image'
import React from 'react'

const CartPage = () => {
    return (
        <div className='h-[calc(100vh-6rem)] h-[calc(100vh - 9rem)] flex flex-col text-[#D49A89] lg:flex-row'>
            {/* product container */}
            <div className='h-1/2 p-4 flex flex-col justify-center overflow-auto lg:h-full lg:w-2/3 xl:w-1/2 md:px-20 xl:px-40'>
                {/* single item */}
                <div className='flex items-center justify-between mb-4 '>
                    <Image src='/temporary/p1.png' alt='' className='object-contain' width={100} height={100} />
                    <div>
                        <h1 className='uppercase text-xl font-bold'>sicilian</h1>
                        <span>lagre</span>
                    </div>
                    <h2 className='font-bold'>₹599</h2>
                    <span className='cursor-pointer'>X</span>
                </div>

                <div className='flex items-center justify-between mb-4 '>
                    <Image src='/temporary/p1.png' alt='' className='object-contain' width={100} height={100} />
                    <div>
                        <h1 className='uppercase text-xl font-bold'>sicilian</h1>
                        <span>lagre</span>
                    </div>
                    <h2 className='font-bold'>₹599</h2>
                    <span className='cursor-pointer'>X</span>
                </div>

                <div className='flex items-center justify-between mb-4 '>
                    <Image src='/temporary/p1.png' alt='' className='object-contain' width={100} height={100} />
                    <div>
                        <h1 className='uppercase text-xl font-bold'>sicilian</h1>
                        <span>lagre</span>
                    </div>
                    <h2 className='font-bold'>₹599</h2>
                    <span className='cursor-pointer'>X</span>
                </div>
            </div>

            {/* payment container */}
            <div className='h-1/2 p-4 bg-[#F4F4F4] flex flex-col gap-4 justify-center lg:h-full lg:w-1/3 xl:w-1/2 md:px-20 xl:px-40 xl:text-xl xl:gap-6'>
                <div className='flex justify-between'>
                    <span>Subtotal (3 items)</span>
                    <span className=''>₹1797</span>
                </div>

                <div className='flex justify-between'>
                    <span>Service Cost</span>
                    <span className=''>0</span>
                </div>

                <div className='flex justify-between'>
                    <span>Delivery Cost</span>
                    <span className='text-green-600'>FREE!</span>
                </div>
                <hr className='my-4'/>

                <div className='flex justify-between'>
                    <span>TOTAL(INCL. VAT)</span>
                    <span className=''>₹1797</span>
                </div>

                <button className='bg-[#557571] text-white rounded-md p-3 w-1/2 self-end'>CHECKOUT</button>
            </div>
        </div>
    )
}

export default CartPage
