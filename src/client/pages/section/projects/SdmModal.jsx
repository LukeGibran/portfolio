import React from 'react';

import Home from '../../../assets/img/sdm/home.jpg';
import Allbook from '../../../assets/img/sdm/allbooks.jpg';
import Login from '../../../assets/img/sdm/login.jpg';
import Admin from '../../../assets/img/sdm/admin.jpg';
import Book from '../../../assets/img/sdm/book.jpg';
import Borrow from '../../../assets/img/sdm/borrow.jpg';
import Borrower from '../../../assets/img/sdm/borrower.jpg';
import Borrowers from '../../../assets/img/sdm/borrowers.jpg';
import Track from '../../../assets/img/sdm/track.jpg';

const SdmModal = () => {
  return (
    <div id="sdmModal" className="modal">
      <div className="modal-content ">
        <h4>SDM Library System</h4>
        <h6>Languages used</h6>
        <div>
          <div className="chip">HTML</div>
          <div className="chip">CSS</div>
          <div className="chip">Javascript</div>
          <div className="chip">PHP</div>
          <div className="chip">Boostrap</div>
          <div className="chip">Laravel</div>
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
          This is a project I developed for a Library at my recent workplace. In
          this system they can track the number of books they have, they can
          easily search for a book along with its information, they can track
          who borrowed the book and when will it be returned. This system can
          also serve as a research place for any researcher.
        </p>
        <div className="center-align" style={{ marginTop: '15px' }}>
          <img src={Home} alt="home" className="modalImage" />
          <img src={Allbook} alt="home" className="modalImage" />
          <img src={Login} alt="home" className="modalImage" />
          <img src={Admin} alt="home" className="modalImage" />
          <img src={Book} alt="home" className="modalImage" />
          <img src={Borrow} alt="home" className="modalImage" />
          <img src={Borrower} alt="home" className="modalImage" />
          <img src={Borrowers} alt="home" className="modalImage" />
          <img src={Track} alt="home" className="modalImage" />
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

export default SdmModal;
