import React from 'react';

import PropTypes from 'prop-types';

const Preloader = ({ component, color }) => {
  return (
    <div className="row center-align" style={{ margin: '20px 0' }}>
      <div className="preloader-wrapper big active">
        <div className={`spinner-layer spinner-${color ? color : 'blue'}-only`}>
          <div className="circle-clipper left">
            <div className="circle"></div>
          </div>
          <div className="gap-patch">
            <div className="circle"></div>
          </div>
          <div className="circle-clipper right">
            <div className="circle"></div>
          </div>
        </div>
      </div>
      {component === 'App' ? <h3>Loading Liuk&lsquo;s Portfolio</h3> : null}
    </div>
  );
};

Preloader.propTypes = {
  component: PropTypes.string,
  color: PropTypes.string,
};

export default Preloader;
