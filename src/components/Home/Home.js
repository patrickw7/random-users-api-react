import React from "react";

import homeLogo from "../../assets/homeLogo.png";
import "./Home.scss";

const Home = () => {
  return (
    <div className="homePage">
      <h1>Create Random User API cards</h1>
      <img className="homeLogo" src={homeLogo} alt="users" />
    </div>
  );
};

export default Home;