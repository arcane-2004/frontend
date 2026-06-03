import React from 'react'

const OrdersPage = () => {
  return (
    <div className='p-4 lg:px-20 xl:px-40'>
      <table className='w-full border-separate border-spacing-3'>
        <thead>
          <tr className='text-left'>
            <th className='hidden md:block'>Order Id</th>
            <th className=''>Date</th>
            <th>Price</th>
            <th className='hidden md:block'>Products</th>
            <th>Status</th>
          </tr>
        </thead> 
        <tbody>
          <tr className='text-sm md:text-base bg-red-50'>
            <td className='hidden md:block py-6 px-1'>12376496894</td>
            <td className='py-6 px-1'>02.06.2026</td>
            <td className='py-6 px-1'>1286</td>
            <td className='hidden md:block py-6 px-1'>Veggie Pizza (2), Coca Cola 1L (2)</td>
            <td className='py-6 px-1'>On the way (approx. 10min)...</td>
          </tr>

          <tr className='text-sm md:text-base odd:bg-[#F4F4F4]'>
            <td className='hidden md:block py-6 px-1'>12376496894</td>
            <td className='py-6 px-1'>02.06.2026</td>
            <td className='py-6 px-1'>1286</td>
            <td className='hidden md:block py-6 px-1'>Veggie Pizza (2), Coca Cola 1L (2)</td>
            <td className='py-6 px-1'>On the way (approx. 10min)...</td>
          </tr>

          <tr className='text-sm md:text-base odd:bg-[#F4F4F4]'>
            <td className='hidden md:block py-6 px-1'>12376496894</td>
            <td className='py-6 px-1'>02.06.2026</td>
            <td className='py-6 px-1'>1286</td>
            <td className='hidden md:block py-6 px-1'>Veggie Pizza (2), Coca Cola 1L (2)</td>
            <td className='py-6 px-1'>On the way (approx. 10min)...</td>
          </tr>

          <tr className='text-sm md:text-base odd:bg-[#F4F4F4]'>
            <td className='hidden md:block py-6 px-1'>12376496894</td>
            <td className='py-6 px-1'>02.06.2026</td>
            <td className='py-6 px-1'>1286</td>
            <td className='hidden md:block py-6 px-1'>Veggie Pizza (2), Coca Cola 1L (2)</td>
            <td className='py-6 px-1'>On the way (approx. 10min)...</td>
          </tr>

          <tr className='text-sm md:text-base odd:bg-[#F4F4F4]'>
            <td className='hidden md:block py-6 px-1'>12376496894</td>
            <td className='py-6 px-1'>02.06.2026</td>
            <td className='py-6 px-1'>1286</td>
            <td className='hidden md:block py-6 px-1'>Veggie Pizza (2), Coca Cola 1L (2)</td>
            <td className='py-6 px-1'>On the way (approx. 10min)...</td>
          </tr>

          <tr className='text-sm md:text-base odd:bg-[#F4F4F4]'>
            <td className='hidden md:block py-6 px-1'>12376496894</td>
            <td className='py-6 px-1'>02.06.2026</td>
            <td className='py-6 px-1'>1286</td>
            <td className='hidden md:block py-6 px-1'>Veggie Pizza (2), Coca Cola 1L (2)</td>
            <td className='py-6 px-1'>On the way (approx. 10min)...</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default OrdersPage
