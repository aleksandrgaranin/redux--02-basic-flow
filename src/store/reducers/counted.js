
import * as actionTypes from '../actions/actionTypes'
import { updateObject } from '../utility'

const initiaState = {
    counter: 0    
}


const reducer = (state = initiaState, action) => {
    switch(action.type){
        case actionTypes.INCREMENT:{
            // const newState = Object.assign({}, state); // this is the same as ...state
            // newState.counter =  state.counter + 1
            // return newState;
            return updateObject(state, {counter: state.counter + 1})
        }
        case actionTypes.DECREMENT:{
            return updateObject(state, {counter: state.counter - 1})
        }
        case actionTypes.ADD:{
            return updateObject(state, {counter: state.counter + action.val})
        }
        case actionTypes.SUBTRACT:{
            return updateObject(state, {counter: state.counter - action.val})
        }
        default:
            return state       
    }
   
}

export default reducer;