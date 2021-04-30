import React, { useEffect, useState } from 'react';
import './Header.scss';
import logo from '../../Assets/Image/logo-textWhite.png';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import { useDispatch } from 'react-redux';
import { createAction } from '../../Redux/Action';
import CancelIcon from '@material-ui/icons/Cancel';
function Header() {
  //Scroll Header
  const [header, setHeader] = useState(false);
  const dispath = useDispatch();
  //Value Input
  const [input, setInput] = useState('');
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        setHeader(true);
      } else {
        setHeader(false);
      }
    });
  }, []);

  //Handle Change Input
  const handleChangeInput = (e) => {
    let valueInput = e.target.value;
    setInput(valueInput);
  };
  const handleDispatchValueInput = () => {
    dispath(createAction('VALUE-INPUT-SEARCH', input));
  };
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
      <div className="header__search">
        <input
          placeholder="Tìm kiếm gì đó..."
          onChange={(e) => {
            handleChangeInput(e);
          }}
        />
        <div
          className="header__search__icon"
          onClick={() => handleDispatchValueInput()}
        >
          <SearchIcon />
        </div>
      </div>
      <div
        className={`header__iconClose  ${header && 'headerBgBlack__iconClose'}`}
      >
        <CancelIcon />
      </div>
    </header>
  );
}

export default Header;
