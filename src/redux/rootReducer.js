import { combineReducers } from "redux";
import { postsReducer } from "./postsReducer";
import { fetchedPostsReducer } from "./fetchedPostsReducer";
import { hooksFetchPostsReducer } from "./hooksFetchPostsReducer";


const rootReducer = combineReducers({
    posts: postsReducer,
    fetchedPosts: fetchedPostsReducer,
    hooksFetchPosts: hooksFetchPostsReducer
});

export { rootReducer }