let initialState = {
    dataFilm:[],
    dataFilmDetail:{},
    valueInputSearch:'',
};

export const CourseReducer = (state = initialState , action ) =>{
    switch(action.type){
        case 'DATA-FILM':{
            state.dataFilm = action.payload;
            return {...state};
        }
        case 'DATA-FILM-DETAIL':
            state.dataFilmDetail =  action.payload;
            return {...state};
        case 'RESET-DATA-FILM-DETAIL-NULL':
            state.dataFilmDetail = {};
            return {...state};
        case 'VALUE-INPUT-SEARCH':
            state.valueInputSearch = action.payload;
            return {...state};
        default : return {...state};
    }
    
}
