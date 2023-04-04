import axios from 'axios';
export const ADD_FAVORITE = 'ADD_FAVORITE';
export const DELETE_FAVORITE = 'REMOVE_FAVORITE';
export const CLEAR_FAVORITE = 'CLEAR_FAVORITE';
export const GET_FAVORITES = 'GET_FAVORITES';

//  export const addFavorite = (char) => {
//     return {type: ADD_FAVORITE, payload: char};
// }

export const deleteFavorite = (id) => {
       return {type: DELETE_FAVORITE, payload: id};
}

export const getFavorites = () => {
    return async function (dispatch) {
        const URL_BASE = 'http://localhost:3001';
        const response = await axios.get(`${URL_BASE}/rickandmorty/fav`);
        dispatch({type: GET_FAVORITES, payload: response.data});
    }};
