import React from "react";
import { connect } from "react-redux";
import { createPost } from "../redux/actions";
class PostForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
        };
    }

    submitHandler = (event) => {
        event.preventDefault();
        
        const newPost = {
            title: this.state.title,
            id: Date.now().toString()
        }
        if(newPost.title.trim().length) {
            this.props.dispatch(createPost(newPost));
        }
        
        this.setState({title: ''});
        
    }

    changeInputHandler = (event) => {
        this.setState((prev) => ({
            ...prev,
            [event.target.name]: event.target.value,
        }))
    }

    render() {
        return (
            <form onSubmit={this.submitHandler}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Post header</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="title" 
                        value={this.state.title}
                        name="title"
                        onChange={this.changeInputHandler}
                    />
                </div>
                <button className="btn btn-success" type="submit">Create</button>
            </form>
        );
    }
}


export default connect()(PostForm)