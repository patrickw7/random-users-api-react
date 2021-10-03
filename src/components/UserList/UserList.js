import React, { useState, useEffect } from "react";
import axios from "axios";
import { Switch, Route } from "react-router-dom";

import User from "../User";
import UserDetails from "../UserDetails";

const UserList = () => {
  const [user, setUser] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [hasError, setError] = useState(false);
  const [ready, setReady] = useState(false);

  const amountOfUsers = "?results=10";
  const API_URL = "https://randomuser.me/api/";

  const getData = () => {
    axios(`${API_URL}${amountOfUsers}`)
      .then((response) => {
        setUser(response.data.results);
        setLoading(false);
      })
      .catch((error) => {
        setError(true);
        setLoading(false);
        console.error(error);
      });
  };

  useEffect(() => {
    getData();
    let lazyDataLoading = setTimeout(() => {
      setReady(true);
    }, 5000);

    return () => {
      clearTimeout(lazyDataLoading);
    };
  }, []);
  return (
    <React.Fragment>
      {isLoading && <p>Loading please be patient...</p>}
      {hasError && <p>An error has occurred</p>}
      <Switch>
        <Route exact path="/users">
          {!isLoading &&
            user.map((user) => {
              return (
                <div key={user.login.uuid}>
                  <User
                    photo={user.picture.medium}
                    name={user.name.first}
                    surname={user.name.last}
                    email={user.email}
                    registrationDate={user.registered.date}
                    id={user.login.uuid}
                    ready={ready}
                  />
                </div>
              );
            })}
        </Route>
        <Route exact path={`/:userID`}>
          <UserDetails user={user} />
        </Route>
      </Switch>
    </React.Fragment>
  );
};

export default UserList;