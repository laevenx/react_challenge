import axios from 'axios'
import {
    FETCH_MEAL_REQUEST,
    FETCH_MEAL_SUCCESS,
    FETCH_MEAL_FAILURE
} from './mealsType'

export const fetchMeals = search => {
    return (dispatch) => {
        dispatch(fetchMealRequest())
        if(!search){
            axios
            .get('https://www.themealdb.com/api/json/v1/1/random.php')
            .then(response => {
                console.log(response.data)
                const meal = response.data.meals
                dispatch(fetchMealSuccess(meal))
            })
            .catch(error => {
                dispatch(fetchMealFailure(error.message))
            })
        }else{
            axios
            .get(`https://www.themealdb.com/api/json/v1/1/search.php?f=${search}`)
            .then(response => {
                console.log(response.data)
                const meal = response.data.meals
                dispatch(fetchMealSuccess(meal))
            })
            .catch(error => {
                dispatch(fetchMealFailure(error.message))
            })
        }
        
    }
}

export const fetchMealRequest = () => {
    return {
        type: FETCH_MEAL_REQUEST
    }
}
export const fetchMealSuccess = meal => {
    return {
        type: FETCH_MEAL_SUCCESS,
        payload: meal
    }
}

export const fetchMealFailure = error => {
    return {
        type: FETCH_MEAL_FAILURE,
        payload: error
    }
}
