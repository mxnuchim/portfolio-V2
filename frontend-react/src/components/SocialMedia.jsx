import React from 'react';
import { BsTwitter, BsGithub, BsLinkedin } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <div href="https://twitter.com/manuchim_ix">
      <BsTwitter />
    </div>
  <div href="https://github.com/mxnuchim">
      <BsGithub />
  </div>
  <div href="https://linkedin.com/in/manuchimoliver">
      <BsLinkedin />
    </div>
  </div>
);

export default SocialMedia;
