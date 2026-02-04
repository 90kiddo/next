import Link from 'next/link';
import React from 'react'

 const Navigation = () => {
  return (
    <header className='flex justify-between items-center'>
        <div>logo</div>
        <nav>
        <ul className='flex gap-4'>
            <li><Link href="./">Home</Link></li>
            <li><Link href="./about">About</Link></li>
            <li><Link href="./service">Service</Link></li>
            <li><Link href="./contact">Contact</Link></li>
           
        </ul>
        </nav>
    </header>
  )
}

export default Navigation;