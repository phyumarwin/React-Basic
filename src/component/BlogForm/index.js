import React, { useState } from 'react'
import './index.css'

export default function BlogForm({addBlog}) {
    const [title, setTitle] = useState("")
    const [status, setStatus] = useState("upcoming")
    const resetForm = () => {
        setTitle('');
    }
    const upload_blog = (e) => {
        e.preventDefault();
        const blog = {
        id : Math.floor(Math.random()*10000),
        title : title,
        status : status
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
                <label>Status</label>
                <select value={status} onChange={(e)=>setStatus(e.target.value)}>
                    <option value={"dropped"}>Dropped</option>
                    <option value={"ongoing"}>Ongoing</option>
                    <option value={"upcoming"}>Upcoming</option>
                </select>
            </div>
            <div className='form-control'>
                <button type='submit'>Create</button>
            </div>
        </form>
    )
}
