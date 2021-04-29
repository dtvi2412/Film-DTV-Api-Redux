import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchCourse } from '../../Redux/Action/courseAction';
import CourseItem from '../CourseItem/CourseItem';

import './Course.scss';
function Course() {
  //Get Data Redux Store
  const getDataFilm = useSelector((data) => data.Course.dataFilm);

  //Location Slice
  const [location, setLocation] = useState(9);
  //Dispatch Data API down REDUX STORE
  const dispath = useDispatch();
  useEffect(() => {
    //Dispath Store Redux
    dispath(fetchCourse());
  }, []);

  //Render Data Film
  const renderDataFilm = () => {
    if (getDataFilm !== []) {
      return getDataFilm.slice(0, location).map((item, index) => {
        return <CourseItem key={item.maPhim} item={item} />;
      });
    }
  };
  //Handle View More
  const handleViewMore = () => {
    const lengthArrCourse = getDataFilm.length;
    if (location < lengthArrCourse) {
      setLocation(location + 6);
    }
  };
  return (
    <React.Fragment>
      <div className="course">{renderDataFilm()}</div>
      {location < getDataFilm.length && (
        <div className="view-more" onClick={() => handleViewMore()}>
          XEM THÊM
        </div>
      )}
    </React.Fragment>
  );
}

export default Course;
