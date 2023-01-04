import actionTypes from "../actionType";

const appReducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.CHANGE_LANGUAGE:
            console.log('hello', action)
            return{
                ...state,
            }
            default:
                return state;
    }
} 