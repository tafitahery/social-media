import './rightbar.css';

export default function Rightbar() {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <div className="birhtdayContainer">
          <img className="birthdayImg" src="/assets/gift.png" alt="" />
          <span className="birthdayText">
            <b>Pola Foster</b> and <b>3 other friends</b> have a birthday today
          </span>
        </div>
        <img src="/assets/ad.png" alt="" className="rightbarAdd" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img
                className="rightbarProfileImg"
                src="assets/person/3.jpeg"
                alt=""
              />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Lucy Carter</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img
                className="rightbarProfileImg"
                src="assets/person/3.jpeg"
                alt=""
              />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Lucy Carter</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img
                className="rightbarProfileImg"
                src="assets/person/3.jpeg"
                alt=""
              />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Lucy Carter</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img
                className="rightbarProfileImg"
                src="assets/person/3.jpeg"
                alt=""
              />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Lucy Carter</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img
                className="rightbarProfileImg"
                src="assets/person/3.jpeg"
                alt=""
              />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Lucy Carter</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img
                className="rightbarProfileImg"
                src="assets/person/3.jpeg"
                alt=""
              />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Lucy Carter</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
