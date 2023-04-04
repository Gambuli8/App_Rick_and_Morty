import { ADD_FAVORITE, DELETE_FAVORITE, GET_FAVORITES} from './actions';

const inicialState = {
    myFavorite: [],
}

const rootReducer = (state=inicialState, action) => {
    switch(action.type){

        case ADD_FAVORITE:
            return{ 
                ...state,
                myFavorite: [...state.myFavorite, action.payload],
            };

        case DELETE_FAVORITE:
            return {
                ...state,
                myFavorite: state.myFavorite.filter((char) => char.id !== action.payload),
            };

        case GET_FAVORITES:
            return {
                ...state,
                myFavorite: action.payload,
            };
        default:
        return {...state};
    }
};


export default rootReducer;