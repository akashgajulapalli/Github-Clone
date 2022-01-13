import "./userInfo.css";
import React from "react";
import image1 from "../../images/image1.jpeg";

const UserInfo = (props) => {
  const { user } = props;
  return (
    <div className="user-info">
      <img
        src={user.avatar_url}
        className="p-2 avatar"
        width={130}
        height={130}
        alt="profile-img"
      />
      <div className="user-infoDetails">
        <h5>{user.name}</h5>
        <div className="user-infos">
          {user.location ? (
            <div className="user-infoDetail">
              <i className="fa fa-map-marker pr-1" />
              <span>{user.location} .</span>
            </div>
          ) : null}

          {user.blog ? (
            <div className="user-infoDetail">
              <i className="fa fa-globe pr-1" />
              <span>{user.blog} .</span>
            </div>
          ) : null}

          {user.email ? (
            <div className="user-infoDetail">
              <i className="fa fa-envelope pr-1" />
              <span>{user.email} .</span>
            </div>
          ) : null}
          {user.twitter_username ? (
            <div className="user-infoDetail">
              <i className="fa fa-twitter pr-1" />
              <span>{user.twitter_username} .</span>
            </div>
          ) : null}
          {user.followers ? (
            <div className="user-infoDetail">
              <i className="fa fa-group pr-1" />
              <span>{user.followers}Followers .</span>
            </div>
          ) : null}
          {user.following ? (
            <div className="user-infoDetail">
              <i className="fa fa-heart pr-1" />
              <span>{user.following}Following .</span>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
