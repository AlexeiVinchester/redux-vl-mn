import { CREATE_FETCHED_POST, CTREATE_POST } from "./types"

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
        console.log(json)
        dispatch({
            type: CREATE_FETCHED_POST,
            payload: json
        })
    }
}

export {createPost, fetchPost}