import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function Home() {
  return (
    <Fragment>
      <Link to="/hello">to Hello</Link>
      <p>I'm Home</p>
    </Fragment>
  );
}
