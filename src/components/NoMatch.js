import React, { PropTypes } from 'react';
import Inspector from 'react-inspector';


const NoMatch = ({ location }) => (
  <div>
    <h3>There&apos;s nothing here.</h3>
    <Inspector data={location} />
  </div>
);

NoMatch.propTypes = {
  location: PropTypes.object,
};

export default NoMatch;
