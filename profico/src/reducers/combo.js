import {combineReducers} from 'redux'
import { reducer as formReducer } from 'redux-form'
import questions from './questionsReducer'


export default combineReducers({
  form: formReducer,
  questions

})
