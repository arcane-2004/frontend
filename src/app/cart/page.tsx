"use client"
import { useCartStore } from '@/utils/store'
import Image from 'next/image'
import React from 'react'

const CartPage = () => {

    const { products, totalPrice, totalItems, removeFromCart } = useCartStore()

    return (
        <div className='h-[calc(100vh-6rem)] h-[calc(100vh - 9rem)] flex flex-col text-[#D49A89] lg:flex-row'>
            {/* product container */}
            {products.map(item => (
                <div key={item.id}
                    className='h-1/2 p-4 flex flex-col justify-center overflow-auto lg:h-full lg:w-2/3 xl:w-1/2 md:px-20 xl:px-40'>
                    {/* single item */}

                    <div className='flex items-center justify-between mb-4 '>
                        {item.img &&
                            <Image src={item.img} alt='' className='object-contain' width={100} height={100} />
                        }
                        <div>
                            <h1 className='uppercase text-xl font-bold'>{item.title}</h1>
                            <span>{item.optionTitle}</span>
                        </div>
                        <h2 className='font-bold'>₹{item.price}</h2>
                        <span className='cursor-pointer' onClick={() => removeFromCart(item)}>X</span>
                    </div>
                </div>
            ))}
            {/* payment container */}
            <div className='h-1/2 p-4 bg-[#F4F4F4] flex flex-col gap-4 justify-center lg:h-full lg:w-1/3 xl:w-1/2 md:px-20 xl:px-40 xl:text-xl xl:gap-6'>
                <div className='flex justify-between'>
                    <span>Subtotal ({totalItems} items)</span>
                    <span className=''>₹{totalPrice}</span>
                </div>

                <div className='flex justify-between'>
                    <span>Service Cost</span>
                    <span className=''>0</span>
                </div>

                <div className='flex justify-between'>
                    <span>Delivery Cost</span>
                    <span className='text-green-600'>FREE!</span>
                </div>
                <hr className='my-4' />

                <div className='flex justify-between'>
                    <span>TOTAL(INCL. VAT)</span>
                    <span className=''>₹{totalPrice}</span>
                </div>

                <button className='bg-[#557571] text-white rounded-md p-3 w-1/2 self-end'>CHECKOUT</button>
            </div>
        </div>
    )
}

export default CartPage
