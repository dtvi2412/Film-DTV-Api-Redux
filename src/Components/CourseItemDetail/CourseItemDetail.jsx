import React from 'react';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
function CourseItemDetail({ dataDetail, handleSetUpPlayer }) {
  return (
    <div className="courseItemDetail__item">
      <div
        className="courseItemDetail__item__image"
        onClick={() => {
          handleSetUpPlayer();
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
      <h1 className="courseItemDetail__item__nameFilm">{dataDetail.tenPhim}</h1>
      <p className="courseItemDetail__item__description">{dataDetail.moTa}</p>
    </div>
  );
}

export default CourseItemDetail;
