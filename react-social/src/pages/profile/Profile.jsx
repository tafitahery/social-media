import axios from 'axios';
import { useEffect, useState } from 'react';
import Feed from '../../components/feed/Feed';
import Rightbar from '../../components/rightbar/Rightbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Topbar from '../../components/topBar/Topbar';
import './profile.css';

function Profile() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchUser = async () => {
      const { data } = await axios.get(`/users?username=jhon`);
      setUser(data);
    };
    fetchUser();
  }, []);

  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="proflileRightTop">
            <div className="profileCover">
              <img
                className="ProfileCoverImg"
                src={user.coverPicture || PF + 'person/noCover.png'}
                alt=""
              />
              <img
                className="ProfileUserImg"
                src={user.profilePicture || PF + 'person/noAvatar.png'}
                alt=""
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">{user.username}</h4>
              <span className="profileInfoDesc">{user.desc}</span>
            </div>
          </div>
          <div className="proflileRightBottom">
            <Feed username="jhon" />
            <Rightbar user={user} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
