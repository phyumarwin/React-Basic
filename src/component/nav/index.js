import React from 'react'
import './index.css'

export default function Navbar({setShowModal}) {
  return (
    <nav>
      <div className='navbar'>
        <div className='container'>
          <h1>Logo</h1>
          <ul>
            <li>Home</li>
            <li>Blogs</li>
            <li onClick={()=>setShowModal(true)}>Create Blog</li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
