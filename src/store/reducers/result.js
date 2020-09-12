
import * as actionTypes from '../action'

const initiaState = {   
    results: []
}


const reducer = (state = initiaState, action) => {
    switch(action.type){
        case actionTypes.STORE_RESULT: {
            return{
                ...state,
                results: state.results.concat({id: new Date(), value: action.result})                
            }
        }
        case actionTypes.DELETE_RESULT: {
            // ONE of the way to delet element by id in arrey
            // const id = 2;
            // const newArray = [...state.results]; //copy of results arrey
            // newArray.splice(id, 1)
            const updatedArrey = state.results.filter(result => result.id !== action.resultElId); // state.results.filter((result, index) => index !== id); logic bahind
            return{
                ...state,
                // results: newArray
                results: updatedArrey
            }
        }
    }
    return state;
}

export default reducer;