
import { BarChart2, DollarSign, MenuIcon, MenuSquareIcon, Scale, Settings, ShoppingBag, ShoppingCart, TrendingUp, User } from 'lucide-react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const SIDEBAR_TEMS = [
    {
        name: "Overview", icon: BarChart2, color: "#6366f1", href : "/"
    },
    {
        name: "Product", icon: ShoppingBag, color: "#8B5cF6", href: "/product"
    },
    {
        name: "User", icon: User, color: "#EC4899", href: "/users"
    },
    {
        name: "Sales", icon: DollarSign, color: "#10B981", href : "/sales"
    },
    {
        name: "Orders", icon: ShoppingCart, color: "#F59E0B", href: "/orders"
    },
    {
        name: "Analytics", icon: TrendingUp, color: "#3B82f6", href: "/analytics"
    },
    {
        name: "Settings", icon: Settings, color: "#6EE7B7", href : "/settings"
    },
]

const SideBar = () => {
    const [sidebar, setSidebar] = useState(true)
    return (

        <div className={`relative z-10 translate-all duration-300  ease-in-out flex-shrink-0 ${sidebar ? 'w-64' : 'w--20n'}`}
            animate={{ width: sidebar ? 256 : 80 }}
        >
            <div className='h-full bg-white  backdrop-blur-md p-4   text-black flex flex-col border-r '>
                <button whileHover={{ Scale: 1.1 }}
                    whileTap={{ Scale: 0.9 }}
                    onClick={() => setSidebar(!sidebar)}
                    className="p-2 rounded-full hover:bg-yellow-300 translate-colors max-w-fit">
                    <MenuSquareIcon size={24} />
                </button>
                <nav className='mt-8 flex-grow'>
                    {SIDEBAR_TEMS.map((item) => (
                        <Link key={item.href} to={item.href}>
                            <div className='flex item-center p-4 text-sm font-medium  text-black rounded-lg hover:text-white hover:bg-purple-900
                             translate-colors mb-2'>
                            <item.icon size={20} style={{ color: item.color, minWidth: "20px" }} />
                            
                                {sidebar && (<span className=' ml-4 whitespace-nowrap ' initial={{ opacity: 0, width: 0 }}
                                 animate={{ opacity: 0, width: 0 }} exit={{opacity:1 , width: "auto"}} 
                                    transition={{duration:0.2 , delay:0.3}}>
                             {item.name}




                                    </span>
                     ) }
                     </div>   
                     </Link>
                    ))}
                        </nav>
           
        </div>
        </div>
      
                    
                )}  
    


export default SideBar;