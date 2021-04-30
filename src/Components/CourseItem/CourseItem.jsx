import React from 'react';

import { Link } from 'react-router-dom';
import DetailsIcon from '@material-ui/icons/Details';
import './CourseItem.scss';
function CourseItem({ item }, props) {
  return (
    <div className="courseItem">
      <div className="courseItem__image">
        <Link to={`/course-detail/${item.maPhim}`}>
          <img src={item.hinhAnh} alt={`hinh-${item.tenPhim}`} />{' '}
          <div className="courseItem__image__icon">
            <DetailsIcon />
          </div>
        </Link>
      </div>
      <h1 className="courseItem__nameFilm">{item.tenPhim}</h1>
      <div className="courseItem__rate">{item.danhGia}</div>{' '}
    </div>
  );
}

export default CourseItem;
