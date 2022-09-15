import { useState, useEffect } from 'react';
import axios from 'axios';
import Post from '../post/Post';
import Share from '../share/Share';
import './feed.css';

export default function Feed({ username }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const { data } = username
        ? await axios.get('/posts/profile/' + username)
        : await axios.get('/posts/timeline/631c88496d8ec05a6020fbdd');
      setPosts(data);
    };
    fetchPosts();
  }, [username]);

  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {posts.map((p) => (
          <Post key={p._id} post={p} />
        ))}
      </div>
    </div>
  );
}
