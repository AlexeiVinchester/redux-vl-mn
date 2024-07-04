import { ERROR_LOADER, ERROR_HIDE } from "./types"

const initialState = {
    error: null
};

const errorReducer = (state = initialState, action) => {
    switch (action.type) {
        case ERROR_LOADER: 
            return {
                ...state, 
                error: action.payload
            };
        case ERROR_HIDE:
            return {
                ...state,
                error: null
            };
        default: 
            return state;
    }
} 

export { errorReducer };