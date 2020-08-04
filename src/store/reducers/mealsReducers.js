import {
    FETCH_MEAL_REQUEST,
    FETCH_MEAL_SUCCESS,
    FETCH_MEAL_FAILURE
} from '../actions/mealsType'

const initialState = {
    loading: false,
    meals: [],
    error: ''
}

const mealsReducers = (state = initialState, action) => {
    const { type, payload } = action
    switch (type) {
        case FETCH_MEAL_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_MEAL_SUCCESS:
            return {
                loading: false,
                meals: payload,
                error: ''
            }
        case FETCH_MEAL_FAILURE:
            return {
                loading: false,
                meals: [],
                error: payload
            }
    
        default: return state
    }
}

export default mealsReducers