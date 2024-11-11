'use client'

import Link from 'next/link';
import React from 'react';
import style from './ActiveLink.module.css';
import { usePathname } from 'next/navigation';

interface props {
    path: string;
    text: string;
}

export const ActiveLinkj = ({ path, text}: props) => {

    const pathName = usePathname();
    console.log(pathName)
  return (
    <Link 
    className= { `${style.link} ${ pathName == path &&  style['active-link']}` }
    href={ path}>
    {text}
    </Link>
  )
}
