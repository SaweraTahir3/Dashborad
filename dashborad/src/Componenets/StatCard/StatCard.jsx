
import React from 'react'

const StatCard = ({name,icon:Icon,value,color}) => {
  return (
    <div className='bg-gray-100 bg-opacity-50 border-b border-purple-900  backdrop-blur-md overflow-hidden  shadow-lg rounded-xl border  hover:bg-purple-400'
    whileHover={{ y:-5 , boxShadw : "0 25px 50px -12px bg-black "}}
     >
      <div className='px-4 py-5 sm:p-6'>
        <span className='flex items-center text-sm font-medium text-white-700'>
            <Icon size={20}  className="mr-2  text-gray-900" style={{color}}/> 
           <span className='text-gray-900'>{name}</span> 
        </span>
        <p className='mt-1 text-3xl font-semibold text-black'>{value}</p>
      </div>
    </div>
  )
}

export default StatCard
