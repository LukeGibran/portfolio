import React, { useEffect } from 'react';
import DulangModal from './DulangModal';

// Materialize JS
import M from 'materialize-css/dist/js/materialize.min.js';

const Dulang = () => {
  useEffect(() => {
    var elems = document.querySelectorAll('.modal');
    M.Modal.init(elems, {});
  }, []);
  return (
    <>
      <DulangModal />
      <div className="center-align">
        <h4 className="white-text" data-aos="flip-down">
          Dulang Restaurant Management System
        </h4>

        <a className="modal-trigger" href="#dulangModal">
          <div className="img dulang" data-aos="zoom-in-down"></div>
        </a>
      </div>
    </>
  );
};

export default Dulang;
