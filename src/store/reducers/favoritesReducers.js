import {
    FETCH_FAVORITES_REQUEST,
    FETCH_FAVORITES_SUCCESS,
    FETCH_FAVORITES_FAILURE,
    ADD_FAVORITES,
    REMOVE_FAVORITE
} from '../actions/favoritesType'

const initialState = {
    loading: false,
    favorites: [],
    error: ''
}

const favoritesReducers = (state = initialState, action) => {
    const { type, payload } = action
    switch (type) {
        case FETCH_FAVORITES_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_FAVORITES_SUCCESS:
            return {
                loading: false,
                favorites: payload,
                error: ''
            }
        case FETCH_FAVORITES_FAILURE:
            return {
                loading: false,
                favorites: [],
                error: payload
            }
        case ADD_FAVORITES:
            return {
                loading: false,
                favorites: payload,
                error: ''
            }
        case REMOVE_FAVORITE:
            return {
                loading: false,
                favorites: payload,
                error: ''
            }
        default: return state
    }
}

export default favoritesReducers