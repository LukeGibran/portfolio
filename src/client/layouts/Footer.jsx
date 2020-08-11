import React from 'react';

const Footer = () => {
  return (
    <footer className="page-footer grey darken-3">
      <div className="container">
        <div className="row">
          <div className="col l6 s12">
            <h5 className="white-text">End of Portfolio</h5>
            <p className="grey-text text-lighten-4">
              <div className="white-text">
                Icons made by{' '}
                <a
                  href="https://www.flaticon.com/authors/smalllikeart"
                  title="smalllikeart"
                >
                  smalllikeart
                </a>{' '}
                from{' '}
                <a href="https://www.flaticon.com/" title="Flaticon">
                  www.flaticon.com
                </a>
              </div>
              <div className="white-text">
                Icons made by{' '}
                <a
                  href="https://www.flaticon.com/authors/vectors-market"
                  title="Vectors Market"
                >
                  Vectors Market
                </a>{' '}
                from{' '}
                <a href="https://www.flaticon.com/" title="Flaticon">
                  www.flaticon.com
                </a>
              </div>
            </p>
          </div>
          <div className="col l4 offset-l2 s12">
            <h5 className="white-text">Links</h5>
            <ul>
              <li>
                <a className="grey-text text-lighten-3" href="#aboutme">
                  About Me
                </a>
              </li>
              <li>
                <a className="grey-text text-lighten-3" href="#projects">
                  Projects
                </a>
              </li>
              <li>
                <a className="grey-text text-lighten-3" href="#contact">
                  Contact Me
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container white-text">© 2020 Copyright</div>
      </div>
    </footer>
  );
};

export default Footer;
