import React, { useEffect, useState } from 'react';
import './Header.scss';
import logo from '../../Assets/Image/logo-textWhite.png';
import { Link } from 'react-router-dom';
function Header() {
  //Scroll Header
  const [header, setHeader] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        setHeader(true);
      } else {
        setHeader(false);
      }
    });
  }, []);
  return (
    <header className={`header  ${header && 'headerBgBlack'}`}>
      <div className="header__logo">
        <Link to="/">
          <img src={logo} alt={`logo`} />
        </Link>
      </div>
      <ul className="header__list">
        <li>
          <a href="#">HOME</a>
        </li>
        <li>
          <a href="#">CONTACT</a>
        </li>
        <li>
          <a href="#">HELP</a>
        </li>
      </ul>
    </header>
  );
}

export default Header;
