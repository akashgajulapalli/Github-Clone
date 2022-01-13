import React from "react";
import "./repositories.css";
import SingleRepo from "./singleRepo";

const Repositories = (props) => {
  const { repos, user } = props;
  return (
    <section className="repositories">
      {
        repos.length>0
        ?repos.map((item) => {
          return <SingleRepo key={item.id} repo={item} user={user} />

        })
        :null
      }
    </section>
  );
};

export default Repositories;
