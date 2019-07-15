import React from 'react';
import PropTypes from 'prop-types';

const Loader = (props) => (
  <div className="loader">
    <img src="/image/ball.svg" alt="loading"/>
    <h2>{props.message}</h2>
  </div>
)
Loader.propTypes = {
  message: PropTypes.string 
}

export default Loader;