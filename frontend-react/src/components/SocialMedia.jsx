import React from 'react';
import { BsTwitter, BsGithub, BsLinkedin } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
  <a href="https://twitter.com/manuchim_ix">
    <div>
      <BsTwitter />
    </div>
  <a/>
  <a href="https://github.com/mxnuchim">
    <div>
      <BsGithub />
    </div>
  <a/>
  <a href="https://linkedin.com/in/manuchimoliver">
    <div>
      <BsLinkedin />
    </div>
  <a/>
  </div>
);

export default SocialMedia;
