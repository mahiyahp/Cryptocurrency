import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './navbar.scss';

function Navbar() {
  const [click, setClick] = useState(false);

  return (
    <div>
      <nav>
        <div>
          <Link to='/'>
            <img className='logo' src="/logo.png" alt="logo" />
          </Link>
        </div>

        <div>
          <ul id='navbar' className={click ? "#navbar active" : "#navbar"}>
            <li>
              <Link to='/'><a>Home</a></Link>
              <Link to='/'><a>Exchanges</a></Link>
              <Link to='/'><a>Community</a></Link>
              <Link to='/'><a>Learn</a></Link>
            </li>
          </ul>
        </div>

        <div id='mobile' >
          <i
            id='bar'
            className={click ? 'fas fa-times' : 'fas fa-bars'}
            onClick={() => setClick(!click)}
          ></i>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;