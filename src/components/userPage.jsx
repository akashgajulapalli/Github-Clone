import React, { useEffect, useState } from "react";
import NavBar from "./NavBar/navbar";
import Repositories from "./Repositories/repositories";
import Tabs from "./Tabs/tabs";
import UserInfo from "./UserInfo/userInfo";
import { getUserData, getUserRepo } from "../components/Api/api";
import Loading from "./Loading/loading";

const UserPage = (props) => {
  const { match } = props;
  const [user, setUser] = useState("");
  const [repos, setRepos] = useState([]);
  const userNameParams = match.params.userName;

  useEffect(() => {
    fetchUser();
    fetchRepos();
  }, []);

  const fetchUser = async () => {
    const { data } = await getUserData(userNameParams);
    setUser(data);
  };

  const fetchRepos = async () => {
    const { data } = await getUserRepo(userNameParams);
    setRepos(data);
  };

  return (
    <>
      {user ? (
        <>
          <NavBar user={user} />
          <div className="container">
            <UserInfo user={user} />
            <Tabs repos={repos} user={user} />
            <Repositories repos={repos} user={user} />
          </div>
        </>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default UserPage;
