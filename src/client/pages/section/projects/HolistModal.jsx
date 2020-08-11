import React, { useEffect } from 'react';

import Home from '../../../assets/img/holistic/Home.png';
import Info from '../../../assets/img/holistic/info.jpg';
import HolisticImage from '../../../assets/img/holistic/holistic.jpg';
import Fruit from '../../../assets/img/holistic/fruit.jpg';
import Footer from '../../../assets/img/holistic/footer.jpg';
import Login from '../../../assets/img/holistic/login.jpg';
import Allpost from '../../../assets/img/holistic/allpost.jpg';
import Edit from '../../../assets/img/holistic/edit.jpg';
import Chhc from '../../../assets/img/holistic/chhc.jpg';

const HolisticModal = () => {
  return (
    <div id="holisticModal" className="modal">
      <div className="modal-content ">
        <h4>Holisticare Website</h4>
        <h6>Languages used</h6>
        <div>
          <div className="chip">HTML</div>
          <div className="chip">CSS</div>
          <div className="chip">Javascript</div>
          <div className="chip">PHP</div>
          <div className="chip">Laravel</div>
          <div className="chip">React JS</div>
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
          I have developed this project for an office in my recent company that
          is promoting a healthy lifestyle. In this website you can see what
          they are about, the products they offer and facts about the plants
          that can give you benefit in terms of your overall health issues.
        </p>
        <a
          href="http://new.holisticare.info/"
          target="_blank"
          className="green-text"
        >
          http://new.holisticare.info/
        </a>
        <div className="center-align" style={{ marginTop: '15px' }}>
          <img src={Home} alt="home" className="modalImage" />
          <img src={Info} alt="home" className="modalImage" />
          <img src={HolisticImage} alt="home" className="modalImage" />
          <img src={Chhc} alt="home" className="modalImage" />
          <img src={Fruit} alt="home" className="modalImage" />
          <img src={Footer} alt="home" className="modalImage" />
          <img src={Login} alt="home" className="modalImage" />
          <img src={Allpost} alt="home" className="modalImage" />
          <img src={Edit} alt="home" className="modalImage" />
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

export default HolisticModal;
