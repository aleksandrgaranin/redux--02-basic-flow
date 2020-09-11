const initiaState = {
    counter: 0,
    results: []
}


const reducer = (state = initiaState, action) => {
    switch(action.type){
        case 'INCREMENT':{
            const newState = Object.assign({}, state); // this is the same as ...state
            newState.counter =  state.counter + 1
            return newState;
        }
        case 'DECREMENT':{
            return{
                ...state,
                counter: state.counter - 1
            }
        }
        case 'ADD':{
            return{
                ...state,
                counter: state.counter + action.val
            }
        }
        case 'SUBTRACT':{
            return{
                ...state,
                counter: state.counter - action.val
            }
        }
        case 'STORE_RESULT': {
            return{
                ...state,
                results: state.results.concat({id: new Date(), value: state.counter})                
            }
        }
        case 'DELETE_RESULT': {
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