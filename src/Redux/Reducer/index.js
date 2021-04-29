import {combineReducers} from 'redux';
import {CourseReducer} from "./CourseReducer";

const rootReducer = combineReducers({
    Course:CourseReducer
});

export default rootReducer;