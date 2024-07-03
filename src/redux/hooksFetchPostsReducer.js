import { CREATE_HOOKS_FETCHED_POST } from "./types"

const hooksFetchPostsReducer = (state =[], action) => {
    switch (action.type) {
        case CREATE_HOOKS_FETCHED_POST: 
            return action.payload;
        default:
            return state;
    }
};

export { hooksFetchPostsReducer }