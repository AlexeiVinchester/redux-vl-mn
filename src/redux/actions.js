import { CTREATE_POST } from "./types"

const createPost = (post) => {
    return {
        type: CTREATE_POST,
        payload: post
    }
}

export {createPost}