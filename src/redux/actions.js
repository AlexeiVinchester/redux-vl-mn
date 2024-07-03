import { CREATE_FETCHED_POST, CTREATE_POST, CREATE_HOOKS_FETCHED_POST } from "./types"

const createPost = (post) => {
    return {
        type: CTREATE_POST,
        payload: post
    }
}

const fetchPost = () => {
    return async (dispatch) => {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
        const json = await response.json();
        dispatch({
            type: CREATE_FETCHED_POST,
            payload: json
        })
    }
}

const hooksFetchPost = () => {
    return async (dispatch) => {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
        const json = await response.json();
        dispatch({
            type: CREATE_HOOKS_FETCHED_POST,
            payload: json
        })
    }
}

export {createPost, fetchPost, hooksFetchPost}