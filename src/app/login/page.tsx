"use client"
import { signIn, useSession } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

const LoginPage = () => {

  const {data, status} = useSession();
  const router = useRouter();

  if(status === "loading"){
    return <p>Loading...</p>
  }

  if(status === "authenticated"){
    router.push('/')
  }

  return (
    <div className='p-4 h-[calc(100vh - 6rem)] md:h-[calc(100vh - 9rem)] flex items-center justify-center'>
      {/* box */}
      <div className='h-full shadow-2xl rounded-md flex flex-col md:flex-row md:h-[70%] md:w-full lg:w-[70%]'>
        {/* image container */}
        <div className='relative h-[30vh] w-full md:h-[68vh] md:w-1/2 '>
          <Image src='/loginBg.jpeg' alt='' fill className='object-cover'/>
        </div>
        {/* form container */}

        <div className='p-10 flex flex-col gap-8 md:w-1/2'>

          <h1 className='text-lg font-bold xl:text-3xl'>Welcome</h1>
          <p>Log into your account or create a new one using social buttons</p>
          <button className='flex gap-4 p-4 ring-1 ring-[#F7D1BA] rounded-md cursor-pointer'
          onClick={()=> signIn("google")}>
            <Image src='/googleLogo.png' alt='' width={20} height={20} className='object-contain'/>
            <span>Sign in with Google</span>
          </button>
          <button className='flex gap-4 p-4 ring-1 ring-[#F7D1BA] rounded-md cursor-pointer'>
            <Image src='/facebookLogo.png' alt='' width={20} height={20} className='object-contain'/>
            <span>Sign in with Facebook</span>
          </button>
          <p className='text-sm'>
            Have a problem? <Link href='/' className='underline'> Contact us </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
