import PostAux from 'components/PostAux';
import styles from './Posts.module.css';
import posts from 'json/tecs.json'; 

export default function Posts () {
    return (
        <div>
            <ul className={styles.posts}>
                {posts.map((post) => (
                    <li key={post.id}>
                       <PostAux post={post} />
                    </li>
                ))}
            </ul>
        </div>
    )
}