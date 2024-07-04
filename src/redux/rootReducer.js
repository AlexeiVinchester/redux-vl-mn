import { combineReducers } from "redux";
import { postsReducer } from "./postsReducer";
import { fetchedPostsReducer } from "./fetchedPostsReducer";
import { hooksFetchPostsReducer } from "./hooksFetchPostsReducer";
import { appReducer } from "./appReducer";
import { errorReducer } from "./errorReducer";


const rootReducer = combineReducers({
    posts: postsReducer,
    fetchedPosts: fetchedPostsReducer,
    hooksFetchPosts: hooksFetchPostsReducer,
    loading: appReducer,
    error: errorReducer
});

export { rootReducer }