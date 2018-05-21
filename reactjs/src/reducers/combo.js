import {combineReducers} from 'redux'

import { reducer as formReducer } from 'redux-form'
import answer from './answerReducer'


export default combineReducers({
  answer,
  form: formReducer
})
