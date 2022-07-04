import PostCard from "../PostCard/PostCard";
import './styles.css';

/**
 * Forma primitiva de implementação de componentes React
 * 
 */

// Desestruturação dentro dos parametros da função
export const Posts = ({ posts }) => (
    <div className="posts">
    {
      posts.map(post => (
        <PostCard post={post} key={post.id} ></PostCard>
      ))
    }
   </div>
); 