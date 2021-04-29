import {createAction} from "./index";
import { courseService } from "../../Service"

export const fetchCourse = () =>{
    return (dispatch) =>{
        courseService.fetchCourse().then(rs=>{
            dispatch(createAction('DATA-FILM',rs.data));
        }).catch(err=>{
            console.log("err=>>>",err);
        })
    }
}
export const fetchCourseDetail = (id) => {
    return (dispatch) => {
        courseService.fetchCourseDetail(id).then(rs=>{
            dispatch(createAction('DATA-FILM-DETAIL',rs.data));
            // console.log(rs.data);
        }).catch(
            err=>{
                console.log("err=>>>>",err);
            }
        );
    }
}
export const resetCourseDetailNull = () => {
    return (dispatch ) => {
        dispatch(createAction("RESET-DATA-FILM-DETAIL-NULL",{}));
    }
}