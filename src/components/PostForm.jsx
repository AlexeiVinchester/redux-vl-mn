import React from "react";
import { connect } from "react-redux";
import { createPost, errorLoader } from "../redux/actions";
import { ErrorLoader } from "./ErrorLoader";
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
        if(!newPost.title.trim()) {
            return this.props.errorLoader('You are trying to enter empty title!')
        }
        this.props.createPost(newPost);
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
                {
                    this.props.errorValue && <ErrorLoader text={this.props.errorValue} />
                }
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

const mapDispatchToProps = {
    createPost, errorLoader
};

const mapStateToProps = (state) => {
    return {
        errorValue: state.error.error
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostForm)