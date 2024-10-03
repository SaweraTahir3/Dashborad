import React from 'react'

const Header = ({tittle}) => {
  return (
    <header className=' bg-purple-900 backdrop-blur-md shadow-lg border-b hover:border-purple-950  cursure-pointer hover:bg-purple-600 '>
    <div className='max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8'>
<h1 className='text-2xl font-semibold text-white '> {tittle}</h1>
      </div>
    </header>
  )
}

export default Header
