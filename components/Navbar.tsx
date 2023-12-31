'use client'
import React, { useState } from 'react'
import Link from 'next/link'

const Navbar = () => {

  const [activeTab, setActiveTab] = useState('')

  return (
    <div>
      <ul className='flex justify-between m-10 items-center'>
        <div>
          <Link href="/">
            <li
              style={{ color: activeTab === 'home' ? 'purple' : 'white' }}
              onClick={() => setActiveTab('home')}
            >
              Home
            </li>
          </Link>
        </div>
        <div className='flex gap-10'>
          <Link href="/todo">
            <li
              style={{ color: activeTab === 'todo' ? 'purple' : 'white' }}
              onClick={() => setActiveTab('todo')}
            >
              Todo
            </li>
          </Link>
          <Link href="/about">
            <li
              style={{ color: activeTab === 'about' ? 'purple' : 'white' }}
              onClick={() => setActiveTab('about')}
            >
              About
            </li>
          </Link>
          <Link href="/contact">
            <li
              style={{ color: activeTab === 'contact' ? 'purple' : 'white' }}
              onClick={() => setActiveTab('contact')}
            >
              Contact
            </li>
          </Link>
        </div>
      </ul>
    </div>
  )
}

export default Navbar
