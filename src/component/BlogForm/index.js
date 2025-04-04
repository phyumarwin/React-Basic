import React, { useState } from 'react'
import './index.css'

export default function BlogForm({addBlog}) {
    const [title, setTitle] = useState("")
    const resetForm = () => {
        setTitle('');
    }
    const upload_blog = (e) => {
        e.preventDefault();
        const blog = {
        id : Math.floor(Math.random()*10000),
        title : title
        }
        resetForm();
        addBlog(blog);
    }
    
    return (
        <form className='blog-form' onSubmit={upload_blog}>
            <h1>Create New Blog</h1>
            <div className='form-control'>
                <label>Title</label>
                <input type='text' onChange={(e)=>setTitle(e.target.value)} value={title}></input>
            </div>
            <div className='form-control'>
                <button type='submit'>Create</button>
            </div>
        </form>
    )
}
