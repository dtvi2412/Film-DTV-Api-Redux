import React, { useEffect, useRef, useState } from 'react';
import './Header.scss';
import logo from '../../Assets/Image/logo-textWhite.png';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import { useDispatch, useSelector } from 'react-redux';
import { createAction } from '../../Redux/Action';
import CancelIcon from '@material-ui/icons/Cancel';
import ClearIcon from '@material-ui/icons/Clear';
import { fetchCourseDetail } from '../../Redux/Action/courseAction';
import MenuIcon from '@material-ui/icons/Menu';
function Header(props) {
  //Scroll Header
  const [header, setHeader] = useState(false);
  const [hambuger, setHambuger] = useState(false);
  const dispatch = useDispatch();
  //Value Input
  const [input, setInput] = useState('');
  const inputEl = useRef(null);

  const dataFilm = useSelector((state) => state.Course.dataFilm);

  //Scroll Header
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        setHeader(true);
      } else {
        setHeader(false);
      }
    });
  }, []);

  //Dispatch Id Store
  const handleDispatchIdItem = (id) => {
    setInput('');
    inputEl.current.value = '';
    dispatch(fetchCourseDetail(id));
  };

  //Handle Change Input
  const handleChangeInput = (e) => {
    let valueInput = e.target.value;
    setInput(valueInput);
  };
  const handleDispatchValueInput = () => {
    setInput('');
    inputEl.current.value = '';
    dispatch(createAction('VALUE-INPUT-SEARCH', input));
  };
  //Handle Clear Input
  const handleClearInput = () => {
    setInput('');
    inputEl.current.value = '';
  };
  //Render List Search DataFilm 3 ITEM
  const renderListSearch = () => {
    return dataFilm
      .filter((val) => {
        if (input === '') {
          return val;
        } else if (val.tenPhim.toLowerCase().includes(input.toLowerCase())) {
          return val;
        }
      })
      .slice(0, 3)
      .map((item) => {
        return (
          <Link
            to={`/course-detail/${item.maPhim}`}
            onClick={() => handleDispatchIdItem(item.maPhim)}
          >
            <div className="header__search__dataSearch__item" key={item.maPhim}>
              <img src={item.hinhAnh} alt={`hinh-search-${item.maPhim}`} />
              <h1>{item.tenPhim}</h1>
            </div>
          </Link>
        );
      });
  };
  //Handle Close Header
  const handleCloseHeader = () => {
    let headerEl = document.querySelector('#header');
    headerEl.setAttribute('style', ' transform: translateX(-400px)');
    setTimeout(() => {
      setHambuger(true);
    }, 300);
  };
  return (
    <React.Fragment>
      {!hambuger ? (
        <header id="header" className={`header  ${header && 'headerBgBlack'}`}>
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
              ref={inputEl}
            />
            {/* Search Icon */}
            <div
              className="header__search__icon"
              onClick={() => handleDispatchValueInput()}
            >
              <SearchIcon />
            </div>
            {/* Clear Icon */}
            {input !== '' && (
              <div
                className="header__search__clearInput"
                onClick={() => handleClearInput()}
              >
                <ClearIcon />
              </div>
            )}

            {/* Render 3 ITEM SEARCH */}
            {input !== '' && (
              <div className="header__search__dataSearch">
                {renderListSearch()}
              </div>
            )}
          </div>
          <div
            className={`header__iconClose  ${
              header && 'headerBgBlack__iconClose'
            }`}
            onClick={() => handleCloseHeader()}
          >
            <CancelIcon />
          </div>
        </header>
      ) : (
        <div className="menuHambuger" onClick={() => setHambuger(false)}>
          <MenuIcon />
        </div>
      )}
    </React.Fragment>
  );
}

export default Header;
