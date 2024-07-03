import React from "react";
import Post from "./Post";
import { useDispatch, useSelector } from "react-redux";
import { hooksFetchPost } from "../redux/actions";


const HookFetchedPosts = () => {
    
    const dispatch = useDispatch();
    const hooksFetchedPosts = useSelector((state) => state.hooksFetchPosts)
    const onClickHandle = () => {
        dispatch(hooksFetchPost());
    }

    if (!hooksFetchedPosts.length) {
        return <button onClick={onClickHandle} className="btn btn-primary">Load</button>
    }
    return hooksFetchedPosts.map(post => <Post post={post} key={post.id}/>)
};

export default HookFetchedPosts;