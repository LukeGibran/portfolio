import React from 'react';

import Building from '../../assets/img/building.svg';

const Contact = () => {
  return (
    <div className="row" id="contact">
      <div className="container">
        <div className="col s12 center-align">
          <h3 className="contact-header">Contact Me</h3>
        </div>
        <div className="col l6 m12 s12 center-align">
          <img src={Building} alt="building" id="building" />
        </div>
        <div className="col l6 m12 s12 ">
          <ul className="collection">
            <li className="collection-item avatar">
              <i className="material-icons circle red">email</i>
              <span className="title">Email</span>
              <h5>liukjhivran@gmail.com</h5>
              <a href="#!" className="secondary-content">
                <i className="material-icons">grade</i>
              </a>
            </li>
            <li className="collection-item avatar">
              <i className="material-icons circle green">local_phone</i>
              <span className="title">Phone Number</span>
              <h5>09556839420</h5>
              <a href="#!" className="secondary-content">
                <i className="material-icons">grade</i>
              </a>
            </li>
            <li className="collection-item avatar">
              <i className="material-icons circle blue">contact_phone</i>
              <span className="title">Skype</span>
              <h5>live:threallexz_2</h5>
              <a href="#!" className="secondary-content">
                <i className="material-icons">grade</i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
