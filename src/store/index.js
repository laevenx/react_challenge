import {createStore,applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'
import rootReducers from './reducers/rootReducers'

const store =  createStore(rootReducers, applyMiddleware(thunkMiddleware))
window.store = store

export default store 
