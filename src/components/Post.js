import React, { Component } from 'react'

class Post extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            post: []
        }
    }
    componentWillUnmount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => this.setState({ post: data }));
    }

    render() {
        const postItems = this.state.post.map(post => (
            <div key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
            </div>
        ));
        return (
            <div>

                <p>POST</p>
                {postItems}
            </div>
        )
    }
}

export default Post;