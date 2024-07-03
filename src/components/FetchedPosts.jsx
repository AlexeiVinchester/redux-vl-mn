import React from "react";
import Post from "./Post";
import { connect } from "react-redux";
import { fetchPost } from "../redux/actions";

const mapStateToProps = (store) => {
    return {
        fetchedPosts: store.fetchedPosts
    }
}

const FetchedPosts = ({ fetchedPosts, dispatch }) => {

    const onClickHandler = () => {
        console.log('Load button was clicked');
        dispatch(fetchPost())
    }

    if (!fetchedPosts.length) {
        return <button onClick={onClickHandler} className="btn btn-primary">Load</button>
    }
    return fetchedPosts.map(post => <Post post={post} key={post.id}/>)
};

export default connect(mapStateToProps)(FetchedPosts);