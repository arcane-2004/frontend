import React from 'react'
import Menu from './Menu'
import Link from 'next/link'
import CartIcon from './CartIcon'
// import { PhoneIcon } from '@phosphor-icons/react'
import { Phone } from 'lucide-react';


const Navbar = () => {
  
  const user = true

  return (
    <div className='h-12 text-[#D49A89]  p-4 flex items-center justify-between border-b-2 border-b-[#D49A89] uppercase md:h-24 lg:px-20 xl:px-40 '>

      {/* left links */}
      <div className='hidden md:flex gap-4 font-medium flex-1'>
        <Link href="/">Home Page</Link>
        <Link href="/menu">Menu</Link>
        <Link href="/">Contact</Link>
      </div>
      {/* logo */}
      <div className='text-xl md:font-bold flex-1 md:text-center'>
        <Link rel="stylesheet" href="/"> Urban Bites </Link>
      </div>
      {/* mobile view */}
      <div className='md:hidden'>
        <Menu/>
      </div>

      {/* right links */}
      <div className='hidden md:flex gap-4 font-medium items-center justify-end flex-1'>
        <div className='bg-[#557571] text-white p-1 flex items-center gap-2 rounded-md md:absolute top-3 right-2 lg:static'>
          <Phone/>
          <span>+91 982 2343 xxxx</span>
        </div>
        {!user? <Link href="/">Login</Link> :
        <Link href="/orders">Order</Link>
        }
        <CartIcon/>
      </div>
    </div>
  )
}

export default Navbar
