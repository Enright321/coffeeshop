import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';

const Header = () => {
  return (
    <header id='header'>
      <div className='container'>
        <div className='row'>
          <h2>The Coffee Company</h2>
          <ul className='row'>
            <li>
              <Link
                style={{ cursor: 'pointer' }}
                to='/'
                activeClass='active'
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                style={{ cursor: 'pointer' }}
                to='sec-2'
                cursor='pointer'
                activeClass='active'
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                style={{ cursor: 'pointer' }}
                to='sec-3'
                activeClass='active'
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Locations
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
