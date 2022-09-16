import './post.css';
import { MoreVert } from '@mui/icons-material';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { format } from 'timeago.js';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

export default function Post({ post }) {
  const [like, setLike] = useState(post.likes.length);
  const [isLike, setIsLike] = useState(false);
  const [user, setUser] = useState({});
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const { user: currentUser } = useContext(AuthContext);

  useEffect(() => {
    setIsLike(post.likes.includes(currentUser._id));
  }, [post.likes, currentUser._id]);

  useEffect(() => {
    const fetchUser = async () => {
      const { data } = await axios.get(`/users?userId=${post.userId}`);
      setUser(data);
    };
    fetchUser();
  }, [post.userId]);

  const likeHandler = async () => {
    try {
      await axios.put(`/posts/${post._id}/like`, { userId: currentUser._id });
    } catch (err) {}
    setLike(isLike ? like - 1 : like + 1);
    setIsLike(!isLike);
  };
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <Link to={`/profile/${user.username}`}>
              <img
                className="postProfileImg"
                src={
                  user.profilePicture
                    ? PF + user.profilePicture
                    : PF + 'person/noAvatar.png'
                }
                alt=""
              />
            </Link>
            <span className="postUsername">{user.username}</span>
            <span className="postDate">{format(post.createdAt, 'fr_FR')}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.desc}</span>
          <img className="postImg" src={PF + post.img} alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img
              className="likeIcon"
              src={`${PF}like.png`}
              onClick={likeHandler}
              alt=""
            />
            <img
              className="likeIcon"
              src={`${PF}heart.png`}
              onClick={likeHandler}
              alt=""
            />
            <span className="postLikeCounter">{like} peoples like it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{post.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}
