import React from "react";
import Post from "./Post";
import { useDispatch, useSelector } from "react-redux";
import { hooksFetchPost } from "../redux/actions";
import { Loader } from "./Loader";

// const fetchedPostsSelector = (state) => state.hooksFetchPosts;


const HookFetchedPosts = () => {

    const dispatch = useDispatch();
    const hooksFetchedPosts = useSelector((state) => state.hooksFetchPosts)

    const isLoading = useSelector((state) => state.loading.loading);

    if (isLoading) {
        return <Loader />
    }
    const onClickHandle = () => {
        dispatch(hooksFetchPost());
    }

    if (!hooksFetchedPosts.length) {
        return <button onClick={onClickHandle} className="btn btn-primary">Load</button>
    }
    return hooksFetchedPosts.map(post => <Post post={post} key={post.id} />)
};

export default HookFetchedPosts;