import React from 'react';

// Images
import mypic from '../../assets/img/me.jpg';
import laptop from '../../assets/img/laptop.svg';

const Aboutme = () => {
  return (
    <div id="aboutme">
      <div className="row">
        <div className="col l6 s12 center-align" style={{ marginTop: '70px' }}>
          <img
            src={laptop}
            alt="laptop"
            className="laptopLogo "
            data-aos="fade-up"
          />

          <h3 className="myname" data-aos="fade-up" data-aos-delay="100">
            Liuk Jhivran <span className="orange-color"> Tulawie</span>
          </h3>
          <h4 data-aos="fade-up" data-aos-delay="200">
            <span className="orange-color">Web Developer </span>| Programmer
          </h4>
        </div>
        <div
          className="col l6 s12 center-align"
          style={{ position: 'relative' }}
        >
          <svg
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            className="blobLogo"
            data-aos="fade-up"
          >
            <path
              fill="#1976D2"
              d="M44.9,-65.2C59.7,-60.3,74.4,-50.5,76.7,-37.4C79,-24.3,68.8,-8,59.3,3.5C49.8,15,41.1,21.5,33.5,27.3C25.8,33.1,19.3,38.1,10,46.7C0.7,55.3,-11.3,67.4,-18.1,64.2C-24.8,61,-26.3,42.5,-36.4,31.3C-46.5,20,-65.2,16.1,-70.4,7.6C-75.5,-0.9,-67.1,-13.9,-60.8,-27.8C-54.5,-41.7,-50.2,-56.6,-40.4,-63.9C-30.6,-71.1,-15.3,-70.7,-0.2,-70.5C15,-70.2,30,-70.1,44.9,-65.2Z"
              transform="translate(100 100)"
            />
          </svg>
          <img
            src={mypic}
            alt="my picture"
            className="mypic"
            data-aos="fade-up"
            data-aos-delay="100"
          />
        </div>
      </div>{' '}
    </div>
  );
};

export default Aboutme;
