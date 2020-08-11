import React from 'react';
import HolisticModal from './HolistModal';

import Home from '../../../assets/img/holistic/Home.png';

const Holistic = () => {
  return (
    <>
      <HolisticModal />
      <div className="center-align">
        <h4 className="white-text" data-aos="zoom-in-down" data-aos-delay="100">
          Holisticare Website
        </h4>

        <a className="modal-trigger" href="#holisticModal">
          <div
            className="img holistic"
            data-aos="zoom-in-down"
            data-aos-delay="100"
          ></div>
        </a>
      </div>
    </>
  );
};

export default Holistic;
