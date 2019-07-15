import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class Header extends React.Component {
  static propTypes = {
    siteName: PropTypes.string.isRequired
  }
  state = {  }
  render() { 
    return (  
      <h1>
        <Link to='/'>{this.props.siteName}</Link>
      </h1>
    );
  }
}
 
export default Header ;