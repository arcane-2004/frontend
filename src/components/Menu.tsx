"use client"
import React, { useState,} from 'react'
import { ListIcon, XIcon } from "@phosphor-icons/react"
import Link from 'next/link'
import CartIcon from './CartIcon'


const Menu = () => {

    const user:boolean = false
    const [open, setOpen] = useState(false)
    const items = [
        { id: 1, title: "Home Page", url: "/" },
        { id: 2, title: "Menu", url: "/" },
        { id: 3, title: "Working hours", url: "/" },
        { id: 4, title: "Contact", url: "/" }
    ]

    return (
        <div>
            {open ? (<XIcon size={30} weight='bold' onClick={() => setOpen(false)} />) 
                :
                (<ListIcon size={30} weight='bold' 
                    className='text-[#D49A89]'
                    onClick={() => setOpen(true)} 
                    />)
            }

           {open && (<div className='bg-[#D49A89] text-white absolute left-0 top-24 h-[calc(100vh-6rem)] w-full z-10 flex flex-col items-center justify-center gap-8 p-4 text-3xl font-medium '>
                {items.map(item => (
                    <Link key={item.id} href={item.url}
                    onClick={() => setOpen(false)}
                    > 
                    
                    {item.title} 
                    </Link>
                ))}
                {!user ?
                    <Link href="/login" onClick={() => setOpen(false)}>Login
                    </Link> :
                    <Link href="/orders" onClick={() => setOpen(false)}>Orders
                    </Link>
                }
                <Link href="/cart" onClick={() => setOpen(false)}>
                    <CartIcon/>
                </Link>
            </div>)}
        </div>
    )
}

export default Menu
