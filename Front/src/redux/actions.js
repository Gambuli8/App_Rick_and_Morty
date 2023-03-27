export const ADD_FAVORITE = 'ADD_FAVORITE';
export const DELETE_FAVORITE = 'REMOVE_FAVORITE';
export const CLEAR_FAVORITE = 'CLEAR_FAVORITE';

export const addFavorite = (character) => {
    return {type:ADD_FAVORITE, payload: character};
};

export const deleteFavorite = (id) => {
    return {type: DELETE_FAVORITE, payload: id};
};
