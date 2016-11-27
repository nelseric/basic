import React, { PropTypes } from 'react';
import Inspector from 'react-inspector';


const NoMatch = ({location}) => {
  return (
    <div>
      <h3>There's nothing here.</h3>
      <Inspector data={location} />
    </div>
  )
}

NoMatch.propTypes = {
  location: PropTypes.object,
}

export default NoMatch;
