import {
    CREATE_FETCHED_POST,
    CTREATE_POST,
    CREATE_HOOKS_FETCHED_POST,
    SHOW_LOADER, HIDE_LOADER,
    ERROR_LOADER,
    ERROR_HIDE
} from "./types"

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

const showLoader = () => {
    return {
        type: SHOW_LOADER
    };
}

const hideLoader = () => {
    return {
        type: HIDE_LOADER
    }
}

const errorLoader = (text) => {
    return (dispatch) => {
        dispatch({
            type: ERROR_LOADER,
            payload: text
        });
        setTimeout(() => dispatch(hideError()), 3000)
    }
    
    
}

const hideError = () => {
    return {
        type: ERROR_HIDE
    }
};

const hooksFetchPost = () => {
    return async (dispatch) => {
        
        try {
            dispatch(showLoader());
            const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
            const json = await response.json();
            setTimeout(() => {
                dispatch({
                    type: CREATE_HOOKS_FETCHED_POST,
                    payload: json
                });
                dispatch(hideLoader());
            }, 3000)
            
            
        } catch (error) {
            dispatch(errorLoader(`Name: ${error.name}, messaage: ${error.message}`));
            dispatch(hideLoader());
        }
    }
}

export {
    createPost,
    fetchPost,
    hooksFetchPost,
    showLoader,
    hideLoader,
    hideError,
    errorLoader
}