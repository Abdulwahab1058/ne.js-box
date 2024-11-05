import React from 'react'

const Box = () => {
  return (
    <div className='grid-cols-3 grid raw gap-4 m-4'>
      <div className='bg-red-400 col-span-3 text-center content-center text-4xl font-bold text-white'>Header</div>
      <div className='bg-orange-400 row-span-10 text-center content-center text-4xl font-bold text-white font-serif'>Left</div>
      <div className='bg-slate-700 row-span-5 text-center content-center text-4xl font-bold text-green-700 rounded-full'>Contact-1</div>
      <div className='bg-purple-600 row-span-10 text-center content-center font-bold text-4xl text-white font-serif'>Right</div>
      <div className='bg-red-500 row-span-5 text-center content-center text-3xl font-bold text-gray-600 rounded-full'>Contant-3</div>
      <div className='bg-yellow-300 col-span-3 p-4 text-center content-center text-4xl font-bold text-green-500 rounded-3xl'>Footer</div>
    </div>
  )
}

export default Box
