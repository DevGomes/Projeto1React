import { Component } from "react"
import './styles.css';

class PostCard extends Component {
    
    render() {
        const { post } = this.props;

        return( 
            <div className='post'>
                <img src={post.cover} alt={post.title}></img>
                <div className="post-content">
                    <h1>{post.title} {post.id}</h1>
                    <p>{post.body}</p>
                </div>
            </div>
        );
    }

}

export default PostCard