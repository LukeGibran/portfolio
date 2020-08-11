import React from 'react';

// Projects
import Dulang from './projects/Dulang';
import Holistic from './projects/Holistic';
import SDM from './projects/Sdm.jsx';

const Projects = () => {
  return (
    <div className="row  " id="projects">
      <div className="container">
        <div className="col s12 center-align">
          <h3 className="white-text project-heading">Projects </h3>
        </div>
        <div className="col l6 m12  s12">
          <Dulang />
        </div>
        <div className="col l6 m12  s12">
          <Holistic />
        </div>
        <div className="col l6 m12  s12">
          <SDM />
        </div>
      </div>
    </div>
  );
};

export default Projects;