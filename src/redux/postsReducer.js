import { CTREATE_POST } from "./types";

const postsReducer = (state = [], action) => {
    switch (action.type) {
        case CTREATE_POST: 
            return [
                ...state,
                action.payload
            ]
        default:
            return state;
    }
};

export { postsReducer }