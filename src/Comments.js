import React, { Component } from 'react';
import './Comments.css'

class Comments extends Component {
    constructor(props) {
        super(props)
        this.state = {
            comment:'',
            comments: [],
        }

        this.updateComment = this.updateComment.bind(this)
        this.addComment = this.addComment.bind(this)
    }

    updateComment(ev) {
        this.setState ({
            comment: ev.target.value
        })
    }

    addComment(ev) {
        const state = {...this.state}
        const comment = {
            text: this.state.comment,
            time: new Date()
        }

        state.comments.push(comment)
        state.comment = ''
        this.setState(state)
    }

    render() {
        return(
            <div className="comments">
                <textarea 
                value={this.state.comment} 
                placeholder="Enter comment here"
                onChange={this.updateComment}>
                </textarea>
                <button 
                className="button" 
                onClick={this.addComment}>
                Submit comment
                </button>
                {this.state.comments.map((comment,i) => <Comment comment={comment} key={i}/>)}
            </div>
        );
    }
}

function Comment (props) {
    return (
            <div className="comment">
                <div>{props.comment.text}</div>
            </div>
        );
}

export default Comments