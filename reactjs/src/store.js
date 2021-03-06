import {applyMiddleware,createStore} from 'redux'

import reducer from './reducers/combineReducers.js'

import {createLogger} from "redux-logger"
import thunk from "redux-thunk"
import promise from "redux-promise-middleware"

const middleware = applyMiddleware(promise(), thunk, createLogger())

export default createStore(reducer, middleware)
