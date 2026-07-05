"use client"
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation';
import React from 'react'
import {toast} from 'react-toastify'

const DeleteButton = ({id}:{id:string}) => {

    const {data:session, status} = useSession();
    const router = useRouter()

    if(status === "loading"){
        return <p>Loading...</p>
    }

    if(status === "unauthenticated" || !session?.user.isAdmin){
        return;
    }

    const handleDelete = async() => {
        const res = await fetch(`http://localhost:3000/api/products/${id}`, {
            method: "DELETE"
        })

        if(res.status === 200){
            router.push('/menu')
            toast.success("Product has been deleted!")
        }else{
            const data = await res.json();
            toast.error(data.message)
        }
    }

  return (
    <div>
      <button className='bg-red-600 text-white font-semibold py-2 px-4 absolute top-4 right-4 rounded-full cursor-pointer hover:bg-red-700'
      onClick={handleDelete}
      >
        Delete
      </button>
    </div>
  )
}

export default DeleteButton
