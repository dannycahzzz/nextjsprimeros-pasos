import Link from 'next/link'
import React from 'react'
import {HomeIcon} from '@primer/octicons-react'
import { ActiveLinkj } from '../active-link/ActiveLinkj'

const navItems = [
    {path: '/general/about', text: 'About'},
    {path: '/general/Pricing', text: 'Pricing'},
    {path: '/general/Contact', text: 'Contact'}
]

export const Navbar = () => {
  return (
    <nav className='flex bg-blue-700 bg-opacity-30 p-2 m-2 rounded'>
        <Link href='/' className='flex items-center'>
        <HomeIcon className='mr-1'/>
            <span >Home</span>
        </Link>
        <div className='flex flex-1'></div>
        {    
            navItems.map(navItem =>(
            <ActiveLinkj key={navItem.path} { ...navItem}/>
        ))
    }
        
    </nav>
  )
}
