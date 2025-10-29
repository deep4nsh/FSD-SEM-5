import React from 'react'
import './navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <div className="navbar-logo">
          <h1>NETFLIX</h1>
        </div>
        <div className="navbar-links">
          <a href="https://dictionary.cambridge.org/dictionary/english/home">Home</a>
          <a href="#">TV Shows</a>
          <a href="#">Movies</a>
          <a href="#">New & Popular</a>
          <a href="#">My List</a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar