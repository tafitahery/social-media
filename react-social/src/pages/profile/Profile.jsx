import Feed from '../../components/feed/Feed';
import Rightbar from '../../components/rightbar/Rightbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Topbar from '../../components/topBar/Topbar';
import './profile.css';

function Profile() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

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
                src={`${PF}post/3.jpeg`}
                alt=""
              />
              <img
                className="ProfileUserImg"
                src={`${PF}person/7.jpeg`}
                alt=""
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">Safak Kocaoglu</h4>
              <span className="profileInfoDesc">Hello my friends</span>
            </div>
          </div>
          <div className="proflileRightBottom">
            <Feed />
            <Rightbar profile />
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
