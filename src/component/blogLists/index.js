import React from 'react'
import './index.css'

export default function BlogLists({blogs}) {
  return (
    <div className='blogLists container'>
      {
        blogs.map(blog => (
          <div className='single_blog' key={blog.id}>{blog.title}</div>
        ))
      }    
    </div>
  )
}
