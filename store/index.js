import { createStore,applyMiddleware, combineReducers } from "redux";
import thunk from 'redux-thunk'
import homeReducer from '../src/container/Home/store'

const reducer = combineReducers({
  home: homeReducer
})

export const getStore = () => {
  return createStore(reducer,applyMiddleware(thunk))
}

export const getClientStore = () => {
  return createStore(reducer,window.ctx,applyMiddleware(thunk))
}
