import React, { useEffect, useState, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchCourseDetail,
  resetCourseDetailNull,
} from '../../Redux/Action/courseAction';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import CancelPresentationIcon from '@material-ui/icons/CancelPresentation';
import ReactPlayer from 'react-player/youtube';
import './CourseItemDetail.scss';

const ItemDetail = React.lazy(
  () => import('../../Components/CourseItemDetail/CourseItemDetail'),
  5000
);

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

  const handleSetUpPlayer = () => {
    setPopupPlayer(true);
  };
  return (
    <React.Fragment>
      {' '}
      <Suspense
        fallback={
          <div
            style={{
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(0,0,0,0.7)',
              position: 'fixed',
              top: 0,
              left: 0,
              color: '#fff',
              textAlign: 'center',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              fontSize: '3rem',
            }}
          >
            loading..
          </div>
        }
      >
        {dataDetail !== {} ? (
          <div className="courseItemDetail">
            <ItemDetail
              dataDetail={dataDetail}
              handleSetUpPlayer={handleSetUpPlayer}
            />
            {/* <div className="courseItemDetail__item">
              <div
                className="courseItemDetail__item__image"
                onClick={() => {
                  setPopupPlayer(true);
                }}
              >
                <img
                  src={dataDetail.hinhAnh}
                  alt={`hinh-${dataDetail.maPhim}`}
                />
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
            </div> */}

            {popupPlayer && (
              <div className="courseItemDetail__popupPlayer">
                <div className="courseItemDetail__popupPlayer__video">
                  <ReactPlayer
                    // width="880px"
                    // height="420px"
                    width="100%"
                    height="100%"
                    controls
                    url={dataDetail.trailer}
                  />
                </div>
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
          <div className="loading">
            <h1>LOADING...</h1>
          </div>
        )}{' '}
      </Suspense>
    </React.Fragment>
  );
}

export default CourseItemDetail;
