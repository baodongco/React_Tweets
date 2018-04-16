import React, { Component } from 'react';

class Tweet extends Component {
    render() {
        let tweet = this.props.tweet;
        return (
            <div>
                {tweet.text};
                <br/>
                <a href="#" onClick={() => this.props.handleLike(tweet)}>
                    {tweet.liked ? 'Unlike' : 'Like'} Post</a>
                <button href="#" onClick={() => this.props.handleDelete(tweet)} 
                    type="button">Delete</button>
            </div>
        )
    }
}

export default Tweet;