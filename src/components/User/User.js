import React from "react";
import ReactPlaceholder from "react-placeholder";
import "react-placeholder/lib/reactPlaceholder.css";
import { Link } from "react-router-dom";

import "./User.scss";
import Button from "../Button";

const User = ({ photo, name, surname, email, ready, id }) => {
  return (
    <ReactPlaceholder
      showLoadingAnimation
      type="media"
      rows={7}
      ready={ready}
      style={{ width: 280, height: 260, marginTop: 20 }}
    >
      <div className="card">
        <img src={photo} alt="user" />

        <h2>
          {name} {surname}
        </h2>
        <p>{email}</p>
        <Link to={`/${id}`}>
          <Button>More</Button>
        </Link>
      </div>
    </ReactPlaceholder>
  );
};

export default User;