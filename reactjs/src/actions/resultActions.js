import axios from "axios";


export function fetchResult(values){
  return function (dispatch){
  axios.post("http://swforce.proficodev.com/testme/",values)
  .then((response) => {
    dispatch({type:"FETCH_ANSWER_FULFILLED",payload:response.data})
  })
  .catch((err) => {
    dispatch({type:"FETCH_ANSWER_REJECTED",payload:err})
  })
  }
}
