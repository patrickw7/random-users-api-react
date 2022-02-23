import React from "react";
import { Switch, Route } from "react-router-dom";

import useAxios from "../../utils/hooks/useAxios";
import User from "../User";
import UserDetails from "../UserDetails";

const UserList = () => {
  const { user, isLoading, hasError, dataReady } = useAxios(process.env.REACT_APP_API_ENDPOINT);

  return (
    <React.Fragment>
      {isLoading && <p>Loading please be patient...</p>}
      {hasError && <p>An error has occurred, Try again later!</p>}
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
                    dataReady={dataReady}
                  />
                </div>
              );
            })}
        </Route>
        <Route exact path={"/:userID"}>
          <UserDetails user={user} />
        </Route>
      </Switch>
    </React.Fragment>
  );
};

export default UserList;
