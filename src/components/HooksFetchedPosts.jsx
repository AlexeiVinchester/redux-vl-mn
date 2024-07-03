import React from "react";
import Post from "./Post";


const HookFetchedPosts = ({ fetchedPosts}) => {
    
    if (!fetchedPosts.length) {
        return <button className="btn btn-primary">Load</button>
    }
    return fetchedPosts.map(post => <Post post={post} key={post.id}/>)
};

export default HookFetchedPosts;