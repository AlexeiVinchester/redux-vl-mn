import React from "react";
import Post from "./Post";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
    return {
        syncPosts: state.posts
    }
};

const Posts = ({syncPosts}) => {
    
    if (!syncPosts.length) {
        return <p className="text-center">There haven't been posts yet</p>
    }
    return syncPosts.map(post => <Post post={post} key={post.id}/>)
};

export default connect(mapStateToProps)(Posts);