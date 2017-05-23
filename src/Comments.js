import React, { Component } from 'react';

class Comments extends Component {
    constructor(props) {
        super(props)
        this.state = {
            comment:''
        }

        this.updateComment = this.updateComment.bind(this)
    }

    updateComment(ev) {
        this.setState ({
            comment: ev.target.value
        })
    }

    render() {
        return(
            <div className="comments">
                <textarea 
                value={this.state.comment} 
                placeholder="Enter comment here"
                onChange={this.updateComment}>
                </textarea>
                <button className="button">Submit comment</button>
            </div>
        );
    }
}

export default Comments