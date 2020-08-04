import {
    FETCH_FAVORITES_REQUEST,
    FETCH_FAVORITES_SUCCESS,
    FETCH_FAVORITES_FAILURE,
    ADD_FAVORITES,
    REMOVE_FAVORITE
} from './favoritesType'

export const fetchFavorites = () => {
    return (dispatch) => {
    }
}

export const fetchFavoritesRequest = () => {
    return {
        type: FETCH_FAVORITES_REQUEST
    }
}
export const fetchFavoritesSuccess = favorite => {
    return {
        type: FETCH_FAVORITES_SUCCESS,
        payload: favorite
    }
}

export const fetchFavoritesFailure = error => {
    return {
        type: FETCH_FAVORITES_FAILURE,
        payload: error
    }
}

export const addFavorites = data => {
    return {
        type: ADD_FAVORITES,
        payload: data
    }
}

export const removeFavorite = data => {
    return{
        type: REMOVE_FAVORITE,
        payload: data
    }
}