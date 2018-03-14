import React from 'react';

const NotFound = ({ history }) => (
  <div className="not-found">
    <h2 className="not-found-title">NotFound</h2>
    <button className="button" onClick={() => history.push('/')}>Discover</button>
  </div>
);

export default NotFound;
