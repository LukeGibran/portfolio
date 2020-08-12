import React, { useState } from 'react';

import Home from '../../../assets/img/dulang/Home.jpg';

import Event from '../../../assets/img/dulang/event.jpg';

import Login from '../../../assets/img/dulang/login.jpg';
import Order from '../../../assets/img/dulang/order.jpg';
import Receipt from '../../../assets/img/dulang/receipt.jpg';

const DulangModal = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div id="dulangModal" className="modal">
      <div className="modal-content ">
        <h4>Dulang Restaurant Management System</h4>
        <h6>Languages used</h6>
        <div>
          <div className="chip">HTML</div>
          <div className="chip">CSS</div>
          <div className="chip">Javascript</div>
          <div className="chip">PHP</div>
          <div className="chip">SCSS</div>
        </div>

        <h6>Database</h6>
        <div>
          <div className="chip">MySQL</div>
        </div>
        <h6>Web Server</h6>
        <div>
          <div className="chip">Apache HTTP Server</div>
        </div>
        <h6>Project Description</h6>
        <p>
          This is a project I made of a restaurant here in our city. This system
          allows their customer to reserve online an order and pick up the day
          the customer has set. The client was so pleased with the overall
          design and implementation of the project. This project was developed
          with vanilla Javascript, PHP, HTML & CSS along with Sass
        </p>
        <div className="center-align" style={{ marginTop: '15px' }}>
          <img src={Home} alt="home" className="modalImage" />
          <img src={Event} alt="event" className="modalImage" />
          <img src={Login} alt="login" className="modalImage" />
          <img src={Order} alt="order" className="modalImage" />
          <img src={Receipt} alt="receipt" className="modalImage" />
        </div>
      </div>
      <div className="modal-footer">
        <a
          href="#!"
          className="modal-close waves-effect waves-red red-text btn-flat"
        >
          Close
        </a>
      </div>
    </div>
  );
};

export default DulangModal;
