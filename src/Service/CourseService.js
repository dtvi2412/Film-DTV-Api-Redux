import Axios from "axios";
class CourseService{
    fetchCourse(){
        return Axios({
            method: 'GET',
            url:
              'https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP07',
        });
    };
    fetchCourseDetail(id){
        return Axios({
            method:'GET',
            url:`https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=${id}`
        })
    }
}
export default CourseService;