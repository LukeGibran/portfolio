import React, { useEffect } from 'react';
import HolisticModal from './HolistModal';

// Materialize JS
import M from 'materialize-css/dist/js/materialize.min.js';

const Holistic = () => {
  useEffect(() => {
    var elems = document.querySelectorAll('.modal');
    M.Modal.init(elems, {});
  }, []);
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
