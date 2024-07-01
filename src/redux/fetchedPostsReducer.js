import { CREATE_FETCHED_POST } from "./types";

const fetchedPostsReducer = (state = [], action) => {
    switch (action.type) {
        default: 
            return state;
        case CREATE_FETCHED_POST: 
            return []
    }
}

export {fetchedPostsReducer}