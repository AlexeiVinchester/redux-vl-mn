import React from "react";

export default class PostForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    submitHandler = (event) => {

    }

    render() {
        return (
            <form onSubmit={this.submitHandler}>
                <div className="mb-3">
                    <label for="title" class="form-label">Post header</label>
                    <input type="text" class="form-control" id="title" />
                </div>
                <button className="btn btn-success" type="submit">Create</button>
            </form>
        );
    }
}