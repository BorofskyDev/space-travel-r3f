import { useState, useEffect, useRef } from 'react'
import logo from '../../assets/images/logo.svg'

function Navbar() {
  const [open, setOpen] = useState(false)
  const menuRef = useRef()
  useEffect(() => {
    const handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => {
      document.removeEventListener('mousedown', handler)
    }
  })
  return (
    <div className='Navbar'>
      <div className='Navbar__container' ref={menuRef}>
        <div
          className='Navbar__trigger'
          onClick={() => {
            setOpen(!open)
          }}
        >
          <img src={logo} alt='SOLIT Logo' className='Navbar__trigger--logo' />
        </div>
        <nav className={`Navbar__menu dark-glass ${open ? 'active' : 'inactive'}`}>
          <h3 className='Navbar__header'>
            SOLIT
            <br />
          </h3>
            <p className='Navbar__header--subtitle'>Space Travel</p>
          <ul className='Navbar__items'>
            <li className='Navbar__item'>
              <a href='#' className='Navbar__item--link'>
                Home
              </a>
            </li>
            <li className='Navbar__item'>
              <a href='#' className='Navbar__item--link'>
                Destinations
              </a>
            </li>
            <li className='Navbar__item'>
              <a href='#' className='Navbar__item--link'>
                Crew
              </a>
            </li>
            <li className='Navbar__item'>
              <a href='#' className='Navbar__item--link'>
                Technology
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Navbar
