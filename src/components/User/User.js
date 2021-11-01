import React from 'react';
import PropTypes from 'prop-types';
import ReactPlaceholder from 'react-placeholder';
import 'react-placeholder/lib/reactPlaceholder.css';
import { Link } from 'react-router-dom';

import './User.scss';
import Button from '../Button';

const User = ({ photo, name, surname, email, dataReady, id }) => {
  return (
    <ReactPlaceholder
      showLoadingAnimation
      type='media'
      rows={7}
      ready={dataReady}
      style={{ width: 360, height: 280, marginTop: 20 }}
    >
      <div className='card'>
        <img src={photo} alt='user' />

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

User.propTypes = {
  photo: PropTypes.string,
  name: PropTypes.string,
  surname: PropTypes.string,
  email: PropTypes.string,
  dataReady: PropTypes.bool,
  id: PropTypes.string
};

export default User;
