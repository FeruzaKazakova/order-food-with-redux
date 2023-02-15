export const mealsActionTypes = {
    GET_MEALS: "GET_MEALS",
}

const initialState = {
    meals: [],
    isLoading: false
}

export const mealsReducer = (state=initialState, action) => {
    switch(action.type){
        case mealsActionTypes.GET_MEALS:
            return{
                ...state,
                meals: action.payload,
                isLoading: false
            }
        default:
            return state
    }
}