import React from 'react'
import "./header.scss"

export default function header() {
  return (
    <div className='header'>header
        <div className='logo'>
            logo
        </div>
        <div className='navigation'>
            <a className='Home' href="">Home</a>
            <a className='About' href="">About</a>
            <a className='Contact' href="">Contact</a>
        </div>
    </div>
  )
}
