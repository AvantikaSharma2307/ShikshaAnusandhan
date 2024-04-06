import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import Home from './Home'
import { useState } from 'react'

export default function Dashboard({ userData }) {
    const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

    const OpenSidebar = () => {
      setOpenSidebarToggle(!openSidebarToggle)
    }
    // const [userName, setUserName] = useState('');
  return (
<div className='grid-container'>
      <Header OpenSidebar={OpenSidebar}/>
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
      <Home userData={userData}/>
    </div>
  )
}
