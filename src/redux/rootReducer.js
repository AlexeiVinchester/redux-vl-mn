import { combineReducers } from "redux";
import { postsReducer } from "./postsReducer";
import { fetchedPostsReducer } from "./fetchedPostsReducer";


const rootReducer = combineReducers({
    posts: postsReducer,
    fetchedPosts: fetchedPostsReducer
});

export { rootReducer }