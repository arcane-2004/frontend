
import Link from 'next/link'
import React from 'react'

const Footer = () => {

  return (
    <div className='h-12 md:h-24 p-4 lg:px-20 xl:px-40 flex items-center justify-between text-[#D49A89] uppercase font-semibold text-sm border-t-2 border-[#D49A89]'>
      <Link href='/' className='text-xl font-bold'>Urban Bites </Link>
      <p>Ⓒ All Rights Reserved.</p>
    </div>
  )
}

export default Footer
