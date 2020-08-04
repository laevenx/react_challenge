import {combineReducers} from 'redux'
import mealsReducers from './mealsReducers'
import favoritesReducers from './favoritesReducers'

const rootReducers = combineReducers({
    meals: mealsReducers,
    favorites: favoritesReducers
})

export default rootReducers