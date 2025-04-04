import './App.css';
import { useState } from 'react';
import Navbar from './component/nav/index';
import BlogLists from './component/blogLists/index';
import BlogForm from './component/BlogForm/index';
import Modal from './component/Modal/index';


function App() {
  const [showModal, setShowModal] = useState(false);
  const [blogs, setBlogs] = useState([
    {
      id : 1,
      title : 'First Blog'
    },
    {
      id : 2,
      title : 'Second Blog'
    },
    {
      id : 3,
      title : 'Third Blog'
    }
  ]);
  const addBlog = (blog) => {
    setBlogs((prevState => [...prevState, blog]))
    setShowModal(false)
  }
  return (
    <>
      <Navbar setShowModal = {setShowModal}/>
      <BlogLists blogs = {blogs}/>
      {showModal &&
        <Modal setShowModal={setShowModal}>
          <BlogForm addBlog={addBlog}/>
        </Modal>
      }
    </>
  );
}

export default App;
