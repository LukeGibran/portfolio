import React from 'react';
import HolisticModal from './HolistModal';

import Home from '../../../assets/img/holistic/Home.png';

const Holistic = () => {
  return (
    <>
      <HolisticModal />
      <div className="center-align">
        <h4 className="white-text">Holisticare Website</h4>

        <a className="modal-trigger" href="#holisticModal">
          <div className="img holistic"></div>
        </a>
      </div>
    </>
  );
};

export default Holistic;
