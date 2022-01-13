import "./tabs.css";
import React from "react";

const Tabs = (props) => {
  const { user } = props;
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <p className="nav-link mb-0 active">Repositories</p>
      </li>

      <li className="nav-item">
        <a
          className="nav-link mb-0"
          target="_blank"
          rel="noopener noreferrer"
          href={`https://github.com/${user.login}?tab=packages`}
        >
          packages
        </a>
      </li>

      <li className="nav-item" href={``}>
        <a
          className="nav-link mb-0"
          target="_blank"
          rel="noopener noreferrer"
          href={`https://github.com/${user.login}?tab=people`}
        >
          people
        </a>
      </li>

      <li className="nav-item">
        <a
          href={`https://github.com/${user.login}?tab=project`}
          target="_blank"
          rel="noopener noreferrer"
          className="nav-link mb-0"
        >
          projects
        </a>
      </li>
    </ul>
  );
};

export default Tabs;
