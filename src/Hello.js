import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function Hello() {
  return (
    <Fragment>
      <Link to="/">to Home</Link>

      <p>I'm Hello Page</p>
    </Fragment>
  );
}
