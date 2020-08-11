import React from 'react';
import SdmModal from './SdmModal';

const SDM = () => {
  return (
    <>
      <SdmModal />
      <div className="center-align">
        <h4 className="white-text" data-aos="zoom-in-down" data-aos-delay="200">
          SDM Library System
        </h4>
        <a className="modal-trigger" href="#sdmModal">
          <div
            className="img sdm"
            data-aos="zoom-in-down"
            data-aos-delay="200"
          ></div>
        </a>
      </div>
    </>
  );
};

export default SDM;
