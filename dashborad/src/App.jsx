
import React from "react"
import { Route, Routes } from "react-router-dom"
import Product from "./pages/Product"
import OverViewPage from "./pages/OverViewPage"
import SideBar from "./Componenets/SideBar/SideBar"
import User from './pages/Users'


function App() {
  

  return (
    <>
    <div className="flex  h-screen bg-gray-100  text-white overflow-hidden">
    <div className=" fixed inset-0 z-0">
    <div className="absolute inset-0 bg-gradient-to-br "/>
<div className="absoulate  inset-0 backdrop-blur-sm"/>
    </div>
    <SideBar/>
    <Routes>
      <Route path="/" element={<OverViewPage/>}/>
      <Route path="/product" element={<Product/>}/>
      <Route path="/users" element={<User/>}/>
    </Routes>

    </div>
    
      
    </>
  )
}

export default App
