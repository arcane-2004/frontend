"use client"

import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { useCartStore } from '@/utils/store'

const CartIcon = () => {

    const {totalItems} = useCartStore();

    return (
        <div>
            <Link href="/cart" className='flex gap-1 items-center'>
                <div className='relative h-11 w-11 md:h-8 md:w-8'>
                    <Image src="/cart.png" alt="" fill/>
                </div>
                <span>Cart({totalItems})</span>
            </Link>
        </div>
    )
}

export default CartIcon
