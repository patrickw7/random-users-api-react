import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { useParams, Link } from 'react-router-dom';

import './UserDetails.scss';
import Button from '../Button';

const UserDetails = ({ user }) => {
  const { userID } = useParams();
  return (
    <div className='userDetailsContainer'>
      <h2>Details</h2>
      {user
        .filter((user) => user.login.uuid === userID)
        .map((user) => {
          const latitude = user.location.coordinates.latitude;
          const longitude = user.location.coordinates.longitude;
          const position = [latitude, longitude];
          const formattedRegistrationDate = user.registered.date.substring(
            0,
            10
          );
          return (
            <div key={user.login.uuid} className='cardBack'>
              <div className='cardBack__information'>
                <span>Address:</span>
                <p>
                  {user.location.street.name} {user.location.street.number},{' '}
                  {user.location.city}
                </p>
                <span>Country:</span>
                <p>{user.location.country}</p>
                <span>Phone:</span>
                <p>{user.phone}</p>
                <span>Registration date:</span>
                <p>{formattedRegistrationDate}</p>
                <Link to='/users'>
                  <Button>Back</Button>
                </Link>
              </div>
              <MapContainer
                className='leaflet-container'
                center={position}
                zoom={8}
                scrollWheelZoom={true}
              >
                <TileLayer
                  attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                  url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                />
                <Marker position={position}>
                  <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                  </Popup>
                </Marker>
              </MapContainer>
            </div>
          );
        })}
    </div>
  );
};

export default UserDetails;
