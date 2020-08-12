import React, { lazy, Suspense } from 'react';

import Preloader from '../../layouts/Preloader';

// Projects
/*
import Dulang from './projects/Dulang';
import Holistic from './projects/Holistic';
import SDM from './projects/Sdm.jsx';
*/

const Dulang = lazy(() => import('./projects/Dulang'));

const Holistic = lazy(() => import('./projects/Holistic'));

const SDM = lazy(() => import('./projects/Sdm'));

const Projects = () => {
  return (
    <div className="row  " id="projects">
      <div className="container">
        <div className="col s12 center-align">
          <h3 className="white-text project-heading" data-aos="flip-down">
            Projects{' '}
          </h3>
        </div>

        <Suspense fallback={<Preloader color="red" />}>
          <div className="col xl6 l8 offset-l2 m12  s12">
            <Dulang />
          </div>
          <div className="col xl6 l8 offset-l2 m12  s12">
            <Holistic />
          </div>
          <div className="col xl6 l8 offset-l2 m12  s12">
            <SDM />
          </div>
        </Suspense>
      </div>
    </div>
  );
};

export default Projects;
