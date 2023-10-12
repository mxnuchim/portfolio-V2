import React from 'react';
import { BsTwitter, BsGithub, BsLinkedin, BsMedium } from 'react-icons/bs';

import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import './Footer.scss';

const Footer = () => {
  return (
    <>
      <h2 className="head-text">Contact me</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card ">
          <img src={images.bluemail} alt="email" />
          <a href="mailto:manuchimoliver779@gmail.com" className="p-text">
            manuchimoliver779@gmail.com
          </a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="phone" />
          <a href="tel:+234 708 160 1461" className="p-text">
            +234 708 160 1461
          </a>
        </div>
        <div className="app__footer-link">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/mxnuchim"
            style={{ color: 'black' }}
          >
            <BsGithub style={{ height: 27, width: 30 }} />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/manuchimoliver"
            style={{ color: 'black' }}
          >
            <BsLinkedin style={{ height: 27, width: 30 }} />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.medium.com/@manuchimoliver779"
            style={{ color: 'black' }}
          >
            <BsMedium style={{ height: 27, width: 30 }} />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://twitter.com/manuchim_ix"
            style={{ color: 'black' }}
          >
            <BsTwitter style={{ height: 27, width: 30 }} />
          </a>
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__whitebg'
);
