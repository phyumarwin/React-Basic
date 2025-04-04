import React from 'react'
import './index.css'
import ReactDOM from 'react-dom'

export default function Modal({ children, danger, setShowModal }) {
  return (
    ReactDOM.createPortal(
      <div className='modal-component'>
        <div className='modal-backdrop'>
          <div className='modal' style={{
            border : '3px solid',
            borderColor : danger ? 'red': 'green'
            }}>{children}
            <button onClick={()=>setShowModal(false)}>Close</button>
          </div>
        </div>
      </div>,document.getElementById('modal')
    )
  )
}
