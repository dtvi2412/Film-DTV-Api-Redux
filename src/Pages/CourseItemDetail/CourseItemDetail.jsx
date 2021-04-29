import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchCourseDetail,
  resetCourseDetailNull,
} from '../../Redux/Action/courseAction';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import CancelPresentationIcon from '@material-ui/icons/CancelPresentation';
import ReactPlayer from 'react-player/youtube';
import './CourseItemDetail.scss';
function CourseItemDetail(props) {
  let dataDetail = useSelector((state) => state.Course.dataFilmDetail);

  const dispatch = useDispatch();

  const [popupPlayer, setPopupPlayer] = useState(false);

  // const { id } = useParams();
  useEffect(() => {
    const { id } = props.match.params;
    dispatch(fetchCourseDetail(id));
    return () => {
      dispatch(resetCourseDetailNull());
    };
  }, []);

  return (
    <React.Fragment>
      {dataDetail !== {} ? (
        <div className="courseItemDetail">
          <div className="courseItemDetail__item">
            <div
              className="courseItemDetail__item__image"
              onClick={() => {
                setPopupPlayer(true);
              }}
            >
              <img src={dataDetail.hinhAnh} alt={`hinh-${dataDetail.maPhim}`} />
              <div className="courseItemDetail__item__image__trailer">
                <div className="courseItemDetail__item__image__trailer__icon">
                  <PlayCircleOutlineIcon />
                </div>
              </div>
              <div className="courseItemDetail__item__image__rate">
                {dataDetail.danhGia}
              </div>
            </div>
            <h1 className="courseItemDetail__item__nameFilm">
              {dataDetail.tenPhim}
            </h1>
            <p className="courseItemDetail__item__description">
              {dataDetail.moTa}
            </p>
          </div>
          {popupPlayer && (
            <div className="courseItemDetail__popupPlayer">
              <ReactPlayer
                width="880px"
                height="420px"
                controls
                url={dataDetail.trailer}
              />
              <div
                className="courseItemDetail__popupPlayer__icon"
                onClick={() => setPopupPlayer(false)}
              >
                <CancelPresentationIcon />
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="waiting">'WAITING'</div>
      )}
    </React.Fragment>
  );
}

export default CourseItemDetail;
