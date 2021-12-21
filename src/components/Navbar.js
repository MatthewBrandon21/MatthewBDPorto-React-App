import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import './Main.css';

function Navbar() {
  return (
    <>
      <amp-sidebar id="sidebar" class="cid-sS9i9O79ru" layout="nodisplay" side="right">
        <div class="builder-sidebar" id="builder-sidebar">
          <button on="tap:sidebar.close" class="close-sidebar">
          <span></span>
          <span></span>
          </button>
            <ul class="navbar-nav nav-dropdown mbr-column" data-app-modern-menu="true">
              <li class="nav-item">
                <Link to='#features10-2' className='nav-link link text-primary display-4'>About Me</Link>
              </li>
              <li class="nav-item">
                <Link to='#slider2-6' className='nav-link link text-primary display-4'>Projects</Link>
              </li>
              <li class="nav-item">
                <Link to='#contacts5-5' className='nav-link link text-primary display-4'>Contact</Link>
              </li></ul>
            <div class="navbar-buttons mbr-section-btn"><a class="btn btn-sm mbr-bold btn-warning-outline display-4" href="https://drive.google.com/drive/folders/1_ory6p2W6eE5vInPBqeNSNKVS-K5_tUJ?usp=sharing" target="_blank">Download CV</a></div>
          </div>
      </amp-sidebar>
      <section className="menu horizontal-menu cid-sS9i9O79ru" id="menu1-0">
        <nav className="navbar navbar-dropdown navbar-fixed-top">
          <div className="menu-container mbr-jc-s container-fluid">
            <div className="navbar-brand">
                <span className="navbar-logo">
                    <amp-img src="images/apple-touch-icon-80x80.png" layout="responsive" width="40" height="40" alt="MatthewBD Logo" className="mobirise-loader">
                        <div placeholder="" className="placeholder">
                                      <div className="mobirise-spinner">
                                          <em></em>
                                          <em></em>
                                          <em></em>
                                      </div></div>
                        <a href="https://matthewbd.my.id"></a>
                    </amp-img>
                </span>
                <p className="brand-name mbr-fonts-style mbr-bold display-4">MatthewBD</p>
            </div>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav nav-dropdown mbr-column" data-app-modern-menu="true">
                <li className="nav-item">
                  <Link to='#features10-2' className='nav-link link text-primary display-4'>About Me</Link>
                </li>
                <li className="nav-item">
                  <Link to='#slider2-6' className='nav-link link text-primary display-4'>Projects</Link>
                </li>
                <li className="nav-item">
                  <Link to='#contacts5-5' className='nav-link link text-primary display-4'>Contact</Link>
                </li></ul>
              <div className="navbar-buttons mbr-section-btn"><a className="btn btn-sm mbr-bold btn-warning-outline display-4" href="https://drive.google.com/drive/folders/1_ory6p2W6eE5vInPBqeNSNKVS-K5_tUJ?usp=sharing" target="_blank">Download CV</a></div>
            </div>
            <button on="tap:sidebar.toggle" className="ampstart-btn hamburger">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </nav>
      </section>
    </>
  );
}

export default Navbar;
