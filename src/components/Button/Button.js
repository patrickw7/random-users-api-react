import React from 'react';
import PropTypes from 'prop-types';

import './Button.scss';

const Button = ({ children }) => {
  return <button className='btn'>{children}</button>;
};

Button.propTypes = {
  children: PropTypes.string
};

export default Button;
