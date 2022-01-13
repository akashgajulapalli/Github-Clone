import axios from "axios";

const base_url = "https://api.github.com";

export const getUserData = async (userName) => {
  const userInfo = await axios.get(base_url + "/users/" + userName);
  return userInfo;
};

export const getUserRepo = async (userName) => {
  const repos = await axios.get(base_url + "/users/" + userName + "/repos");
  return repos;
};
