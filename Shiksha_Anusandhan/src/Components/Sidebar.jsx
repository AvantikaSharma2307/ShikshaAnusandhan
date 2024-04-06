import React from 'react'
import 
{BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, 
  BsListCheck, BsMenuButtonWideFill, BsFillGearFill}
 from 'react-icons/bs'
 import { NavLink } from 'react-router-dom';

function Sidebar({openSidebarToggle, OpenSidebar,username}) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
        <div className='sidebar-title'>
            <div className='sidebar-brand'>
                <p>SHIKSHA_ANUSANDHAN</p>
            </div>
            <span className='icon close_icon' onClick={OpenSidebar}>X</span>
        </div>

        <ul className='sidebar-list'>
        
            <li className='sidebar-list-item'>
            <NavLink to="/dasboard">
                    <BsGrid1X2Fill className='icon'/> Dashboard
               </NavLink> 
            </li>
        
            <li className='sidebar-list-item'>
                <a href="#skills">
                    <BsFillArchiveFill className='icon'/>Skills
                </a>
            </li>
            {/* <li className='sidebar-list-item'>
                <a href="">
                    <BsFillGrid3X3GapFill className='icon'/> Categories
                </a>
            </li> */}
            {/* <li className='sidebar-list-item'>
                <a href="">
                    <BsPeopleFill className='icon'/> Customers
                </a>
            </li> */}
            {/* <li className='sidebar-list-item'>
                <a href="">
                    <BsListCheck className='icon'/> Inventory
                </a>
            </li> */}
            <li className='sidebar-list-item'>
                <NavLink to="/resume">
                    <BsMenuButtonWideFill className='icon'/> Resume
                </NavLink>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsFillGearFill className='icon'/> Setting
                </a>
            </li>
            <li className='sidebar-list-item'>
            <NavLink to="/profile">
                    <BsFillGearFill className='icon'/> Profile
                </NavLink>
            </li>
        </ul>
    </aside>
  )
}

export default Sidebar;