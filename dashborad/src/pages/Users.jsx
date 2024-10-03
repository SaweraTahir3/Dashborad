import React from 'react'
import Header from '../Componenets/Header/Header'
import StatCard from '../Componenets/StatCard/StatCard'
import { UsersIcon } from 'lucide-react'
const Users = () => {
  return (
    <div>
       <div className=' flex-1 overflow-auto relative z-10'>
       <Header tittle='Users' />
       <main className='max-w-7xl mx-auto bg-gray-100 py-6 px-4 lg:px-8'>
 <div className=' grid grid-cols-1 lg:grid-cols-2 gap-8'>
 <StatCard  name='Total User'  icon={UsersIcon} 
 value={userStats.totalusers.toLocaleString()}
 color='purple'
/>
<StatCard   />


 </div>


       </main>
       </div>
    </div>
  )
}

export default Users
