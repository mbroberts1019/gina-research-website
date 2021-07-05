import React, { useState } from 'react'
import { Link } from 'gatsby'
import githubIcon from '../img/github-icon.svg'
import logo from '../img/sign.svg'

const Navbar = () => {
  const [hamburgerState, setHamburgerState] = useState('')

  const toggleHamburger = () => {
    // toggle the active boolean in the state
    (hamburgerState == '') ? setHamburgerState('is-active') : setHamburgerState('')
  }

  return (
    <nav
      className="navbar is-transparent"
      role="navigation"
      aria-label="main-navigation"
    >
      <div className="container">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item" title="Logo">
            <img src={logo} alt="Sign" style={{ width: '100px' }} />
          </Link>
          {/* Hamburger menu */}
          <div
            className={`navbar-burger burger ${hamburgerState}`}
            data-target="navMenu"
            onClick={() => toggleHamburger()}
            onKeyDown={() => toggleHamburger()}
            role='button'
            tabIndex={0}
          >
            <span />
            <span />
            <span />
          </div>
        </div>
        <div
          id="navMenu"
          className={`navbar-menu ${hamburgerState}`}
        >
          <div className="navbar-start has-text-centered">
            <Link className="navbar-item" to="/about">
              Stuff
            </Link>
            <Link className="navbar-item" to="/shinies">
              Interactive Shinies
            </Link>
            <div className="navbar-item">
              <a
                className="navbar-item"
                href="https://github.com/vanichols"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="icon">
                  <img src={githubIcon} alt="Github icon" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )

}

export default Navbar
