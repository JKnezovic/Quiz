const intialState = {
  answer:{
    title:"",
    message:"",
  },
  fetching:false,
  fetched:false,
  error:null,
}
export default function answer(state=intialState, action){

    switch (action.type) {
      case "FETCH_ANSWER":{
        return {...state,fetching:true}
      }
      case "FETCH_ANSWER_REJECTED":{
        return {...state,fetching:false,error:action.payload}
      }
      case "FETCH_ANSWER_FULFILLED":{
        return {
          ...state,
          fetching:true,
          fetched:true,
          answer:action.payload,
        }
      }
      case "RESET_STORE":{
        return {
          ...state,
          fetching:false,
          fetched:false,
          answer:action.payload,
        }
      }
      default:
      return state
    }
}
