"use client"
import { signOut, useSession } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'

const UserLink = () => {
    const { status } = useSession()
    return (
        <div>
            {status === "authenticated" ?
                (<div>
                    <Link href="/orders">Order</Link>
                    <span onClick={() => signOut()} className='ml-4 cursor-pointer'>Logout</span>
                </div>
                ) :
                <Link href="/login">Login</Link>
            }
        </div>
    )

}

export default UserLink
