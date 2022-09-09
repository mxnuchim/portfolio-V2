import React from 'react';
import { BsTwitter, BsGithub, BsLinkedin } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <a href="https://twitter.com/manuchim_ix" target="_blank" rel="noreferrer">
      <div classname="app_social_single">
        <BsTwitter />
      </div>
    <a/>
    <a href="https://github.com/mxnuchim" target="_blank" rel="noreferrer">
      <div classname="app_social_single">
        <BsGithub />
      </div>
    <a/>
    <a href="https://linkedin.com/in/manuchimoliver" target="_blank" rel="noreferrer">
      <div classname="app_social_single">
        <BsLinkedin />
      </div>
    <a/>
  </div>
);

export default SocialMedia;
